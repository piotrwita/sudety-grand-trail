'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Section } from './sections';
import { SectionHeader } from './sections/SectionHeader';
import { FadeIn } from './motion';
import { sectionIds } from '@/config/section-ids';
import { getSectionHash } from '@/lib/section-navigation';

// Mock data - przykładowe przejścia
const mockCompletions = [
  {
    id: 1,
    rank: 1,
    name: 'Jan Kowalski',
    nickname: 'Górski',
    startDate: '2024-05-15',
    endDate: '2024-06-30',
    days: 45,
    type: 'Solo',
    description:
      'Najpiękniejsza przygoda mojego życia. Każdy dzień przynosił nowe wyzwania i niesamowite widoki.',
    photo: '/images/creator-photo.svg', // placeholder
    isFirstCompleter: true,
    achievements: ['Pierwszy zdobywca', 'Najszybsze przejście', 'KGP Complete'],
    favoriteSection: 'Karkonosze - Śnieżka',
    hardestSection: 'Góry Sowie w deszczu',
  },
  {
    id: 2,
    rank: 2,
    name: 'Anna Nowak',
    nickname: 'Wędrowniczka',
    startDate: '2024-06-01',
    endDate: '2024-08-15',
    days: 75,
    type: 'Solo',
    description:
      'Szlak zmienił moje życie. Odkryłam w sobie siłę, o której nie wiedziałam.',
    photo: '/images/creator-photo.svg',
    isFirstCompleter: false,
    achievements: ['Pierwsza kobieta', 'KGP Complete'],
    favoriteSection: 'Masyw Śnieżnika',
    hardestSection: 'Góry Stołowe - mgła',
  },
  {
    id: 3,
    rank: 3,
    name: 'Piotr Górnik',
    nickname: 'Sudecki',
    startDate: '2024-07-10',
    endDate: '2024-09-20',
    days: 72,
    type: 'Z psem',
    description:
      'Razem z moim psem Reksem pokonaliśmy wszystkie 24 pasma. Niezapomniane chwile!',
    photo: '/images/creator-photo.svg',
    isFirstCompleter: false,
    achievements: ['Pierwszy z psem', 'KGP Complete'],
    favoriteSection: 'Góry Izerskie',
    hardestSection: 'Pradziad w burzy',
  },
  {
    id: 4,
    rank: 4,
    name: 'Michał Szczyciński',
    nickname: 'Ultralight',
    startDate: '2024-08-01',
    endDate: '2024-10-10',
    days: 70,
    type: 'Ultralight',
    description:
      'Minimalizm w górach - tylko 8kg plecak i maksimum doświadczeń.',
    photo: '/images/creator-photo.svg',
    isFirstCompleter: false,
    achievements: ['Najlżejszy ekwipunek', 'KGP Complete'],
    favoriteSection: 'Góry Złote',
    hardestSection: 'Hanušovická vrchovina',
  },
];

export const HallOfFameList = () => {
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
          icon={<span className="text-2xl">🏆</span>}
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
            Ci odważni wędrowcy ukończyli pełny szlak Sudety Grand Trail. Każde
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
              onClick={() =>
                setSelectedCompletion(
                  selectedCompletion === completion.id ? null : completion.id
                )
              }
              className="card-vintage group relative cursor-pointer overflow-hidden p-8"
            >
              {/* Rank Badge */}
              <div
                className={`absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-black shadow-vintage ${
                  completion.rank === 1
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                    : completion.rank === 2
                      ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white'
                      : completion.rank === 3
                        ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white'
                        : 'bg-gradient-to-br from-gold-400 to-gold-600 text-forest-900'
                }`}
              >
                #{completion.rank}
              </div>

              {/* Special Badges */}
              {completion.isFirstCompleter && (
                <div className="absolute right-20 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-bold text-cream shadow-vintage">
                  1st
                </div>
              )}

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
                    <span className="text-sm font-medium text-mountain-500">
                      "{completion.nickname}"
                    </span>
                  </div>

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
                        className="badge-circle px-3 py-1 text-xs font-bold text-cream"
                      >
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

                      <div className="mt-4 border-t border-forest-100 pt-4">
                        <div className="flex space-x-4 text-xs">
                          <button className="btn-outline px-4 py-2 text-xs">
                            📸 Zdjęcia
                          </button>
                          <button className="btn-outline px-4 py-2 text-xs">
                            📍 Trasa GPX
                          </button>
                          <button className="btn-outline px-4 py-2 text-xs">
                            🏆 Certyfikat
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-700/5 to-earth-700/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
              Ukończyłeś Sudety Grand Trail? Zgłoś swoje przejście i zostań
              oficjalnym zdobywcą Korony Sudetów!
            </p>
            <a
              href={getSectionHash(sectionIds.submission)}
              className="theme-btn-base theme-halloffame-btn-primary px-10 py-4 text-lg"
            >
              Zgłoś Swoje Przejście
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
