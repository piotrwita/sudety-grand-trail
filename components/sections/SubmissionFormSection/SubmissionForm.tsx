'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm, Controller, Control } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendSubmissionEmail } from '@/actions/send-email';
import {
  submissionFormSchema,
  SubmissionFormData,
  EmailSubmissionData,
  MAX_DESCRIPTION_LENGTH,
  MAX_ADDITIONAL_PHOTOS,
  ACCEPTED_IMAGE_TYPES,
  TRAIL_TYPES,
} from '@/schemas/submission';
import { sectionIds } from '@/config/section-ids';
import { scrollToSection, getSectionUrl } from '@/lib/section-navigation';
import { siteRoutes } from '@/config/site-routes';
import { FadeIn, ScaleIn } from '@/components/motion';
import {
  CheckCircleSolidIcon,
  InfoCircleSolidIcon,
  ExternalLinkIcon,
  SpinnerIcon,
  CalendarIcon,
  MapIcon,
  UserIcon,
  PhotoIcon,
  DocumentTextIcon,
  PencilIcon,
  PhotoStackIcon,
  CheckIcon,
} from '@/components/icons';
import { useTranslations } from '@/lib/i18n-utils';

/* ============================================================================
   FORM FIELD COMPONENTS
   ============================================================================ */
const FormField = ({
  label,
  required,
  error,
  hint,
  children,
  className = '',
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <label className="mb-1.5 block text-sm font-semibold text-forest-700">
      {label}
      {required && <span className="ml-0.5 text-accent">*</span>}
    </label>
    {children}
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    {hint && !error && <p className="mt-1 text-xs text-mountain-500">{hint}</p>}
  </div>
);

const inputBaseClass =
  'w-full rounded-lg border bg-white/80 px-3 py-2.5 text-sm transition-all duration-200 placeholder:text-mountain-400 focus:bg-white focus:outline-none focus:ring-2';

const inputClassName = (hasError: boolean) =>
  `${inputBaseClass} ${
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
      : 'border-forest-200 hover:border-forest-300 focus:border-forest-400 focus:ring-forest-200'
  }`;

const getFileDisplayText = (
  files: FileList | null | undefined,
  multiple: boolean | undefined,
  t: (key: string, params?: Record<string, string | number>) => string
): string => {
  if (!files || files.length === 0) {
    return t('fileUpload.clickOrDrag');
  }

  if (files.length === 1) {
    return files[0].name;
  }

  const key = files.length < 5 ? 'fileUpload.filesSelected' : 'fileUpload.filesSelectedMany';
  return t(key, { count: files.length });
};

const FileUploadField = ({
  label,
  required,
  error,
  hint,
  accept,
  multiple,
  icon,
  name,
  control,
  t,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  accept: string;
  multiple?: boolean;
  icon: React.ReactNode;
  name: 'photo' | 'gpxFile' | 'additionalPhotos';
  control: Control<SubmissionFormData>;
  t: (key: string, params?: Record<string, string | number>) => string;
}) => (
  <div>
    <label className="mb-1.5 block text-sm font-semibold text-forest-700">
      {label}
      {required && <span className="ml-0.5 text-accent">*</span>}
    </label>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref, ...field } }) => {
        const files = value as FileList | null | undefined;
        const hasFiles = files && files.length > 0;

        return (
          <div
            className={`group relative overflow-hidden rounded-lg border-2 border-dashed transition-all duration-200 ${
              error
                ? 'border-red-300 bg-red-50/50'
                : hasFiles
                  ? 'border-green-400 bg-green-50/50'
                  : 'border-forest-200 bg-forest-50/30 hover:border-forest-400 hover:bg-forest-50/50'
            }`}
          >
            <input
              {...field}
              ref={ref}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={(e) => {
                onChange(e.target.files);
              }}
              className="absolute inset-0 z-10 cursor-pointer opacity-0"
            />
            <div className="flex items-center gap-3 p-3">
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                  error
                    ? 'bg-red-100 text-red-500'
                    : hasFiles
                      ? 'bg-green-100 text-green-600'
                      : 'bg-forest-100 text-forest-600 group-hover:bg-forest-200'
                }`}
              >
                {hasFiles ? <CheckIcon className="h-5 w-5" /> : icon}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-sm font-medium ${hasFiles ? 'text-green-700' : 'text-forest-700'}`}
                >
                  {getFileDisplayText(files, multiple, t)}
                </p>
                {hint && (
                  <p className="truncate text-xs text-mountain-500">{hint}</p>
                )}
              </div>
            </div>
          </div>
        );
      }}
    />
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

