'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PreTrailRegistration = () => {
  return (
    <section className="section-padding overflow-hidden bg-gradient-to-br from-accent/10 to-earth/10">
      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-icon-badge mb-8 bg-gradient-to-br from-forest-600 to-earth-700"
          >
            <svg
              className="h-8 w-8 text-cream/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </motion.div>

          <h2 className="section-title mb-6">
            Zanim <span className="text-gradient">Wyruszysz</span>
          </h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-mountain-600">
            Planujesz podbój Korony Sudetów? Najpierw zgłoś swoją próbę
            przejścia i otrzymaj darmowy tracker GPS do śledzenia postępów!
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="section-title mb-8 text-left text-2xl">
              Proces Przejścia SGT
            </h3>

            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-700 text-lg font-bold text-cream shadow-vintage">
                1
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-forest-800">
                  Zgłoś Próbę Przejścia
                </h4>
                <p className="leading-relaxed text-mountain-600">
                  Przed startem wypełnij formularz zgłoszenia próby przejścia.
                  Otrzymasz darmowy tracker GPS i będziesz widoczny na mapie
                  live tracking.
                </p>
                <Link
                  href="/live#tracker-form"
                  className="hover:text-accent-dark mt-2 inline-flex items-center font-bold text-accent transition-colors"
                >
                  Zgłoś próbę przejścia
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-earth-600 to-earth-700 text-lg font-bold text-cream shadow-vintage">
                2
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-forest-800">
                  Pokonaj Szlak
                </h4>
                <p className="leading-relaxed text-mountain-600">
                  Wyrusz na trasę z trackerem GPS. Twoje postępy będą widoczne
                  na żywo dla wszystkich obserwujących. Zdobądź wszystkie 24
                  najwyższe szczyty pasm Sudetów.
                </p>
                <Link
                  href="/trail"
                  className="hover:text-accent-dark mt-2 inline-flex items-center font-bold text-accent transition-colors"
                >
                  Poznaj trasę
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-600 text-lg font-bold text-cream shadow-vintage">
                3
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-forest-800">
                  Zgłoś Ukończenie
                </h4>
                <p className="leading-relaxed text-mountain-600">
                  Po ukończeniu szlaku zgłoś swoje przejście z materiałami
                  (zdjęcia, GPX). Po weryfikacji dołączysz do oficjalnego Hall
                  of Fame!
                </p>
                <a
                  href="#zglos-przejscie"
                  className="hover:text-accent-dark mt-2 inline-flex items-center font-bold text-accent transition-colors"
                >
                  Formularz ukończenia
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="card-vintage border-forest-300 bg-gradient-to-br from-forest-700/10 to-earth-700/10 p-10"
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-600 shadow-vintage">
                <svg
                  className="h-8 w-8 text-cream"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="section-title mb-4 text-2xl">
                Korzyści z Rejestracji
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-600">
                  <svg
                    className="h-4 w-4 text-cream"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-forest-800">
                    Darmowy Tracker GPS
                  </h4>
                  <p className="text-sm text-mountain-600">
                    Profesjonalny tracker Poltrax za darmo na czas przejścia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-600">
                  <svg
                    className="h-4 w-4 text-cream"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-forest-800">
                    Live Tracking
                  </h4>
                  <p className="text-sm text-mountain-600">
                    Twoje postępy na żywo na mapie - rodzina i przyjaciele mogą
                    Cię śledzić
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-600">
                  <svg
                    className="h-4 w-4 text-cream"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-forest-800">
                    Oficjalne Uznanie
                  </h4>
                  <p className="text-sm text-mountain-600">
                    Po ukończeniu - miejsce w Hall of Fame i certyfikat
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-600">
                  <svg
                    className="h-4 w-4 text-cream"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-forest-800">
                    Społeczność
                  </h4>
                  <p className="text-sm text-mountain-600">
                    Dołącz do grona zdobywców Korony Sudetów
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-forest-200 pt-8 text-center">
              <Link
                href="/live#tracker-form"
                className="btn-primary w-full py-4 text-lg"
              >
                Zgłoś Próbę Przejścia
              </Link>
              <p className="mt-3 text-sm text-mountain-500">
                Bezpłatne zgłoszenie • Darmowy tracker • Live tracking
              </p>
            </div>
          </motion.div>
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <div className="card-vintage border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50 p-8">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-yellow-800">
                  ⚠️ Ważne: Zgłoś się przed startem!
                </h4>
                <p className="leading-relaxed text-yellow-700">
                  <strong>
                    Aby Twoje przejście zostało uznane za oficjalne
                  </strong>
                  , musisz zgłosić próbę przejścia
                  <strong> przed rozpoczęciem wędrówki</strong>. Przejścia
                  rozpoczęte bez wcześniejszego zgłoszenia mogą nie zostać
                  uwzględnione w oficjalnych statystykach Hall of Fame.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreTrailRegistration;
