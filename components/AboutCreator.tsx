import Image from 'next/image';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from './sections';
import { FadeIn } from '@/components/motion/FadeIn';
import { ScaleIn } from '@/components/motion/ScaleIn';
import { FacebookIcon } from '@/components/icons';
import Link from 'next/link';

export const AboutCreator = () => {
  return (
    <Section
      className="bg-cream"
      ariaLabel="O Mnie - Twórca Sudety Grand Trail"
    >
      {/* Background elements */}
      <div className="gradient-mesh-subtle absolute inset-0 opacity-30" />
      <VintageMountainsBackground className="opacity-[0.08]" />

      {/* Decorative corner glows - wrapped in overflow container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-forest-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-earth-500/5 blur-3xl" />
      </div>

      <div className="fluid-container relative z-10">
        {/* Main Content */}
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
          {/* Left - Photo & Visual */}
          <FadeIn
            direction="right"
            offset={50}
            duration={0.8}
            inView
            className="relative lg:sticky lg:top-24"
          >
            {/* Main Photo Container */}
            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/author.jpg"
                    alt="Twórca Sudety Grand Trail"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-800/20 to-transparent" />
                </div>

                {/* Photo Caption */}
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-forest-700">
                    "Zwykły chłopak z Łodzi z plecakiem i głową pełną pomysłów"
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <ScaleIn
                inView
                delay={0.4}
                className="absolute -right-4 -top-4 rounded-full border-4 border-cream bg-accent p-4 shadow-2xl backdrop-blur-xl"
              >
                <svg
                  className="h-8 w-8 text-cream"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </ScaleIn>
            </div>
          </FadeIn>

          {/* Right - Story Content */}
          <FadeIn
            direction="left"
            offset={50}
            duration={0.8}
            delay={0.2}
            inView
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <FadeIn
                direction="up"
                offset={20}
                duration={0.6}
                inView
                className="mb-6 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Moja historia</span>
              </FadeIn>

              <h2 className="section-title mb-6 text-left">
                Sudety Grand Trail
                <br />
                <span className="gradient-text-mesh">O Mnie</span>
              </h2>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-6">
              <FadeIn
                direction="up"
                offset={20}
                duration={0.6}
                delay={0.1}
                inView
              >
                <p className="text-fluid-base leading-relaxed text-forest-700">
                  Jako twórca szlaku pomyślałem, że warto powiedzieć kilka słów
                  o sobie. Może wtedy łatwiej będzie zrozumieć skąd się w ogóle
                  wziąłem i jak to się stało, że właśnie w taki sposób próbuję
                  nadawać sens codzienności. Bo choć każdy z moich projektów to
                  inna przygoda, wszystkie mają wspólny początek.
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                offset={20}
                duration={0.6}
                delay={0.2}
                inView
              >
                <p className="text-fluid-base leading-relaxed text-forest-700">
                  <strong className="text-accent">
                    Nie jestem zawodowym sportowcem
                  </strong>
                  , nie mam sztabu trenerów ani sponsorów na zawołanie. Jestem
                  zwykłym chłopakiem z Łodzi, który postanowił użyć własnych
                  nóg, by zmieniać świat na lepszy. Mam plecak, buty, głowę
                  pełną pomysłów i chyba trochę za dużo ambicji. Od kilku lat
                  wędruję po górach, czasem długo, czasem szybko, najczęściej z
                  jakimś głupim planem i jeszcze szlachetniejszym celem.
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                offset={20}
                duration={0.6}
                delay={0.3}
                inView
              >
                <p className="text-fluid-base leading-relaxed text-forest-700">
                  Ta strona to przestrzeń poświęcona projektowi mojego życia,
                  ale to tylko jeden rozdział większej historii. Bo takich
                  dzikich, długich, czasem kompletnie nielogicznych tras
                  przeszedłem już kilka w swoim życiu.
                  <strong className="text-accent">
                    {' '}
                    Każda z tych wędrówek zmieniała mnie na swój sposób
                  </strong>{' '}
                  i prowadziła krok po kroku do miejsca, w którym się obecnie
                  znajduję.
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                offset={20}
                duration={0.6}
                delay={0.4}
                inView
              >
                <p className="text-fluid-base leading-relaxed text-forest-700">
                  To właśnie one nauczyły mnie, jak ważne jest docenianie tych
                  małych, często niezauważalnych momentów, które naprawdę nadają
                  życiu sens. Dzięki nim zacząłem poznawać siebie na nowo,
                  polubiłem swoje wady i zalety, nauczyłem się żyć w zgodzie ze
                  sobą, a przede wszystkim{' '}
                  <strong className="text-accent">
                    zrozumiałem, kim naprawdę jestem i czego naprawdę potrzebuję
                  </strong>
                  .
                </p>
              </FadeIn>
            </div>

            {/* Call to Action */}
            <ScaleIn
              inView
              delay={0.5}
              duration={0.6}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-forest-800">
                  Dołącz do społeczności
                </h3>

                <p className="leading-relaxed text-forest-600">
                  Jeśli chcesz się dowiedzieć, jak to wszystko się zaczęło, co
                  mnie napędza i jak wyglądają góry oczami kogoś, kto zna wagę
                  ciszy i potrafi znaleźć dom w miejscu, gdzie inni widzą tylko
                  drzewa, to zapraszam Cię na moją prywatną grupę.
                </p>

                <Link
                  href="https://www.facebook.com/groups/opowiescizeszlaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 rounded-xl bg-accent px-8 py-4 font-bold text-cream shadow-xl transition-all duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-2xl"
                >
                  <FacebookIcon className="h-5 w-5" />
                  <span>Opowieści ze Szlaku</span>
                </Link>

                <p className="text-sm italic text-forest-500">
                  "Bo marsz to nie tylko kilometry. To też ludzie, emocje,
                  porażki i małe zwycięstwa. A ja po prostu lubię się tym
                  dzielić."
                </p>
              </div>
            </ScaleIn>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