const SectionDivider = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-3 pb-2 pt-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-100 text-forest-600">
      {icon}
    </div>
    <h3 className="text-sm font-bold uppercase tracking-wide text-forest-600">
      {title}
    </h3>
    <div className="h-px flex-1 bg-gradient-to-r from-forest-200 to-transparent" />
  </div>
);

/* ============================================================================
   MAIN FORM COMPONENT
   ============================================================================ */
export const SubmissionForm = () => {
  const { t } = useTranslations('submissionForm');
  const { t: tGlobal } = useTranslations();
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [hasValidationErrors, setHasValidationErrors] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SubmissionFormData>({
    resolver: zodResolver(submissionFormSchema),
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      type: 'Solo',
      startDate: '',
      endDate: '',
      description: '',
      favoriteSection: '',
      hardestSection: '',
      isFirstSudety: false,
      additionalAchievements: '',
    },
  });

  const startDate = watch('startDate') as string | undefined;
  const endDate = watch('endDate') as string | undefined;
  const description = (watch('description') as string | undefined) || '';

  const calculateDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64 = result.split(',')[1] || result;
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onInvalid = () => {
    setHasValidationErrors(true);
  };

  const onSubmit = async (data: SubmissionFormData) => {
    setHasValidationErrors(false);
    setServerMessage('');
    try {
      // Convert files to base64 attachments
      const emailData: EmailSubmissionData = {
        name: data.name,
        nickname: data.nickname,
        email: data.email,
        type: data.type,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
        favoriteSection: data.favoriteSection,
        hardestSection: data.hardestSection,
        isFirstSudety: data.isFirstSudety,
        additionalAchievements: data.additionalAchievements,
      };

      // Convert photo to base64
      if (data.photo && (data.photo as FileList).length > 0) {
        const photoFile = (data.photo as FileList)[0];
        const base64Content = await fileToBase64(photoFile);
        emailData.photo = {
          filename: photoFile.name,
          content: base64Content,
          contentType: photoFile.type,
        };
      }

      // Convert GPX file to base64
      if (data.gpxFile && (data.gpxFile as FileList).length > 0) {
        const gpxFile = (data.gpxFile as FileList)[0];
        const base64Content = await fileToBase64(gpxFile);
        emailData.gpxFile = {
          filename: gpxFile.name,
          content: base64Content,
          contentType: 'application/gpx+xml',
        };
      }

      // Convert additional photos to base64
      if (
        data.additionalPhotos &&
        (data.additionalPhotos as FileList).length > 0
      ) {
        const photosFileList = data.additionalPhotos as FileList;
        emailData.additionalPhotos = await Promise.all(
          Array.from(photosFileList).map(async (file: File) => {
            const base64Content = await fileToBase64(file);
            return {
              filename: file.name,
              content: base64Content,
              contentType: file.type,
            };
          })
        );
      }

      const result = await sendSubmissionEmail(emailData);

      if (result.success) {
        setSubmitStatus('success');
        reset();
        // Scroll to the top of the submission section
        scrollToSection(sectionIds.submission, {
          delay: 100,
          behavior: 'smooth',
        });
      } else {
        console.error('Error submitting form:', result.message);
        setSubmitStatus('error');
        setServerMessage(
          result.message || t('submit.error')
        );
      }
    } catch (error) {
      console.error('Error processing form:', error);
      setSubmitStatus('error');
      setServerMessage(t('submit.error'));
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setHasValidationErrors(false);
    setServerMessage('');
    reset();
  };

  return (
    <FadeIn
      direction="up"
      offset={30}
      duration={0.8}
      delay={0.8}
      inView={true}
      className="overflow-hidden rounded-2xl border border-forest-200 bg-cream shadow-vintage-lg"
    >
      {submitStatus === 'success' ? (
        <div className="px-6 py-12 text-center sm:px-10">
          <ScaleIn
            duration={0.5}
            initialScale={0}
            finalScale={1}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg"
          >
            <CheckCircleSolidIcon className="h-8 w-8 text-white" />
          </ScaleIn>
          <FadeIn direction="up" delay={0.3}>
            <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wide text-forest-800 sm:text-2xl">
              {t('submit.success.title')}
            </h3>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mb-6 max-w-md text-sm text-mountain-600 sm:text-base">
              {t('submit.success.message')}
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.5}>
            <button onClick={handleReset} className="theme-btn-base theme-halloffame-btn-primary px-8 py-4">
              {t('submit.success.another')}
            </button>
          </FadeIn>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="divide-y divide-forest-100"
        >
          {/* ============ DANE PODSTAWOWE ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<UserIcon className="h-4 w-4" />}
              title={t('sections.basic')}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <FormField
                label={t('fields.name')}
                required
                error={errors.name?.message}
                className="sm:col-span-2 lg:col-span-1"
              >
                <input
                  type="text"
                  {...register('name')}
                  className={inputClassName(!!errors.name)}
                  placeholder={t('placeholders.name')}
                />
              </FormField>

              <FormField label={t('fields.nickname')} error={errors.nickname?.message}>
                <input
                  type="text"
                  {...register('nickname')}
                  className={inputClassName(!!errors.nickname)}
                  placeholder={t('placeholders.nickname')}
                />
              </FormField>

              <FormField
                label={t('fields.email')}
                required
                error={errors.email?.message}
                hint={t('fields.emailHint')}
              >
                <input
                  type="email"
                  {...register('email')}
                  className={inputClassName(!!errors.email)}
                  placeholder={t('placeholders.email')}
                />
              </FormField>

              <FormField label={t('fields.type')} error={errors.type?.message}>
                <select
                  {...register('type')}
                  className={inputClassName(!!errors.type)}
                >
                  {TRAIL_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {tGlobal(`trailTypes.${type}`)}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>
          </div>

          {/* ============ TERMINY ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<CalendarIcon className="h-4 w-4" />}
              title={t('sections.dates')}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <FormField
                label={t('fields.startDate')}
                required
                error={errors.startDate?.message}
              >
                <input
                  type="date"
                  {...register('startDate')}
                  className={inputClassName(!!errors.startDate)}
                />
              </FormField>

              <FormField
                label={t('fields.endDate')}
                required
                error={errors.endDate?.message}
              >
                <input
                  type="date"
                  {...register('endDate')}
                  className={inputClassName(!!errors.endDate)}
                />
              </FormField>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-forest-700">
                  {t('fields.duration')}
                </label>
                <div className="flex h-[42px] items-center justify-center rounded-lg border border-forest-200 bg-gradient-to-r from-forest-50 to-forest-100/50">
                  <span className="font-display text-xl font-bold text-forest-700">
                    {calculateDays()}
                  </span>
                  <span className="ml-1.5 text-sm font-medium text-forest-600">
                    {t('fields.days')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============ MATERIAŁY ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<PhotoIcon className="h-4 w-4" />}
              title={t('sections.materials')}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FileUploadField
                label={t('fields.photo')}
                required
                error={
                  errors.photo?.message
                    ? String(errors.photo.message)
                    : undefined
                }
                hint={t('hints.photo')}
                accept="image/*"
                icon={<PhotoIcon className="h-5 w-5" />}
                name="photo"
                control={control}
                t={t}
              />

              <FileUploadField
                label={t('fields.gpxFile')}
                error={
                  errors.gpxFile?.message
                    ? String(errors.gpxFile.message)
                    : undefined
                }
                hint={t('fields.gpxHint')}
                accept=".gpx"
                icon={<MapIcon className="h-5 w-5" />}
                name="gpxFile"
                control={control}
                t={t}
              />

              <FileUploadField
                label={t('fields.additionalPhotos')}
                error={
                  errors.additionalPhotos?.message
                    ? String(errors.additionalPhotos.message)
                    : undefined
                }
                hint={t('hints.additionalPhotos', { max: MAX_ADDITIONAL_PHOTOS })}
                accept="image/*"
                multiple
                icon={<PhotoStackIcon className="h-5 w-5" />}
                name="additionalPhotos"
                control={control}
                t={t}
              />
            </div>
          </div>

          {/* ============ OPIS PRZEJŚCIA ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<PencilIcon className="h-4 w-4" />}
              title={t('sections.description')}
            />

            <FormField
              label={t('fields.description', { max: MAX_DESCRIPTION_LENGTH })}
              error={errors.description?.message}
            >
              <div className="relative">
                <textarea
                  {...register('description')}
                  maxLength={MAX_DESCRIPTION_LENGTH}
                  rows={2}
                  className={inputClassName(!!errors.description)}
                  placeholder={t('placeholders.description')}
                />
                <span className="absolute bottom-2 right-3 text-xs text-mountain-400">
                  {description.length}/{MAX_DESCRIPTION_LENGTH}
                </span>
              </div>
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                label={t('fields.favoriteSection')}
                error={errors.favoriteSection?.message}
              >
                <input
                  type="text"
                  {...register('favoriteSection')}
                  className={inputClassName(!!errors.favoriteSection)}
                  placeholder={t('placeholders.favoriteSection')}
                />
              </FormField>

              <FormField
                label={t('fields.hardestSection')}
                error={errors.hardestSection?.message}
              >
                <input
                  type="text"
                  {...register('hardestSection')}
                  className={inputClassName(!!errors.hardestSection)}
                  placeholder={t('placeholders.hardestSection')}
                />
              </FormField>
            </div>
          </div>

          {/* ============ DODATKOWE ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<DocumentTextIcon className="h-4 w-4" />}
              title={t('sections.additional')}
            />

            {/* First Sudety Checkbox */}
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-forest-200 bg-white/50 p-3 transition-all hover:border-forest-300 hover:bg-white/80">
              <input
                type="checkbox"
                {...register('isFirstSudety')}
                className="h-5 w-5 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
              />
              <span className="text-sm font-medium text-forest-700">
                {t('fields.isFirstSudety')}
              </span>
            </label>

            {/* Tracker Info - Compact */}
            <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50/80 to-forest-50/50 p-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-600">
                  <InfoCircleSolidIcon className="h-4 w-4 text-cream" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-forest-800">
                    {t('trackerInfo.title')}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-mountain-600">
                    {t('trackerInfo.description')}
                  </p>
                  <Link
                    href={getSectionUrl(
                      siteRoutes.live,
                      sectionIds.trackerForm
                    )}
                    className="mt-2 inline-flex items-center text-xs font-semibold text-forest-600 transition-colors hover:text-forest-800"
                  >
                    {t('trackerInfo.link')}
                    <ExternalLinkIcon className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <FormField
              label={t('fields.additionalAchievements')}
              error={errors.additionalAchievements?.message}
            >
              <textarea
                {...register('additionalAchievements')}
                rows={2}
                className={inputClassName(!!errors.additionalAchievements)}
                placeholder={t('placeholders.additionalAchievements')}
              />
            </FormField>
          </div>

          {/* ============ ERROR MESSAGE ============ */}
          {submitStatus === 'error' && serverMessage && (
            <div className="mx-4 mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:mx-6">
              {serverMessage}
            </div>
          )}

          {/* ============ SUBMIT ============ */}
          <div className="bg-forest-50/50 px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <div className="order-2 flex-1 sm:order-1">
                {hasValidationErrors && Object.keys(errors).length > 0 && (
                  <div className="mb-2 flex items-center gap-2 text-xs text-red-600">
                    <InfoCircleSolidIcon className="h-4 w-4 flex-shrink-0" />
                    <span>{t('submit.fixErrors')}</span>
                  </div>
                )}
                <p className="text-center text-xs text-mountain-500 sm:text-left">
                  {t('submit.verification')}
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`theme-btn-base theme-halloffame-btn-primary order-1 w-full px-8 py-3 text-sm sm:order-2 sm:w-auto ${
                  isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <SpinnerIcon className="-ml-1 mr-2 inline h-4 w-4 animate-spin text-white" />
                    {t('submit.sending')}
                  </>
                ) : (
                  t('submit.button')
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </FadeIn>
  );
};
