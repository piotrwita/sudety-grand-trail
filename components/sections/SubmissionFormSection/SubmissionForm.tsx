'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm, Controller, Control } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isServer } from '@/lib/utils';
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

/* ============================================================================
   CONSTANTS
   ============================================================================ */
const MAX_DESCRIPTION_LENGTH = 200;
const MAX_ADDITIONAL_PHOTOS = 5;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
const TRAIL_TYPES = ['Solo', 'Grupa', 'Z psem', 'Ultralight', 'Inne'] as const;

/* ============================================================================
   ZOD SCHEMA
   ============================================================================ */
const submissionSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Imię i nazwisko jest wymagane')
      .min(3, 'Imię i nazwisko musi mieć minimum 3 znaki'),
    nickname: z.string().optional(),
    email: z
      .string()
      .min(1, 'Email jest wymagany')
      .email('Wprowadź poprawny adres email'),
    type: z.enum(TRAIL_TYPES, {
      message: 'Wybierz typ przejścia',
    }),
    startDate: z.string().min(1, 'Data rozpoczęcia jest wymagana'),
    endDate: z.string().min(1, 'Data zakończenia jest wymagana'),
    photo: z
      .any()
      .refine((val) => {
        if (isServer()) return true;
        return val instanceof FileList && val.length > 0;
      }, 'Zdjęcie profilowe jest wymagane')
      .refine((files) => {
        if (isServer()) return true;
        return (
          !files ||
          files.length === 0 ||
          ACCEPTED_IMAGE_TYPES.includes(files[0]?.type)
        );
      }, 'Akceptowane formaty: JPG, PNG, WebP'),
    gpxFile: z
      .any()
      //   .refine((val) => {
      //     if (isServer()) return true;
      //     return val instanceof FileList && val.length > 0;
      //   }, 'Plik GPX jest wymagany')
      .refine((files) => {
        if (isServer()) return true;
        return (
          !files ||
          files.length === 0 ||
          files[0]?.name.toLowerCase().endsWith('.gpx')
        );
      }, 'Plik musi mieć rozszerzenie .gpx'),
    additionalPhotos: z
      .any()
      .optional()
      .refine((files) => {
        if (isServer()) return true;
        return !files || files.length <= MAX_ADDITIONAL_PHOTOS;
      }, `Maksymalnie ${MAX_ADDITIONAL_PHOTOS} zdjęć`),
    description: z
      .string()
      .max(
        MAX_DESCRIPTION_LENGTH,
        `Maksymalnie ${MAX_DESCRIPTION_LENGTH} znaków`
      )
      .optional(),
    favoriteSection: z.string().optional(),
    hardestSection: z.string().optional(),
    isFirstSudety: z.boolean(),
    additionalAchievements: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      return new Date(data.endDate) >= new Date(data.startDate);
    },
    {
      message:
        'Data zakończenia musi być późniejsza lub równa dacie rozpoczęcia',
      path: ['endDate'],
    }
  );

