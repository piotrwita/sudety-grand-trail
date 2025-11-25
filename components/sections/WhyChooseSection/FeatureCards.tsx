import { FadeIn } from '@/components/motion';
import { CheckIcon, LightningIcon } from '@/components/icons';

const features = [
  {
    title: 'Kompletne przejście Sudetów',
    description: (
      <>
        Pierwszy szlak, który naprawdę łączy Sudety w jedną spójną opowieść.
        Wyruszasz z Jarnołtówka w Górach Opawskich, by po setkach kilometrów
        stanąć na szczycie mistycznej Ślęży i zakończyć wędrówkę w Sobótce. Po
        drodze zdobywasz wszystko – od najwyższej Śnieżki po najniższy Lázek. To
        pełna, nieprzerwana podróż przez całe Sudety, przez ich zmienność,
        wysokości i dzikość. Jedna droga. Jedno wyzwanie. Jedna kompletna
        całość.
      </>
    ),
    icon: <CheckIcon className="size-12" />,
    color: 'from-forest-600 to-forest-700',
    bgColor: 'bg-forest-50',
    textColor: 'text-forest-700',
  },
  {
    title: 'Trzy kraje, jedno pasmo',
    description:
      'Wędrujesz przez Polskę, Czechy i Niemcy – trzy kultury, trzy spojrzenia, jeden górski świat. Szlak przekracza granice nie tylko na mapie, ale przede wszystkim w umyśle. Łączy krajobrazy, języki i rytmy życia, tworząc z nich jedną wspólną przestrzeń. To Sudety w pełnym wymiarze. Bez granic.',
    icon: (
      <svg
        className="size-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Kula ziemska - ujednolicony styl */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: 'from-earth-600 to-earth-700',
    bgColor: 'bg-earth-50',
    textColor: 'text-earth-700',
  },
  {
    title: 'Wyprawa, która zmienia',
    description:
      '900 kilometrów i prawie 30 000 metrów przewyższeń. To nie tylko droga przez góry, ale spotkanie z samym sobą. Każdy kilometr uczy wytrwałości, zachwytu i pokory wobec natury. To coś więcej niż trasa do przejścia. To doświadczenie, które zostaje w człowieku na całe życie.',
    icon: <LightningIcon className="size-12" />,
    color: 'from-accent to-accent/90',
    bgColor: 'bg-mountain-100',
    textColor: 'text-accent',
  },
];

export const FeatureCards = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
      {features.map((feature, index) => (
        <FadeIn
          key={feature.title}
          direction="up"
          offset={30}
          delay={0.3 + 0.3 * index}
          duration={0.6}
          inView={true}
          className="group"
        >
          <div
            className={`${feature.bgColor} relative h-full overflow-hidden rounded-2xl border border-white/50 p-8 shadow-lg transition-all duration-300 focus-within:outline-none focus-within:ring-4 focus-within:ring-forest-700/30 focus-within:ring-offset-2 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="absolute right-0 top-0 size-32 opacity-20">
              <BackgroundPattern index={index} textColor={feature.textColor} />
            </div>

            <div
              className={`inline-flex size-20 items-center justify-center bg-gradient-to-br ${feature.color} mb-6 rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
            >
              {feature.icon}
            </div>

            <h3
              className={`mb-4 text-2xl font-bold ${feature.textColor} min-h-[3.5rem] transition-colors duration-300 group-hover:opacity-90`}
            >
              {feature.title}
            </h3>

            <div className="text-justify font-medium leading-relaxed text-forest-700/90">
              {feature.description}
            </div>

            {/* Decorative Element */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color} origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100`}
            />
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

const BackgroundPattern = ({
  index,
  textColor,
}: {
  index: number;
  textColor: string;
}) => (
  <svg viewBox="0 0 100 100" className="size-full">
    <defs>
      <pattern
        id={`pattern-${index}`}
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="10" cy="10" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect
      width="100"
      height="100"
      fill={`url(#pattern-${index})`}
      className={textColor}
    />
  </svg>
);
