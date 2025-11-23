'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FacebookIcon } from '@/components/icons';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutProjectSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700">
      {/* Delikatny zarys gór w tle */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src="/images/vintage-mountains.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="fluid-container relative z-10">
        {/* Decorative background elements */}
        <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-cream/5 blur-2xl" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="relative mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-icon-badge-light mb-8 bg-gradient-to-br from-accent to-earth-700"
            >
              {/* Dokument/Projekt - ikona projektu */}
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </motion.div>

            <h2 className="section-title mb-6 text-cream">
              O <span className="text-gradient-light">Projekcie</span>
            </h2>

            <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Historia powstania i koncepcja - połączone */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="relative space-y-8 text-lg leading-relaxed text-cream/90">
                {/* Historia powstania */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
                    Z pasji, doświadczenia i... niedosytu.
                  </p>
                  <p>
                    Sudety zostały przeze mnie przebyte już kilkukrotnie. Nie raz
                    odkrywałem ich tajemnice wytyczonymi oficjalnie trasami. A jednak
                    żaden z istniejących szlaków nie poprowadził mnie{' '}
                    <span className="font-bold text-accent">
                      kompleksowo przez to niezwykle różnorodne pasmo
                    </span>
                    .
                  </p>
                  <p>
                    Właśnie dlatego narodziła się idea{' '}
                    <span className="font-bold text-accent text-xl">
                      SUDETY GRAND TRAIL
                    </span>
                    , czyli szlaku, który stanie się nie tylko zwieńczeniem moich
                    sudeckich wędrówek, ale i{' '}
                    <span className="font-bold text-cream">
                      nowym wyzwaniem dla wszystkich miłośników gór
                    </span>
                    .
                  </p>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent" />

                {/* Koncepcja */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
                    To nie tylko kolejna linia na mapie.
                  </p>
                  <p>
                    <span className="font-bold text-accent">
                      SUDETY GRAND TRAIL
                    </span>{' '}
                    to koncepcyjny szlak, który{' '}
                    <span className="font-bold text-cream">
                      łączy wszystkie pasma górskie Sudetów w jedną logiczną i
                      wymagającą całość
                    </span>
                    .
                  </p>
                  <p>
                    Trasa mierzy{' '}
                    <span className="font-bold text-accent text-xl">900 kilometrów</span>{' '}
                    długości i{' '}
                    <span className="font-bold text-accent text-xl">niespełna 30 000 metrów</span>{' '}
                    przewyższeń. Przebiega przez{' '}
                    <span className="font-bold text-accent text-xl">22 pasma</span>{' '}
                    górskie, prowadząc przez{' '}
                    <span className="font-bold text-accent text-xl">trzy kraje</span>{' '}
                    – Polskę, Czechy, zahaczając także o Niemcy.
                  </p>
                  <p className="pt-4 border-t border-cream/20 italic text-cream/95">
                    Początek trasy znajduje się w{' '}
                    <span className="font-bold text-cream not-italic">
                      Jarnołtówku (Góry Opawskie)
                    </span>
                    , a finał – symboliczny i majestatyczny – pod{' '}
                    <span className="font-bold text-cream not-italic">Ślężą</span>, górą o
                    duchowym znaczeniu, tuż pod Wrocławiem.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cel i Legendy - połączone */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/10 to-earth-700/20 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="relative space-y-8 text-lg leading-relaxed text-cream/90">
                {/* Cel Szlaku */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
                    Kompletne przejście Sudetów.
                  </p>
                  <p>
                    Celem szlaku jest zdobycie{' '}
                    <span className="font-bold text-cream">
                      wszystkich najwyższych szczytów każdego pasma
                    </span>
                    , a także – po polskiej stronie – wszystkich{' '}
                    <span className="font-bold text-cream">
                      16 sudeckich szczytów należących do Korony Gór Polski
                    </span>
                    .
                  </p>
                  <div className="border-l-4 border-accent py-3 pl-6 text-xl font-medium italic text-cream bg-accent/10 rounded-r">
                    W wielu przypadkach oznacza to{' '}
                    <span className="font-bold not-italic">podwójne wejścia</span> – na
                    faktyczny najwyższy punkt i na szczyt koronny, jeśli różnią
                    się od siebie. To czyni trasę jeszcze bardziej wymagającą i
                    wyjątkową.
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                {/* Legendy */}
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-cream">
                    Legendy Sudetów czekają.
                  </p>
                  <p>
                    Na trasie nie zabraknie ikonicznych szczytów – od
                    majestatycznej{' '}
                    <span className="font-bold text-cream">Śnieżki</span>,
                    najwyższego wierzchołka całego pasma, przez potężny{' '}
                    <span className="font-bold text-cream">Śnieżnik</span> i
                    dumnie górującego nad Jesionikami{' '}
                    <span className="font-bold text-cream">Pradziada</span>, po
                    charakterystyczną{' '}
                    <span className="font-bold text-cream">Wielką Sowę</span>,
                    skalny labirynt{' '}
                    <span className="font-bold text-cream">
                      Szczelińca Wielkiego
                    </span>
                    , graniczną{' '}
                    <span className="font-bold text-cream">Biskupią Kopę</span> i
                    mistyczną <span className="font-bold text-cream">Ślężę</span>
                    .
                  </p>
                  <p className="text-xl font-medium text-cream">
                    A to dopiero początek tej górskiej mozaiki.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Filozofia */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-cream/20 bg-gradient-to-br from-forest-800/80 via-forest-800/60 to-earth-800/80 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="relative space-y-6 text-lg leading-relaxed text-cream/90">
                <p className="text-2xl font-bold text-cream">
                  Dla tych, którzy chcą się zgubić, by się odnaleźć.
                </p>
                <p>
                  Ten projekt powstał z{' '}
                  <span className="font-bold text-accent">miłości do gór</span>,
                  ale też z potrzeby stworzenia czegoś własnego – ścieżki, która
                  nie tylko prowadzi przez szczyty, ale{' '}
                  <span className="font-bold text-cream">
                    łączy pasma, kraje, emocje i doświadczenia
                  </span>
                  .
                </p>
                <p>
                  <span className="font-bold text-accent text-xl">
                    SUDETY GRAND TRAIL
                  </span>{' '}
                  to propozycja dla każdego, kto pragnie odkryć Sudety w ich
                  pełni – nie tylko fizycznie, ale też{' '}
                  <span className="font-bold text-cream">duchowo</span>. Dla
                  ludzi gór – wędrowców, marzycieli, samotników, sportowców –
                  dla wszystkich, którzy kochają góry i pragną zmierzyć się z
                  takim wyzwaniem.
                </p>
                <p className="text-xl italic text-cream/90 pt-4 border-t border-cream/20">
                  To szlak stworzony z myślą o tych, którzy szukają czegoś
                  więcej niż tylko oznakowanej drogi.
                </p>
              </div>
            </motion.div>

            {/* Zakończenie */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/25 via-accent/20 to-earth-700/25 p-8 backdrop-blur-sm lg:p-12">
                <div className="relative space-y-8">
                  {/* Zakończenie */}
                  <div>
                    <p className="mb-4 text-2xl font-bold italic leading-relaxed text-cream md:text-3xl">
                      Nieprzewidywalna przygoda. Przemyślana koncepcja.
                    </p>
                    <p className="text-xl text-cream/90">
                      Zapraszam do zmierzenia się z tym wyzwaniem – na własnych
                      zasadach, we własnym tempie.
                    </p>
                  </div>

                  {/* Cytat w ramce */}
                  <div className="border-l-4 border-accent py-4 pl-6 text-xl font-medium italic text-cream bg-accent/10 rounded-r text-left">
                    W przestrzeni, w rytmie marszu, w samych sobie — Twórca Sudety Grand Trail
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6 border-t border-cream/20">
                    <p className="mb-6 text-xl font-medium text-cream/90">
                      Gotowy na nieprzewidywalną przygodę przez 24 pasma Sudetów?
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <a
                        href="https://www.facebook.com/SudetyGrandTrail"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2 px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg"
                      >
                        <FacebookIcon className="size-5" />
                        Dołącz do Społeczności
                      </a>
                      <a
                        href="https://mapy.com/s/barusofola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary border-cream/60 px-8 py-3 text-base text-cream/90 hover:bg-cream/90 hover:text-forest-800 sm:px-10 sm:py-4 sm:text-lg"
                      >
                        Sprawdź Trasę
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l-4 border-t-4 border-cream/20" />
      <div className="absolute right-8 top-8 h-16 w-16 border-r-4 border-t-4 border-cream/20" />
      <div className="absolute bottom-8 left-8 h-16 w-16 border-b-4 border-l-4 border-cream/20" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-4 border-r-4 border-cream/20" />
    </section>
  );
};

export default AboutProjectSection;
