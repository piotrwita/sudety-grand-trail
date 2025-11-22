import {
  BadgeIcon,
  LightningIcon,
  CalendarIcon,
  StarIcon,
} from '@/components/icons';
import { FadeIn, ScaleIn } from '@/components/motion';
import { VintageMountainsBackground } from './VintageMountainsBackground';
import { Section } from './sections';

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
    icon: <BadgeIcon className="h-6 w-6" />,
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
    icon: <LightningIcon className="h-6 w-6" />,
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
    icon: <CalendarIcon className="h-6 w-6" />,
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
    icon: null,
    gradient: 'from-yellow-300 via-yellow-400 to-yellow-500',
    bgGradient: 'from-yellow-50 via-cream to-yellow-50',
    textColor: 'text-yellow-600',
    valueColor: 'text-yellow-600',
    borderColor: 'border-yellow-400/40',
  },
];

export const HallOfFameStats = () => {
  // Hover animation variants for stat cards
  const hoverVariants = {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <Section ariaLabel="Statystyki Szlaku">
      <VintageMountainsBackground className="opacity-10" />

      <div className="fluid-container relative z-10">
        <FadeIn
          direction="up"
          offset={50}
          duration={0.8}
          inView={true}
          className="mb-16 text-center"
        >
          <ScaleIn
            initialScale={0.5}
            duration={0.6}
            delay={0.2}
            inView={true}
            className="section-icon-badge mb-8 bg-gradient-to-br from-accent to-earth-700"
          >
            <StarIcon className="size-8 text-cream/80" />
          </ScaleIn>

          <h2 className="section-title mb-6">
            Statystyki <span className="text-gradient">Szlaku</span>
          </h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="text-fluid-lg mx-auto max-w-4xl font-medium leading-relaxed text-mountain-600">
            Odkąd szlak został oficjalnie wyznaczony, wędrowcy podejmują
            wyzwanie{' '}
            <span className="bg-gradient-to-r from-forest-700 via-earth-700 to-accent bg-clip-text font-bold text-transparent">
              SUDETY GRAND TRAIL
            </span>
            <br />
            Poniżej ogólne statystyki wszystkich zdobywców.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {statCards.map((card, index) => (
            <FadeIn
              key={card.id}
              direction="up"
              offset={30}
              duration={0.6}
              delay={0.1 + index * 0.1}
              inView={true}
              inViewMargin="-50px"
              whileHover={hoverVariants}
              className={`group relative overflow-hidden rounded-2xl border-4 ${card.borderColor} bg-gradient-to-br ${card.bgGradient} p-5 text-center shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]`}
            >
              {/* Decorative Corner Elements */}
              <div
                className={`absolute left-0 top-0 h-16 w-16 bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl`}
              />
              <div
                className={`absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-tl ${card.gradient} opacity-10 blur-2xl`}
              />

              {/* Icon or Badge - Right Top Corner */}
              {card.id === 'first' ? (
                <div
                  className={`absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} font-display text-lg font-black text-white shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)] drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  #1
                </div>
              ) : (
                <div
                  className={`absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}
                >
                  <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    {card.icon}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="pt-2">
                {/* Value */}
                {card.id === 'fastest' && typeof card.value === 'string' ? (
                  <div
                    className={`mb-2 font-display font-black uppercase ${card.valueColor}`}
                    style={{
                      minHeight: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="flex items-baseline justify-center gap-1 leading-none">
                      {card.value.split(' ').map((part, idx) => {
                        const isNumber = /^\d+$/.test(part);
                        return (
                          <span
                            key={idx}
                            className={
                              isNumber
                                ? 'text-4xl md:text-5xl'
                                : 'text-xl md:text-2xl'
                            }
                          >
                            {part}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ) : card.id === 'first' ? (
                  <div
                    className={`mb-2 font-display font-bold ${card.valueColor}`}
                    style={{
                      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                      lineHeight: '1.3',
                      minHeight: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {typeof card.value === 'string'
                      ? card.value
                          .split(' ')
                          .map((part, idx) => <span key={idx}>{part}</span>)
                      : card.value}
                  </div>
                ) : (
                  <div
                    className={`mb-2 font-display font-black uppercase ${card.valueColor}`}
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  >
                    {card.value}
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`mb-1 text-base font-bold uppercase tracking-wide ${card.textColor} transition-colors duration-300`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                {card.id !== 'first' && (
                  <p
                    className={`text-xs font-medium leading-relaxed ${card.textColor}/80`}
                  >
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
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${card.gradient} origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100`}
              />
            </FadeIn>
          ))}
        </div>

        {/* Achievement Badges */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          delay={0.7}
          inView={true}
          className="mt-16 text-center"
        >
          <h3 className="section-title mb-8 text-2xl">Osiągnięcia Zdobywców</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* 22 pasma */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-forest-700/40 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <span className="relative z-10 mb-1 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                🏔️
              </span>
              <span className="relative z-10 text-xs font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                22 pasma
              </span>
            </div>

            {/* 16 KGP */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-yellow-500/40 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 to-transparent opacity-60" />
              <span className="relative z-10 mb-1 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                👑
              </span>
              <span className="relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                16 KGP
              </span>
            </div>

            {/* 900 km */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-earth-700/40 bg-gradient-to-br from-earth-600 via-earth-700 to-earth-800 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <span className="relative z-10 mb-1 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                🥾
              </span>
              <span className="relative z-10 text-xs font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                900 km
              </span>
            </div>

            {/* 30k m up */}
            <div className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-accent/40 bg-gradient-to-br from-accent via-accent/90 to-accent/80 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <span className="relative z-10 mb-1 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                ⬆️
              </span>
              <span className="relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                30k m
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
