'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Section } from './sections';
import { SectionHeader } from './sections/SectionHeader';
import { FadeIn } from './motion';
import { TrophyIcon } from './icons';
import { sectionIds } from '@/config/section-ids';
import { getSectionHash } from '@/lib/section-navigation';

// Mock data - przykładowe przejścia
const mockCompletions = [
  {
    id: 1,
    rank: 1,
    name: 'Piotr Witaszewski',
    nickname: '',
    startDate: '2025-06-07',
    endDate: '2025-06-21',
    days: 15,
    type: 'Solo',
    description:
      'Przejście całych Sudetów było intensywną i piękną przygodą. Każdy dzień oferował nowe wyzwania i krajobrazy, które trudno porównać z czymkolwiek innym.',
    photo: 'https://scontent.flcj1-1.fna.fbcdn.net/v/t45.1600-4/516180726_122134477196817418_4024637466607253337_n.jpg?stp=c0.256.1536.1536a_cp0_dst-jpg_q75_s565x565_spS444_tt6&_nc_cat=106&ccb=1-7&_nc_sid=c02adf&_nc_ohc=EcbKTER9DYoQ7kNvwHw3sDQ&_nc_oc=Adk2_qMsBmTLSDIfVz_lypnxq3DEf4dmoNFLbh-pTSr91ApbW0yv-6p4l28gyKS0-sc&_nc_zt=1&_nc_ht=scontent.flcj1-1.fna&_nc_gid=TSDykpnF5g0zyzt6GHvBXw&oh=00_AfkuEgenDTGuRGDJqWVgfLCeF2stmdrlagSMJFIhRp3Xxw&oe=694355FE',
    isFirstCompleter: true,
    achievements: ['Pierwszy zdobywca', 'Najszybsze przejście'],
    favoriteSection: 'Karkonosze - Śnieżka',
    hardestSection: 'Góry Sowie w deszczu',
    hasStoryPage: true, // tylko ten kafelek ma link do /about
  }
];

