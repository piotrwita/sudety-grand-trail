'use client';

import { motion } from 'framer-motion';

const HallOfFameStats = () => {
  // Mock data - później będzie z API/bazy danych
  const stats = {
    totalCompletions: 12,
    fastestTime: 45,
    firstCompleter: 'Jan Kowalski',
    thisYear: 5,
    averageTime: 67,
    countries: 3,
  };

  return (
    <section className="section-padding bg-forest-50">
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
            className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-accent to-earth-700 shadow-vintage-xl"
          >
            <svg
              className="h-8 w-8 text-cream"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>

          <h2 className="section-title mb-6 text-4xl md:text-5xl">
            Statystyki <span className="text-gradient">Przejść</span>
          </h2>

          <div className="vintage-divider" />

          <p className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-mountain-600">
            Odkąd szlak został oficjalnie wyznaczony, odważni wędrowcy podejmują
            wyzwanie zdobycia pełnej Korony Sudetów. Oto ich osiągnięcia.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Total Completions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-vintage relative overflow-hidden p-8 text-center"
          >
            <div className="absolute right-4 top-4 text-4xl opacity-10">🏆</div>
            <div className="stats-number mb-4 text-5xl text-accent">
              {stats.totalCompletions}
            </div>
            <h3 className="mb-2 font-bold uppercase tracking-wide text-forest-800">
              Oficjalne Przejścia
            </h3>
            <p className="text-sm text-mountain-600">
              Zdobywcy pełnej Korony Sudetów
            </p>
          </motion.div>

          {/* Fastest Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-vintage relative overflow-hidden p-8 text-center"
          >
            <div className="absolute right-4 top-4 text-4xl opacity-10">⚡</div>
            <div className="stats-number mb-4 text-5xl text-forest-700">
              {stats.fastestTime}
            </div>
            <h3 className="mb-2 font-bold uppercase tracking-wide text-forest-800">
              Najszybsze Przejście
            </h3>
            <p className="text-sm text-mountain-600">Dni na trasie (rekord)</p>
          </motion.div>

          {/* This Year */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-vintage relative overflow-hidden p-8 text-center"
          >
            <div className="absolute right-4 top-4 text-4xl opacity-10">📅</div>
            <div className="stats-number mb-4 text-5xl text-earth-700">
              {stats.thisYear}
            </div>
            <h3 className="mb-2 font-bold uppercase tracking-wide text-forest-800">
              W Tym Roku
            </h3>
            <p className="text-sm text-mountain-600">Przejścia w 2024 roku</p>
          </motion.div>

          {/* First Completer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-vintage relative overflow-hidden p-8 text-center md:col-span-2 lg:col-span-1"
          >
            <div className="absolute right-4 top-4 text-4xl opacity-10">👑</div>
            <div className="mb-4 text-3xl font-bold text-yellow-600">#{1}</div>
            <h3 className="mb-2 font-bold uppercase tracking-wide text-forest-800">
              Pierwszy Zdobywca
            </h3>
            <p className="text-sm font-medium text-mountain-600">
              {stats.firstCompleter}
            </p>
            <p className="mt-1 text-xs text-mountain-500">Maj 2024</p>
          </motion.div>

          {/* Average Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-vintage relative overflow-hidden p-8 text-center"
          >
            <div className="absolute right-4 top-4 text-4xl opacity-10">📊</div>
            <div className="stats-number mb-4 text-5xl text-mountain-700">
              {stats.averageTime}
            </div>
            <h3 className="mb-2 font-bold uppercase tracking-wide text-forest-800">
              Średni Czas
            </h3>
            <p className="text-sm text-mountain-600">
              Dni na ukończenie szlaku
            </p>
          </motion.div>

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-vintage relative overflow-hidden p-8 text-center"
          >
            <div className="absolute right-4 top-4 text-4xl opacity-10">🌍</div>
            <div className="stats-number mb-4 text-5xl text-forest-700">
              {stats.countries}
            </div>
            <h3 className="mb-2 font-bold uppercase tracking-wide text-forest-800">
              Kraje
            </h3>
            <p className="text-sm text-mountain-600">Polska, Czechy, Niemcy</p>
          </motion.div>
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="section-title mb-8 text-2xl">Osiągnięcia Zdobywców</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="badge-circle h-20 w-20 flex-col">
              <span className="mb-1 text-2xl">🏔️</span>
              <span className="text-xs font-bold">24 Pasma</span>
            </div>
            <div className="badge-circle h-20 w-20 flex-col">
              <span className="mb-1 text-2xl">👑</span>
              <span className="text-xs font-bold">16 KGP</span>
            </div>
            <div className="badge-circle h-20 w-20 flex-col">
              <span className="mb-1 text-2xl">🚶</span>
              <span className="text-xs font-bold">900 km</span>
            </div>
            <div className="badge-circle h-20 w-20 flex-col">
              <span className="mb-1 text-2xl">⛰️</span>
              <span className="text-xs font-bold">30k m</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HallOfFameStats;
