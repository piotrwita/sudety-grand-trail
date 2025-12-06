'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/motion';
import { Section } from './Section';
import { sectionIds } from '@/config/section-ids';
import { CheckIcon, LocationIcon } from '@/components/icons';
import { sendTrackerRequestEmail } from '@/actions/send-email';

export const ModernTrackerSection = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [plannedDays, setPlannedDays] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await sendTrackerRequestEmail({
        email,
        startDate,
        plannedDays,
      });

      if (result.success) {
        setSubmitStatus('success');
        setEmail('');
        setStartDate('');
        setPlannedDays('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Wystąpił błąd. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id={sectionIds.trackerForm}
      ariaLabel="Zgłoś Próbę Przejścia - Tracker GPS"
      className="section-padding relative bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="fluid-container">
        {/* Header */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          inView={true}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            Bezpłatny Tracker
          </div>

          <h2 className="section-title mb-6 text-slate-900">
            Twoja{' '}
            <span className="theme-live-text-gradient">Własna Historia</span>
          </h2>

          <p className="text-fluid-lg mx-auto max-w-3xl leading-relaxed text-slate-600">
            A jeśli kiedyś sami będziecie chcieli spróbować przejść ten szlak,
            to mam dla Was dobrą wiadomość.
          </p>
        </FadeIn>

        {/* Main Content */}
        <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
          {/* Left - Text Content */}
          <FadeIn
            direction="right"
            offset={30}
            duration={0.8}
            delay={0.2}
            inView={true}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">POLTRAX</h3>
                  <p className="text-slate-500">Partner technologiczny</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-slate-700">
                <strong className="text-accent">
                  Poltrax udostępni Wam specjalny tracker zupełnie bezpłatnie
                </strong>
                , abyście i Wy mogli zapisać swoją własną historię na tej
                trasie.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="size-4 text-green-600" />
                </div>
                <span className="text-slate-700">
                  Kompletnie darmowy - bez ukrytych kosztów
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="size-4 text-green-600" />
                </div>
                <span className="text-slate-700">
                  Profesjonalne narzędzie do trackingu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="size-4 text-green-600" />
                </div>
                <span className="text-slate-700">
                  Zapisz i udostępnij swoją przygodę
                </span>
              </div>
            </div>

          </FadeIn>

          {/* Right - Form in Box */}
          <FadeIn
            direction="left"
            offset={30}
            duration={0.8}
            delay={0.4}
            inView={true}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 to-orange-500/10 p-6 max-w-md mx-auto lg:mx-0">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Form Content */}
              <div className="relative z-10">
                <div className="mb-6 text-center">
                  <h4 className="text-xl font-bold text-slate-900">
                    Zostań Legendą
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Dołącz do grona zdobywców Korony Sudetów
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="twoj@email.pl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="startDate"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Planowana data startu <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="plannedDays"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Planowana długość wyprawy <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="plannedDays"
                      value={plannedDays}
                      onChange={(e) => setPlannedDays(e.target.value)}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="np. 30 dni, 2 tygodnie"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                      Zgłoszenie zostało wysłane pomyślnie! Skontaktujemy się z
                      Tobą wkrótce.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="theme-btn-base theme-live-btn-primary flex mx-auto mt-8 items-center justify-center space-x-2 px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                        <span>Wysyłanie...</span>
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
                        <span>Zgłoś się</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