export const HallOfFameList = () => {
  const router = useRouter();
  const [selectedCompletion, setSelectedCompletion] = useState<number | null>(
    null
  );
  const [sortBy, setSortBy] = useState<'date' | 'time' | 'name'>('date');

  const sortedCompletions = [...mockCompletions].sort((a, b) => {
    switch (sortBy) {
      case 'time':
        return a.days - b.days;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'date':
      default:
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Section
      id={sectionIds.hallOfFame}
      ariaLabel="Zdobywcy Korony Sudetów"
      className="bg-cream"
    >
      <div className="fluid-container">
        <SectionHeader
          title="Zdobywcy Korony Sudetów"
          icon={<TrophyIcon className="size-6 text-cream/80" />}
          variant="crown"
        />
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.6}
          inView={true}
          className="mb-16 text-center"
        >
          <p className="text-fluid-lg mx-auto mb-8 max-w-4xl font-medium leading-relaxed text-mountain-600">
            Wędrowcy, którzy ukończyli pełny szlak <span className="theme-halloffame-text-gradient font-bold">
              SUDETY GRAND TRAIL
            </span>.<br />Każde
            przejście to unikalna historia determinacji i pasji do gór.
          </p>

          {/* Sort Controls */}
          <div className="flex justify-center">
            <div className="flex rounded-xl bg-gold-100 p-1">
              <button
                onClick={() => setSortBy('date')}
                className={`rounded-lg px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  sortBy === 'date'
                    ? 'bg-gold-500 text-forest-900 shadow-vintage'
                    : 'text-gold-700 hover:bg-gold-200'
                }`}
              >
                Data
              </button>
              <button
                onClick={() => setSortBy('time')}
                className={`rounded-lg px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  sortBy === 'time'
                    ? 'bg-gold-500 text-forest-900 shadow-vintage'
                    : 'text-gold-700 hover:bg-gold-200'
                }`}
              >
                Czas
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`rounded-lg px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  sortBy === 'name'
                    ? 'bg-gold-500 text-forest-900 shadow-vintage'
                    : 'text-gold-700 hover:bg-gold-200'
                }`}
              >
                Nazwa
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Completions Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {sortedCompletions.map((completion, index) => (
            <motion.div
              key={completion.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: 0.84 + index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={(e) => {
                // Sprawdź czy kliknięto w przycisk "Przeczytaj moją relację"
                const target = e.target as HTMLElement;
                if (target.closest('[data-story-link]')) {
                  return; // Nie zwijaj kafelka jeśli kliknięto w link do relacji
                }
                setSelectedCompletion(
                  selectedCompletion === completion.id ? null : completion.id
                );
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gold-200/60 bg-gradient-to-br from-cream via-white to-gold-50/50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gold-300/80"
            >
              {/* Rank Badge - nowoczesny styl */}
              <div
                className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl font-display text-base font-black shadow-lg ${
                  completion.rank === 1
                    ? 'bg-gradient-to-br from-gold-400 via-yellow-500 to-gold-600 text-forest-900 ring-2 ring-gold-300/50'
                    : completion.rank === 2
                      ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white ring-2 ring-gray-200/50'
                      : completion.rank === 3
                        ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white ring-2 ring-amber-400/50'
                        : 'bg-gradient-to-br from-gold-400 to-gold-600 text-forest-900 ring-2 ring-gold-300/50'
                }`}
              >
                {completion.rank}
              </div>

              <div className="flex items-start space-x-6">
                {/* Photo */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full shadow-vintage">
                  <Image
                    src={completion.photo}
                    alt={completion.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Main Info */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <h3 className="section-title text-left text-xl">
                      {completion.name}
                    </h3>
                    {completion.nickname && (
                      <span className="text-sm font-medium text-mountain-500">
                        "{completion.nickname}"
                      </span>
                    )}
                  </div>
                  {/* Przycisk relacji - pod imieniem */}
                  {completion.hasStoryPage && (
                    <div className="mb-3">
                      <button
                        data-story-link
                        onClick={() => {
                          router.push('/about#trail-journey');
                        }}
                        className="relative z-30 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-md ring-2 ring-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-accent/50"
                      >
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Przeczytaj moją relację
                      </button>
                    </div>
                  )}

                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-mountain-500">Start:</span>
                      <div className="font-bold text-forest-800">
                        {formatDate(completion.startDate)}
                      </div>
                    </div>
                    <div>
                      <span className="text-mountain-500">Koniec:</span>
                      <div className="font-bold text-forest-800">
                        {formatDate(completion.endDate)}
                      </div>
                    </div>
                    <div>
                      <span className="text-mountain-500">Czas:</span>
                      <div className="font-bold text-accent">
                        {completion.days} dni
                      </div>
                    </div>
                    <div>
                      <span className="text-mountain-500">Typ:</span>
                      <div className="font-bold text-forest-800">
                        {completion.type}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {completion.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm"
                      >
                        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-mountain-600">
                    "{completion.description}"
                  </p>

                  {/* Expanded Details */}
                  {selectedCompletion === completion.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 border-t border-forest-200 pt-4"
                    >
                      <div className="grid gap-4 text-sm md:grid-cols-2">
                        <div>
                          <span className="font-medium text-mountain-500">
                            Ulubiony odcinek:
                          </span>
                          <div className="font-bold text-forest-800">
                            {completion.favoriteSection}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-mountain-500">
                            Najtrudniejszy moment:
                          </span>
                          <div className="font-bold text-forest-800">
                            {completion.hardestSection}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </div>
              </div>

              {/* Subtle golden glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/5 to-gold-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          delay={1.2}
          inView={true}
          className="mt-16 text-center"
        >
          <div className="card-vintage border-gold-300 bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-10">
            <h3 className="section-title mb-6 text-2xl">
              Dołącz do Elitarnego Grona!
            </h3>
            <p className="mx-auto mb-8 max-w-3xl text-lg font-medium text-mountain-600">
              Ukończyłeś Sudety Grand Trail? <br />
              Zgłoś swoje przejście i zostań
              oficjalnym zdobywcą Korony Sudetów!
            </p>
            <a
              href={getSectionHash(sectionIds.submission)}
              className="theme-btn-base theme-halloffame-btn-primary px-10 py-4 text-lg"
            >
              Zgłoś Przejście
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
