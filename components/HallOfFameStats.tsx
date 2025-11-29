import {
  BadgeIcon,
  LightningIcon,
  CalendarIcon,
  StarIcon,
} from '@/components/icons';
import { FadeIn, ScaleIn } from '@/components/motion';
import { VintageMountainsBackground } from './VintageMountainsBackground';
import { Section } from './sections';
import { SectionHeader } from './sections/SectionHeader';

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
  return (
    <Section ariaLabel="Statystyki Szlaku">
      <VintageMountainsBackground className="opacity-10" />

      <div className="fluid-container relative z-10">
        <SectionHeader
          title="Statystyki Szlaku"
          icon={<StarIcon className="size-6 text-cream/80" />}
        />
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.6}
          inView={true}
          className="mb-16 text-center"
        >
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
              delay={0.8 + index * 0.1}
              inView={true}
              className="group"
            >
              <div className="card-vintage relative h-full p-6 text-center">
                {/* Subtle gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.bgGradient} opacity-30`}
                />

                {/* Icon or Badge - Top Right Corner */}
                {card.id === 'first' ? (
                  <div
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${card.gradient} font-display text-sm font-black text-white shadow-vintage transition-transform duration-300 group-hover:scale-110`}
                  >
                    #1
                  </div>
                ) : (
                  <div
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${card.gradient} text-white shadow-vintage transition-transform duration-300 group-hover:scale-110`}
                  >
                    {card.icon}
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 pt-2">
                  {/* Value */}
                  {card.id === 'fastest' && typeof card.value === 'string' ? (
                    <div
                      className={`mb-3 font-display font-black uppercase ${card.valueColor}`}
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
                      className={`mb-3 font-display font-bold ${card.valueColor}`}
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
                      className={`mb-3 font-display font-black uppercase ${card.valueColor}`}
                      style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                    >
                      {card.value}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className={`mb-2 text-base font-bold uppercase tracking-wide ${card.textColor} transition-colors duration-300`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  {card.id !== 'first' && (
                    <p
                      className={`text-sm font-medium leading-relaxed ${card.textColor}/80`}
                    >
                      {card.description}
                    </p>
                  )}

                  {/* Subtitle for first card */}
                  {card.id === 'first' && (
                    <p className="mt-1 text-sm font-medium text-mountain-600">
                      {card.description}
                    </p>
                  )}
                </div>

                {/* Bottom Gradient Accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${card.gradient} origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100`}
                />
              </div>
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
          <div className="flex flex-wrap justify-center gap-8">
            {/* 22 pasma */}
            <div className="group relative flex h-28 w-28 flex-col items-center justify-center transition-all duration-300 hover:scale-110">
              {/* Badge base with metallic effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 shadow-[0_12px_24px_rgba(47,79,62,0.4),inset_0_4px_8px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.4)]" />

              {/* Metallic shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
              <div className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/40 to-transparent blur-sm" />

              {/* Border with depth */}
              <div className="absolute inset-0 rounded-full border-4 border-forest-800/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />

              {/* Content */}
              <span className="relative z-10 mb-1 text-3xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
                🏔️
              </span>
              <span className="relative z-10 text-xs font-bold uppercase tracking-wide text-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                22 pasma
              </span>
            </div>

            {/* 16 KGP */}
            <div className="group relative flex h-28 w-28 flex-col items-center justify-center transition-all duration-300 hover:scale-110">
              {/* Badge base with golden metallic effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_12px_24px_rgba(250,204,21,0.5),inset_0_4px_8px_rgba(255,255,255,0.25),inset_0_-4px_8px_rgba(0,0,0,0.4)]" />

              {/* Golden metallic shine */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-70" />
              <div className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent blur-sm" />

              {/* Border with depth */}
              <div className="absolute inset-0 rounded-full border-4 border-yellow-700/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />

              {/* Content */}
              <span className="relative z-10 mb-1 text-3xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
                👑
              </span>
              <span className="relative z-10 text-xs font-bold uppercase tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                16 KGP
              </span>
            </div>

            {/* 900 km */}
            <div className="group relative flex h-28 w-28 flex-col items-center justify-center transition-all duration-300 hover:scale-110">
              {/* Badge base with bronze metallic effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-earth-600 via-earth-700 to-earth-800 shadow-[0_12px_24px_rgba(107,68,35,0.4),inset_0_4px_8px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.4)]" />

              {/* Bronze metallic shine */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
              <div className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/40 to-transparent blur-sm" />

              {/* Border with depth */}
              <div className="absolute inset-0 rounded-full border-4 border-earth-800/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />

              {/* Content */}
              <span className="relative z-10 mb-1 text-3xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
                🥾
              </span>
              <span className="relative z-10 text-xs font-bold uppercase tracking-wide text-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                900 km
              </span>
            </div>

            {/* 30k m up */}
            <div className="group relative flex h-28 w-28 flex-col items-center justify-center transition-all duration-300 hover:scale-110">
              {/* Badge base with copper metallic effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent/90 to-accent/80 shadow-[0_12px_24px_rgba(201,78,43,0.5),inset_0_4px_8px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.4)]" />

              {/* Copper metallic shine */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/35 via-transparent to-transparent opacity-65" />
              <div className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/45 to-transparent blur-sm" />

              {/* Border with depth */}
              <div className="absolute inset-0 rounded-full border-4 border-accent-700/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />

              {/* Content */}
              <span className="relative z-10 mb-1 text-3xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
                ⬆️
              </span>
              <span className="relative z-10 text-xs font-bold uppercase tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                30k m
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
