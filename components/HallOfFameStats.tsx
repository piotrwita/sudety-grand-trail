'use client';

import { motion } from 'framer-motion';

const HallOfFameStats = () => {
  // Mock data - później będzie z API/bazy danych
  const stats = {
    totalCompletions: 1,
    fastestTime: '14 d 20 h',
    firstCompleter: 'Piotr Witaszewski',
    thisYear: 1,
  };

  const statCards = [
    {
      id: 'completions',
      value: stats.totalCompletions,
      title: 'Oficjalne Przejścia',
      description: 'Zdobywcy Sudety Grand Trail',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: 'from-forest-500 via-forest-600 to-forest-700',
      bgGradient: 'from-forest-50 via-cream to-forest-50',
      textColor: 'text-forest-600',
      valueColor: 'text-forest-600',
      borderColor: 'border-forest-600/40',
    },
    {
      id: 'fastest',
      value: stats.fastestTime,
      title: 'Najszybsze Przejście',
      description: 'Dni na trasie',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-accent-400 via-accent-500 to-accent-600',
      bgGradient: 'from-accent/10 via-orange-50 to-accent/5',
      textColor: 'text-accent-600',
      valueColor: 'text-accent-600',
      borderColor: 'border-accent-500/40',
    },
    {
      id: 'thisYear',
      value: stats.thisYear,
      title: 'W Tym Roku',
      description: 'Przejścia w 2025 roku',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-earth-500 via-earth-600 to-earth-700',
      bgGradient: 'from-earth-50 via-amber-50 to-earth-50',
      textColor: 'text-earth-600',
      valueColor: 'text-earth-600',
      borderColor: 'border-earth-600/40',
    },
    {
      id: 'first',
      value: stats.firstCompleter,
      title: 'Pierwszy Zdobywca',
      description: 'Czerwiec 2025',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18M5 3l14 7-14 7" />
        </svg>
      ),
      gradient: 'from-yellow-300 via-yellow-400 to-yellow-500',
      bgGradient: 'from-yellow-50 via-cream to-yellow-50',
      textColor: 'text-yellow-600',
      valueColor: 'text-yellow-600',
      borderColor: 'border-yellow-400/40',
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 + index * 0.1, ease: 'easeOut' },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden bg-forest-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-forest-50 to-cream" />
      <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />
      
      <div className="fluid-container relative z-10">
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
            className="section-icon-badge mb-8 bg-gradient-to-br from-accent to-earth-700"
          >
            <svg
              className="h-8 w-8 text-cream/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>

          <h2 className="section-title mb-6">
            Statystyki <span className="text-gradient">Szlaku</span>
          </h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="text-fluid-xl mx-auto max-w-4xl font-medium leading-relaxed text-mountain-600">
            Odkąd szlak został oficjalnie wyznaczony, wędrowcy podejmują 
            wyzwanie{' '}
            <span className="font-bold bg-gradient-to-r from-forest-700 via-earth-700 to-accent bg-clip-text text-transparent">SUDETY GRAND TRAIL</span>.
            <br />
            Poniżej ogólne statystyki wszystkich zdobywców.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: '-50px' }}
              className={`group relative overflow-hidden rounded-2xl border-4 ${card.borderColor} bg-gradient-to-br ${card.bgGradient} p-5 text-center shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern id={`pattern-${card.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1.5" fill="currentColor" className={card.textColor} />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${card.id})`} />
                </svg>
              </div>

              {/* Decorative Corner Elements */}
              <div className={`absolute left-0 top-0 h-16 w-16 bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl`} />
              <div className={`absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-tl ${card.gradient} opacity-10 blur-2xl`} />

              {/* Icon or Badge - Right Top Corner */}
              {card.id === 'first' ? (
                <div className={`absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110 font-display font-black text-lg drop-shadow-lg`}>
                  #1
                </div>
              ) : (
                <div className={`absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    {card.icon}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="pt-2">
                {/* Value */}
                {card.id === 'fastest' && typeof card.value === 'string' ? (
                  <div className={`mb-2 font-display font-black uppercase ${card.valueColor}`} style={{ minHeight: 'clamp(2.2rem, 5.5vw, 4.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="flex items-baseline justify-center gap-1 leading-none">
                      {card.value.split(' ').map((part, idx) => {
                        const isNumber = /^\d+$/.test(part);
                        return (
                          <span key={idx} className={isNumber ? 'text-4xl md:text-5xl' : 'text-xl md:text-2xl'}>
                            {part}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ) : card.id === 'first' ? (
                  <div className={`mb-2 font-display font-bold ${card.valueColor}`} style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', lineHeight: '1.3', minHeight: 'clamp(2.2rem, 5.5vw, 4.5rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    {typeof card.value === 'string' ? (
                      card.value.split(' ').map((part, idx) => (
                        <span key={idx}>{part}</span>
                      ))
                    ) : (
                      card.value
                    )}
                  </div>
                ) : (
                  <div className={`mb-2 font-display font-black uppercase ${card.valueColor}`} style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                    {card.value}
                  </div>
                )}

                {/* Title */}
                <h3 className={`mb-1 text-base font-bold uppercase tracking-wide ${card.textColor} transition-colors duration-300`}>
                  {card.title}
                </h3>

                {/* Description */}
                {card.id !== 'first' && (
                  <p className={`text-xs font-medium ${card.textColor}/80 leading-relaxed`}>
                    {card.description}
                  </p>
                )}

                {/* Subtitle for first card */}
                {card.id === 'first' && (
                  <p className="mt-1 text-xs font-medium text-mountain-500">
                    {card.description}
                  </p>
                )}
              </div>

              {/* Bottom Gradient Accent */}
              <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
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
            {/* 22 pasma */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-forest-700/40 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <span className="mb-1 relative z-10 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">🏔️</span>
              <span className="relative z-10 text-xs font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">22 pasma</span>
            </div>

            {/* 16 KGP */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-yellow-500/40 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 to-transparent opacity-60" />
              <span className="mb-1 relative z-10 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">👑</span>
              <span className="relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">16 KGP</span>
            </div>

            {/* 900 km */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-earth-700/40 bg-gradient-to-br from-earth-600 via-earth-700 to-earth-800 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <span className="mb-1 relative z-10 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">🥾</span>
              <span className="relative z-10 text-xs font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">900 km</span>
            </div>

            {/* 30k m up */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-accent/40 bg-gradient-to-br from-accent via-accent/90 to-accent/80 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <span className="mb-1 relative z-10 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">⬆️</span>
              <span className="relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">30k m</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HallOfFameStats;
