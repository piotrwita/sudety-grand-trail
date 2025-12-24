'use client';

import { useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { ActionResult } from '@/actions/send-email';
import {
  trackerRequestSchema,
  type TrackerRequestData,
} from '@/schemas/tracker';
import { useTranslations } from '@/lib/i18n-utils';

type TrackerRequestFormValues = TrackerRequestData;

interface TrackerRequestFormProps {
  onSubmitAction: (data: TrackerRequestData) => Promise<ActionResult>;
}

export const TrackerRequestForm = ({
  onSubmitAction,
}: TrackerRequestFormProps) => {
  const { t } = useTranslations('trackerForm');
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const maxDate = useMemo(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString().split('T')[0];
  }, []);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrackerRequestFormValues>({
    resolver: zodResolver(trackerRequestSchema),
    defaultValues: {
      email: '',
      startDate: '',
      plannedDays: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitStatus('idle');
    setServerMessage('');

    try {
      const result = await onSubmitAction(values);

      if (result.success) {
        setSubmitStatus('success');
        setServerMessage(t('submit.success'));
        reset();
      } else {
        setSubmitStatus('error');
        setServerMessage(t('submit.error'));
      }
    } catch (error) {
      setSubmitStatus('error');
      setServerMessage(t('submit.error'));
    }
  });

  return (
    <div className="card-vintage-noanim relative mx-auto max-w-md overflow-hidden p-6 lg:mx-0">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50/40 via-cream to-forest-50/30 opacity-50" />

      <div className="relative z-10">
        <div className="mb-6 text-center">
          <h4 className="text-xl font-bold text-slate-900">{t('title')}</h4>
          <p className="mt-2 text-sm text-slate-600">
            {t('subtitle')}{' '}
            <span className="theme-live-text-gradient font-bold uppercase">
              Sudety Grand Trail
            </span>
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              {t('fields.email')} <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              maxLength={100}
              {...register('email')}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder={t('placeholders.email')}
              autoComplete="email"
            />
            {errors.email?.message && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="startDate"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              {t('fields.startDate')} <span className="text-accent">*</span>
            </label>
            <input
              type="date"
              id="startDate"
              min={today}
              max={maxDate}
              {...register('startDate')}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            {errors.startDate?.message && (
              <p className="mt-1 text-xs text-red-600">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="plannedDays"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              {t('fields.plannedDays')} <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="plannedDays"
              maxLength={50}
              {...register('plannedDays')}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder={t('placeholders.plannedDays')}
              autoComplete="off"
            />
            {errors.plannedDays?.message && (
              <p className="mt-1 text-xs text-red-600">
                {errors.plannedDays.message}
              </p>
            )}
          </div>

          {submitStatus === 'error' && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {serverMessage}
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {serverMessage}
            </div>
          )}

          <p className="mt-4 text-center text-xs text-slate-400">
            {t('submit.requiredFields')}
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="theme-btn-base theme-live-btn-primary mx-auto mt-8 flex items-center justify-center space-x-2 px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>{t('submit.sending')}</span>
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{t('submit.button')}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
