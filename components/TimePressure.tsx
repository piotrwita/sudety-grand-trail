'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const TimePressure = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Przykładowa data deadline - można dostosować
  const deadline = new Date('2024-12-31T23:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding border-t border-accent/20 bg-gradient-to-r from-accent/5 via-orange-500/5 to-red-500/5">
      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <svg
                className="h-4 w-4 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Presja Czasowa
            </div>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Wyścig z{' '}
              <span className="bg-gradient-to-r from-accent to-red-500 bg-clip-text text-transparent">
                Czasem
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Każda minuta się liczy. Śledź na żywo, jak czas wpływa na przebieg
              wyprawy przez Korony Sudetów.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mx-auto mb-12 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-600">
                Dni
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-600">
                Godzin
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-600">
                Minut
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-2 animate-pulse text-3xl font-bold text-accent md:text-4xl">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-600">
                Sekund
              </div>
            </motion.div>
          </div>

          {/* Progress Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"
          >
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-800">Ukończone</h3>
              </div>
              <div className="mb-1 text-2xl font-bold text-green-700">8/22</div>
              <div className="text-sm text-green-600">Pasma Sudetów</div>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-orange-800">Tempo</h3>
              </div>
              <div className="mb-1 text-2xl font-bold text-orange-700">
                42 km
              </div>
              <div className="text-sm text-orange-600">Dziennie</div>
            </div>

            <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6">
              <div className="mb-4 flex items-center justify-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-800">Pozostało</h3>
              </div>
              <div className="mb-1 text-2xl font-bold text-red-700">564 km</div>
              <div className="text-sm text-red-600">Do mety</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <p className="mb-6 text-slate-600">
              Każda sekunda ma znaczenie. Śledź wyprawę na żywo i kibicuj w
              najtrudniejszych momentach!
            </p>
            <button className="mx-auto flex items-center justify-center space-x-2 rounded-xl bg-accent px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-xl">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>Śledź na Żywo</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
