'use client'

import { motion } from 'framer-motion'

const HallOfFameStats = () => {
  // Mock data - później będzie z API/bazy danych
  const stats = {
    totalCompletions: 12,
    fastestTime: 45,
    firstCompleter: "Jan Kowalski",
    thisYear: 5,
    averageTime: 67,
    countries: 3
  }

  return (
    <section className="section-padding bg-forest-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-earth-700 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
          >
            <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </motion.div>

          <h2 className="section-title text-4xl md:text-5xl mb-6">
            Statystyki <span className="text-gradient">Przejść</span>
          </h2>
          
          <div className="vintage-divider" />
          
          <p className="text-xl text-mountain-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Odkąd szlak został oficjalnie wyznaczony, odważni wędrowcy podejmują wyzwanie 
            zdobycia pełnej Korony Sudetów. Oto ich osiągnięcia.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Total Completions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-vintage p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">🏆</div>
            <div className="stats-number text-5xl mb-4 text-accent">{stats.totalCompletions}</div>
            <h3 className="font-bold text-forest-800 uppercase tracking-wide mb-2">Oficjalne Przejścia</h3>
            <p className="text-mountain-600 text-sm">Zdobywcy pełnej Korony Sudetów</p>
          </motion.div>

          {/* Fastest Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-vintage p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">⚡</div>
            <div className="stats-number text-5xl mb-4 text-forest-700">{stats.fastestTime}</div>
            <h3 className="font-bold text-forest-800 uppercase tracking-wide mb-2">Najszybsze Przejście</h3>
            <p className="text-mountain-600 text-sm">Dni na trasie (rekord)</p>
          </motion.div>

          {/* This Year */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-vintage p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">📅</div>
            <div className="stats-number text-5xl mb-4 text-earth-700">{stats.thisYear}</div>
            <h3 className="font-bold text-forest-800 uppercase tracking-wide mb-2">W Tym Roku</h3>
            <p className="text-mountain-600 text-sm">Przejścia w 2024 roku</p>
          </motion.div>

          {/* First Completer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-vintage p-8 text-center relative overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">👑</div>
            <div className="text-3xl mb-4 font-bold text-yellow-600">#{1}</div>
            <h3 className="font-bold text-forest-800 uppercase tracking-wide mb-2">Pierwszy Zdobywca</h3>
            <p className="text-mountain-600 text-sm font-medium">{stats.firstCompleter}</p>
            <p className="text-mountain-500 text-xs mt-1">Maj 2024</p>
          </motion.div>

          {/* Average Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-vintage p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">📊</div>
            <div className="stats-number text-5xl mb-4 text-mountain-700">{stats.averageTime}</div>
            <h3 className="font-bold text-forest-800 uppercase tracking-wide mb-2">Średni Czas</h3>
            <p className="text-mountain-600 text-sm">Dni na ukończenie szlaku</p>
          </motion.div>

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-vintage p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">🌍</div>
            <div className="stats-number text-5xl mb-4 text-forest-700">{stats.countries}</div>
            <h3 className="font-bold text-forest-800 uppercase tracking-wide mb-2">Kraje</h3>
            <p className="text-mountain-600 text-sm">Polska, Czechy, Niemcy</p>
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
          <h3 className="section-title text-2xl mb-8">Osiągnięcia Zdobywców</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="badge-circle w-20 h-20 flex-col">
              <span className="text-2xl mb-1">🏔️</span>
              <span className="text-xs font-bold">24 Pasma</span>
            </div>
            <div className="badge-circle w-20 h-20 flex-col">
              <span className="text-2xl mb-1">👑</span>
              <span className="text-xs font-bold">16 KGP</span>
            </div>
            <div className="badge-circle w-20 h-20 flex-col">
              <span className="text-2xl mb-1">🚶</span>
              <span className="text-xs font-bold">900 km</span>
            </div>
            <div className="badge-circle w-20 h-20 flex-col">
              <span className="text-2xl mb-1">⛰️</span>
              <span className="text-xs font-bold">30k m</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HallOfFameStats