type SubmissionFormData = z.infer<typeof submissionSchema>;

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
  multiple?: boolean
): string => {
  if (!files || files.length === 0) {
    return 'Kliknij lub przeciągnij plik';
  }

  if (files.length === 1) {
    return files[0].name;
  }

  return `${files.length} ${files.length < 5 ? 'pliki wybrane' : 'plików wybranych'}`;
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
                  {getFileDisplayText(files, multiple)}
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
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SubmissionFormData>({
    resolver: zodResolver(submissionSchema),
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

  const startDate = watch('startDate');
  const endDate = watch('endDate');
  const description = watch('description') || '';

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

  const onSubmit = async (data: SubmissionFormData) => {
    try {
      console.log('Form data:', data);
      console.log('Photo:', data.photo);
      console.log('GPX File:', data.gpxFile);
      console.log('Additional Photos:', data.additionalPhotos);

      // Create FormData for file upload
      const formData = new FormData();

      // Add text fields
      formData.append('name', data.name);
      formData.append('nickname', data.nickname || '');
      formData.append('email', data.email);
      formData.append('type', data.type);
      formData.append('startDate', data.startDate);
      formData.append('endDate', data.endDate);
      formData.append('description', data.description || '');
      formData.append('favoriteSection', data.favoriteSection || '');
      formData.append('hardestSection', data.hardestSection || '');
      formData.append('isFirstSudety', String(data.isFirstSudety));
      formData.append(
        'additionalAchievements',
        data.additionalAchievements || ''
      );

      // Add files
      if (data.photo && data.photo.length > 0) {
        formData.append('photo', data.photo[0]);
      }
      if (data.gpxFile && data.gpxFile.length > 0) {
        formData.append('gpxFile', data.gpxFile[0]);
      }
      if (data.additionalPhotos && data.additionalPhotos.length > 0) {
        Array.from(data.additionalPhotos as FileList).forEach((file) => {
          formData.append('additionalPhotos', file);
        });
      }

      // Log FormData entries for debugging
      console.log('FormData entries:');
      Array.from(formData.entries()).forEach(([key, value]) => {
        console.log(`  ${key}:`, value);
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
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
              Zgłoszenie Wysłane!
            </h3>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mb-6 max-w-md text-sm text-mountain-600 sm:text-base">
              Dziękujemy za zgłoszenie! Twoje przejście zostanie zweryfikowane i
              wkrótce pojawi się w Hall of Fame.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.5}>
            <button onClick={handleReset} className="btn-primary">
              Zgłoś Kolejne Przejście
            </button>
          </FadeIn>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="divide-y divide-forest-100"
        >
          {/* ============ DANE PODSTAWOWE ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<UserIcon className="h-4 w-4" />}
              title="Dane podstawowe"
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <FormField
                label="Imię i Nazwisko"
                required
                error={errors.name?.message}
                className="sm:col-span-2 lg:col-span-1"
              >
                <input
                  type="text"
                  {...register('name')}
                  className={inputClassName(!!errors.name)}
                  placeholder="Jan Kowalski"
                />
              </FormField>

              <FormField label="Pseudonim" error={errors.nickname?.message}>
                <input
                  type="text"
                  {...register('nickname')}
                  className={inputClassName(!!errors.nickname)}
                  placeholder="Górski"
                />
              </FormField>

              <FormField
                label="Email"
                required
                error={errors.email?.message}
                hint="Nie będzie publikowany"
              >
                <input
                  type="email"
                  {...register('email')}
                  className={inputClassName(!!errors.email)}
                  placeholder="jan@example.com"
                />
              </FormField>

              <FormField label="Typ przejścia" error={errors.type?.message}>
                <select
                  {...register('type')}
                  className={inputClassName(!!errors.type)}
                >
                  {TRAIL_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
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
              title="Terminy przejścia"
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <FormField
                label="Data rozpoczęcia"
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
                label="Data zakończenia"
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
                  Czas przejścia
                </label>
                <div className="flex h-[42px] items-center justify-center rounded-lg border border-forest-200 bg-gradient-to-r from-forest-50 to-forest-100/50">
                  <span className="font-display text-xl font-bold text-forest-700">
                    {calculateDays()}
                  </span>
                  <span className="ml-1.5 text-sm font-medium text-forest-600">
                    dni
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============ MATERIAŁY ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<PhotoIcon className="h-4 w-4" />}
              title="Materiały"
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FileUploadField
                label="Zdjęcie profilowe"
                required
                error={
                  errors.photo?.message
                    ? String(errors.photo.message)
                    : undefined
                }
                hint="JPG, PNG, WebP"
                accept="image/*"
                icon={<PhotoIcon className="h-5 w-5" />}
                name="photo"
                control={control}
              />

              <FileUploadField
                label="Plik GPX"
                error={
                  errors.gpxFile?.message
                    ? String(errors.gpxFile.message)
                    : undefined
                }
                hint="Ślad GPS z przejścia"
                accept=".gpx"
                icon={<MapIcon className="h-5 w-5" />}
                name="gpxFile"
                control={control}
              />

              <FileUploadField
                label="Dodatkowe zdjęcia"
                error={
                  errors.additionalPhotos?.message
                    ? String(errors.additionalPhotos.message)
                    : undefined
                }
                hint={`Max. ${MAX_ADDITIONAL_PHOTOS} zdjęć`}
                accept="image/*"
                multiple
                icon={<PhotoStackIcon className="h-5 w-5" />}
                name="additionalPhotos"
                control={control}
              />
            </div>
          </div>

          {/* ============ OPIS PRZEJŚCIA ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<PencilIcon className="h-4 w-4" />}
              title="Opis przejścia"
            />

            <FormField
              label={`Krótki opis (max ${MAX_DESCRIPTION_LENGTH} znaków)`}
              error={errors.description?.message}
            >
              <div className="relative">
                <textarea
                  {...register('description')}
                  maxLength={MAX_DESCRIPTION_LENGTH}
                  rows={2}
                  className={inputClassName(!!errors.description)}
                  placeholder="Najpiękniejsza przygoda mojego życia..."
                />
                <span className="absolute bottom-2 right-3 text-xs text-mountain-400">
                  {description.length}/{MAX_DESCRIPTION_LENGTH}
                </span>
              </div>
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                label="Najpiękniejszy moment"
                error={errors.favoriteSection?.message}
              >
                <input
                  type="text"
                  {...register('favoriteSection')}
                  className={inputClassName(!!errors.favoriteSection)}
                  placeholder="Wschód słońca na Śnieżce"
                />
              </FormField>

              <FormField
                label="Najtrudniejszy fragment"
                error={errors.hardestSection?.message}
              >
                <input
                  type="text"
                  {...register('hardestSection')}
                  className={inputClassName(!!errors.hardestSection)}
                  placeholder="Góry Sowie w deszczu"
                />
              </FormField>
            </div>
          </div>

          {/* ============ DODATKOWE ============ */}
          <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
            <SectionDivider
              icon={<DocumentTextIcon className="h-4 w-4" />}
              title="Dodatkowe informacje"
            />

            {/* First Sudety Checkbox */}
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-forest-200 bg-white/50 p-3 transition-all hover:border-forest-300 hover:bg-white/80">
              <input
                type="checkbox"
                {...register('isFirstSudety')}
                className="h-5 w-5 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
              />
              <span className="text-sm font-medium text-forest-700">
                To moje pierwsze przejście Sudetów
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
                    📍 Zgłosiłeś próbę przejścia przed startem?
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-mountain-600">
                    Aby przejście zostało uznane za oficjalne, powinieneś
                    wcześniej zgłosić próbę i otrzymać tracker GPS.
                  </p>
                  <Link
                    href="/live#tracker-form"
                    className="mt-2 inline-flex items-center text-xs font-semibold text-forest-600 transition-colors hover:text-forest-800"
                  >
                    Zgłoś próbę na przyszłość
                    <ExternalLinkIcon className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <FormField
              label="Dodatkowe osiągnięcia"
              error={errors.additionalAchievements?.message}
            >
              <textarea
                {...register('additionalAchievements')}
                rows={2}
                className={inputClassName(!!errors.additionalAchievements)}
                placeholder="Np. ukończenie KGP, inne szlaki długodystansowe..."
              />
            </FormField>
          </div>

          {/* ============ SUBMIT ============ */}
          <div className="bg-forest-50/50 px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="order-2 text-center text-xs text-mountain-500 sm:order-1 sm:text-left">
                Zgłoszenie zostanie zweryfikowane przed publikacją
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary order-1 w-full px-8 py-3 text-sm sm:order-2 sm:w-auto ${
                  isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <SpinnerIcon className="-ml-1 mr-2 inline h-4 w-4 animate-spin text-white" />
                    Wysyłanie...
                  </>
                ) : (
                  'Wyślij Zgłoszenie'
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </FadeIn>
  );
};
