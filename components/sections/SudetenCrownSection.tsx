'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Dane wszystkich 22 pasm uporządkowane od najwyższego do najniższego
const sudetenRanges = [
  {
    id: 1,
    rank: 1,
    name: 'Karkonosze',
    nameCs: 'Krkonoše',
    nameDe: 'Riesengebirge',
    peak: 'Śnieżka',
    peakCs: 'Sněžka',
    elevation: 1603,
    country: 'PL/CZ',
  },
  {
    id: 2,
    rank: 2,
    name: 'Wysoki Jesionik',
    nameCs: 'Hrubý Jeseník',
    nameDe: 'Altvatergebirge',
    peak: 'Pradziad',
    peakCs: 'Praděd',
    elevation: 1491,
    country: 'CZ',
  },
  {
    id: 3,
    rank: 3,
    name: 'Masyw Śnieżnika',
    nameCs: 'Králický Snìžník',
    nameDe: 'Glatzer Schneegebirge',
    peak: 'Śnieżnik',
    peakCs: 'Králický Sněžník',
    elevation: 1426,
    country: 'PL/CZ',
  },
  {
    id: 4,
    rank: 4,
    name: 'Góry Złote',
    nameCs: 'Rychlebské hory',
    nameDe: 'Reichensteiner Gebirge',
    peak: 'Smrek',
    peakCs: 'Smrek',
    elevation: 1127,
    country: 'PL/CZ',
  },
  {
    id: 5,
    rank: 5,
    name: 'Góry Izerskie',
    nameCs: 'Jizerské hory',
    nameDe: 'Isergebirge',
    peak: 'Wysoka Kopa',
    peakCs: 'Wysoka Kopa',
    elevation: 1126,
    country: 'PL/CZ',
  },
  {
    id: 6,
    rank: 6,
    name: 'Góry Orlickie',
    nameCs: 'Orlické hory',
    nameDe: 'Adlergebirge',
    peak: 'Velká Deštná',
    peakCs: 'Velká Deštná',
    elevation: 1115,
    country: 'CZ',
  },
  {
    id: 7,
    rank: 7,
    name: 'Góry Sowie',
    nameCs: 'Soví hory',
    nameDe: 'Eulengebirge',
    peak: 'Wielka Sowa',
    peakCs: 'Wielka Sowa',
    elevation: 1015,
    country: 'PL',
  },
  {
    id: 8,
    rank: 8,
    name: 'Grzbiet Jesztedzko-Kozakowski',
    nameCs: 'Ještědsko-kozákovský hřbet',
    nameDe: 'Jeschken-Kosakow-Kamm',
    peak: 'Jeszted',
    peakCs: 'Ještěd',
    elevation: 1012,
    country: 'CZ',
  },
  {
    id: 9,
    rank: 9,
    name: 'Hanušovická vrchovina',
    nameCs: 'Hanušovická vrchovina',
    nameDe: 'Hannsdorfer Bergland',
    peak: 'Jeřáb',
    peakCs: 'Jeřáb',
    elevation: 1003,
    country: 'CZ',
  },
  {
    id: 10,
    rank: 10,
    name: 'Góry Bystrzyckie',
    nameCs: 'Bystřické hory',
    nameDe: 'Habelschwerdter Gebirge',
    peak: 'Jagodna Północna',
    peakCs: 'Jagodna Północna',
    elevation: 985,
    country: 'PL',
  },
  {
    id: 11,
    rank: 11,
    name: 'Góry Opawskie',
    nameCs: 'Zlatohorská vrchovina',
    nameDe: 'Zuckmanteler Bergland',
    peak: 'Góra Poprzeczna',
    peakCs: 'Příčný vrch',
    elevation: 975,
    country: 'PL/CZ',
  },
  {
    id: 12,
    rank: 12,
    name: 'Rudawy Janowickie',
    nameCs: 'Janovické rudohoří',
    nameDe: 'Landeshuter Kamm',
    peak: 'Skalnik',
    peakCs: 'Skalnik',
    elevation: 945,
    country: 'PL/CZ',
  },
  {
    id: 13,
    rank: 13,
    name: 'Góry Kamienne',
    nameCs: 'Vraní hory / Javoří hory',
    nameDe: 'Steingebirge',
    peak: 'Waligóra',
    peakCs: 'Waligóra',
    elevation: 936,
    country: 'PL',
  },
  {
    id: 14,
    rank: 14,
    name: 'Góry Stołowe',
    nameCs: 'Stolové hory',
    nameDe: 'Heuscheuergebirge',
    peak: 'Szczeliniec Wielki',
    peakCs: 'Szczeliniec Wielki',
    elevation: 919,
    country: 'PL/CZ',
  },
  {
    id: 15,
    rank: 15,
    name: 'Góry Wałbrzyskie',
    nameCs: 'Valbřišské hory',
    nameDe: 'Waldenburgergebirge',
    peak: 'Borowa',
    peakCs: 'Borowa',
    elevation: 853,
    country: 'PL',
  },
  {
    id: 16,
    rank: 16,
    name: 'Niski Jesionik',
    nameCs: 'Nízký Jeseník',
    nameDe: 'Niederes Gesenke',
    peak: 'Slunečná',
    peakCs: 'Slunečná',
    elevation: 800,
    country: 'CZ',
  },
  {
    id: 17,
    rank: 17,
    name: 'Góry Łużyckie',
    nameCs: 'Lužické hory',
    nameDe: 'Lausitzer Gebirge',
    peak: 'Luž',
    peakCs: 'Lausche',
    elevation: 793,
    country: 'CZ/DE',
  },
  {
    id: 18,
    rank: 18,
    name: 'Góry Bardzkie',
    nameCs: 'Bardské hory',
    nameDe: 'Warthagebirge',
    peak: 'Szeroka Góra',
    peakCs: 'Szeroka Góra',
    elevation: 765,
    country: 'PL',
  },
  {
    id: 19,
    rank: 19,
    name: 'Góry Jastrzębie',
    nameCs: 'Žacléřská vrchovina',
    nameDe: 'Habichtgebirge',
    peak: 'Žaltman',
    peakCs: 'Žaltman',
    elevation: 739,
    country: 'CZ',
  },
  {
    id: 20,
    rank: 20,
    name: 'Góry Kaczawskie',
    nameCs: 'Kačavské hory',
    nameDe: 'Bober-Katzbach-Gebirge',
    peak: 'Skopiec',
    peakCs: 'Skopiec',
    elevation: 724,
    country: 'PL',
  },
  {
    id: 21,
    rank: 21,
    name: 'Masyw Ślęży',
    nameCs: 'Masyw Ślęży',
    nameDe: 'Zobtengebirge',
    peak: 'Ślęża',
    peakCs: 'Ślęża',
    elevation: 718,
    country: 'PL',
  },
  {
    id: 22,
    rank: 22,
    name: 'Zábřežská vrchovina',
    nameCs: 'Zábřežská vrchovina',
    nameDe: 'Hohenstädter Bergland',
    peak: 'Lázek',
    peakCs: 'Lázek',
    elevation: 714,
    country: 'CZ',
  },
];

// Korona Gór Polski - Sudety (16 szczytów)
const koronaGorPolski = [
  {
    id: 1,
    name: 'Śnieżka',
    code: 'KGP 03',
    elevation: 1603,
    range: 'Karkonosze',
  },
  {
    id: 2,
    name: 'Śnieżnik',
    code: 'KGP 04',
    elevation: 1425,
    range: 'Masyw Śnieżnika',
  },
  {
    id: 3,
    name: 'Wysoka Kopa',
    code: 'KGP 10',
    elevation: 1126,
    range: 'Góry Izerskie',
  },
  {
    id: 4,
    name: 'Rudawiec',
    code: 'KGP 11',
    elevation: 1115,
    range: 'Góry Bialskie',
  },
  {
    id: 5,
    name: 'Orlica',
    code: 'KGP 12',
    elevation: 1084,
    range: 'Góry Orlickie',
  },
  {
    id: 6,
    name: 'Wielka Sowa',
    code: 'KGP 14',
    elevation: 1015,
    range: 'Góry Sowie',
  },
  {
    id: 7,
    name: 'Kowadło',
    code: 'KGP 16',
    elevation: 989,
    range: 'Góry Złote',
  },
  {
    id: 8,
    name: 'Jagodna',
    code: 'KGP 17',
    elevation: 977,
    range: 'Góry Bystrzyckie',
  },
  {
    id: 9,
    name: 'Skalnik',
    code: 'KGP 18',
    elevation: 945,
    range: 'Rudawy Janowickie',
  },
  {
    id: 10,
    name: 'Waligóra',
    code: 'KGP 19',
    elevation: 936,
    range: 'Góry Kamienne',
  },
  {
    id: 11,
    name: 'Szczeliniec Wielki',
    code: 'KGP 21',
    elevation: 919,
    range: 'Góry Stołowe',
  },
  {
    id: 12,
    name: 'Biskupia Kopa',
    code: 'KGP 23',
    elevation: 890,
    range: 'Opawskie',
  },
  {
    id: 13,
    name: 'Chełmiec',
    code: 'KGP 24',
    elevation: 851,
    range: 'Góry Wałbrzyskie',
  },
  {
    id: 14,
    name: 'Kłodzka Góra',
    code: 'KGP 25',
    elevation: 765,
    range: 'Góry Bardzkie',
  },
  {
    id: 15,
    name: 'Skopiec',
    code: 'KGP 26',
    elevation: 724,
    range: 'Góry Kaczawskie',
  },
  {
    id: 16,
    name: 'Ślęża',
    code: 'KGP 27',
    elevation: 718,
    range: 'Masyw Ślęży',
  },
];

const SudetenCrownSection = () => {
  const [selectedRange, setSelectedRange] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'planner'>('grid');
  const [selectedPeaks, setSelectedPeaks] = useState<number[]>([]);

  const togglePeak = (rangeId: number) => {
    setSelectedPeaks((prev) =>
      prev.includes(rangeId)
        ? prev.filter((id) => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const calculateTripStats = () => {
    const selected = sudetenRanges.filter((range) =>
      selectedPeaks.includes(range.id)
    );
    const totalElevation = selected.reduce(
      (sum, range) => sum + range.elevation,
      0
    );
    const estimatedKm = selected.length * 40; // Rough estimate: 40km per peak
    const estimatedDays = Math.ceil(selected.length / 3); // Rough estimate: 3 peaks per day
    const maxElevation =
      selected.length > 0 ? Math.max(...selected.map((r) => r.elevation)) : 0;
    const minElevation =
      selected.length > 0 ? Math.min(...selected.map((r) => r.elevation)) : 0;

    // Calculate KGP peaks included
    const kgpPeaksIncluded = koronaGorPolski.filter((kgpPeak) =>
      selected.some(
        (selectedRange) =>
          selectedRange.peak === kgpPeak.name ||
          selectedRange.peak.includes(kgpPeak.name) ||
          kgpPeak.name.includes(selectedRange.peak)
      )
    );

    let difficulty = 'Łatwy';
    if (selected.length > 15) difficulty = 'Ekstremalny';
    else if (selected.length > 10) difficulty = 'Bardzo trudny';
    else if (selected.length > 5) difficulty = 'Trudny';
    else if (selected.length > 2) difficulty = 'Średni';

    return {
      count: selected.length,
      estimatedKm,
      estimatedDays,
      totalElevation,
      maxElevation,
      minElevation,
      difficulty,
      selected,
      kgpCount: kgpPeaksIncluded.length,
      kgpPeaks: kgpPeaksIncluded,
    };
  };

  const getElevationHeight = (elevation: number) => {
    const maxHeight = 1603; // Śnieżka
    const minHeight = 714; // Lázek
    const percentage =
      ((elevation - minHeight) / (maxHeight - minHeight)) * 100;
    return Math.max(percentage, 10); // minimum 10% height
  };

  const getCountryFlag = (country: string) => {
    if (country.includes('PL')) return '🇵🇱';
    if (country.includes('CZ')) return '🇨🇿';
    if (country.includes('DE')) return '🇩🇪';
    return '🏔️';
  };

  const getRankColor = (rank: number) => {
    if (rank <= 3) return 'from-yellow-400 to-yellow-600'; // Gold for top 3
    if (rank <= 10) return 'from-forest-400 to-forest-600'; // Green for top 10
    return 'from-mountain-400 to-mountain-600'; // Gray for others
  };

  return (
    <section className="section-padding bg-forest-50">
      <div className="fluid-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 text-center"
        >
          {/* Subtle Logo Watermark */}
          <div className="absolute right-0 top-0 hidden h-32 w-32 overflow-hidden rounded-full opacity-5 lg:block">
            <Image
              src="/images/logo.png"
              alt="SGT Logo"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-vintage-xl"
          >
            <span className="text-2xl">👑</span>
          </motion.div>

          <h2 className="section-title mb-6 text-4xl md:text-5xl">
            <span className="text-gradient">Korona Sudetów</span>
          </h2>

          <div className="vintage-divider" />

          <p className="mx-auto mb-8 max-w-4xl text-xl font-medium leading-relaxed text-mountain-600">
            22 pasma górskie. 22 najwyższe szczyty. Jeden szlak. Kompletne
            podbicie Sudetów od Śnieżki (1603m) po Lázek (714m).
          </p>

          {/* View Mode Toggle */}
          <div className="mb-8 flex justify-center">
            <div className="flex rounded-xl bg-forest-100 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-lg px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  viewMode === 'grid'
                    ? 'bg-forest-700 text-cream shadow-vintage'
                    : 'text-forest-700 hover:bg-forest-200'
                }`}
              >
                Siatka
              </button>
              <button
                onClick={() => setViewMode('planner')}
                className={`rounded-lg px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  viewMode === 'planner'
                    ? 'bg-forest-700 text-cream shadow-vintage'
                    : 'text-forest-700 hover:bg-forest-200'
                }`}
              >
                Planer Trasy
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sudetenRanges.map((range, index) => (
              <motion.div
                key={range.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() =>
                  setSelectedRange(selectedRange === range.id ? null : range.id)
                }
                className="card-vintage group relative cursor-pointer overflow-hidden p-6"
              >
                {/* Rank Badge */}
                <div
                  className={`absolute right-4 top-4 h-8 w-8 bg-gradient-to-br ${getRankColor(
                    range.rank
                  )} flex items-center justify-center rounded-full font-display text-sm font-bold text-cream shadow-vintage`}
                >
                  {range.rank}
                </div>

                {/* KGP Badge */}
                {koronaGorPolski.some(
                  (kgpPeak) =>
                    range.peak === kgpPeak.name ||
                    range.peak.includes(kgpPeak.name) ||
                    kgpPeak.name.includes(range.peak)
                ) && (
                  <div className="absolute right-14 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-cream shadow-vintage">
                    KGP
                  </div>
                )}

                {/* Country Flag */}
                <div className="absolute left-4 top-4 text-2xl">
                  {getCountryFlag(range.country)}
                </div>

                {/* Peak Icon */}
                <div className="mb-4 mt-8 text-center">
                  <div className="mb-2 text-4xl">🏔️</div>
                  <div className="stats-number text-2xl text-forest-700">
                    {range.elevation}m
                  </div>
                </div>

                {/* Range Name */}
                <h3 className="section-title mb-2 text-center text-lg leading-tight">
                  {range.name}
                </h3>

                {/* Peak Name */}
                <p className="mb-4 text-center font-bold text-mountain-600">
                  {range.peak}
                </p>

                {/* Expanded Info */}
                {selectedRange === range.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 border-t border-forest-200 pt-4"
                  >
                    <div className="space-y-1 text-sm text-mountain-500">
                      <p>
                        <strong>Czeski:</strong> {range.nameCs}
                      </p>
                      <p>
                        <strong>Niemiecki:</strong> {range.nameDe}
                      </p>
                      <p>
                        <strong>Szczyt (CZ):</strong> {range.peakCs}
                      </p>
                      <p>
                        <strong>Kraje:</strong> {range.country}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-700/5 to-earth-700/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Trip Planner View */}
        {viewMode === 'planner' && (
          <div className="space-y-8">
            {/* Quick Select Buttons */}
            <div className="text-center">
              <p className="mb-6 text-lg font-medium text-mountain-600">
                Wybierz szczyty do zdobycia lub skorzystaj z gotowych planów:
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() =>
                    setSelectedPeaks(sudetenRanges.slice(0, 3).map((r) => r.id))
                  }
                  className="btn-outline"
                >
                  TOP 3 Najwyższe
                </button>
                <button
                  onClick={() =>
                    setSelectedPeaks(
                      sudetenRanges.slice(0, 10).map((r) => r.id)
                    )
                  }
                  className="btn-outline"
                >
                  TOP 10
                </button>
                <button
                  onClick={() =>
                    setSelectedPeaks(
                      sudetenRanges
                        .filter((r) => r.country.includes('PL'))
                        .map((r) => r.id)
                    )
                  }
                  className="btn-outline"
                >
                  Tylko Polskie
                </button>
                <button
                  onClick={() => {
                    // Select peaks that correspond to KGP peaks
                    const kgpRangeIds = sudetenRanges
                      .filter((range) =>
                        koronaGorPolski.some(
                          (kgpPeak) =>
                            range.peak === kgpPeak.name ||
                            range.peak.includes(kgpPeak.name) ||
                            kgpPeak.name.includes(range.peak)
                        )
                      )
                      .map((r) => r.id);
                    setSelectedPeaks(kgpRangeIds);
                  }}
                  className="btn-outline border-accent text-accent hover:bg-accent hover:text-cream"
                >
                  KGP Sudety (16)
                </button>
                <button
                  onClick={() =>
                    setSelectedPeaks(sudetenRanges.map((r) => r.id))
                  }
                  className="btn-secondary"
                >
                  Pełna Korona (24)
                </button>
                <button
                  onClick={() => setSelectedPeaks([])}
                  className="btn-outline border-accent text-accent hover:bg-accent"
                >
                  Wyczyść
                </button>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Peak Selection */}
              <div className="lg:col-span-2">
                <h3 className="section-title mb-6 text-left text-2xl">
                  Wybierz Szczyty do Zdobycia
                </h3>
                <div className="grid max-h-96 gap-4 overflow-y-auto pr-4 md:grid-cols-2">
                  {sudetenRanges.map((range) => (
                    <motion.div
                      key={range.id}
                      whileHover={{ scale: 1.02 }}
                      className={`card-vintage cursor-pointer p-4 transition-all duration-300 ${
                        selectedPeaks.includes(range.id)
                          ? 'border-forest-500 bg-forest-100 shadow-vintage-lg'
                          : 'hover:bg-forest-50'
                      }`}
                      onClick={() => togglePeak(range.id)}
                    >
                      <div className="flex items-center space-x-4">
                        {/* Checkbox */}
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-all ${
                            selectedPeaks.includes(range.id)
                              ? 'border-forest-700 bg-forest-700'
                              : 'border-mountain-400 hover:border-forest-500'
                          }`}
                        >
                          {selectedPeaks.includes(range.id) && (
                            <svg
                              className="h-4 w-4 text-cream"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Peak Info */}
                        <div className="flex-1">
                          <div className="mb-1 flex items-center justify-between">
                            <h4 className="text-sm font-bold text-forest-800">
                              {range.peak}
                            </h4>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs">
                                {getCountryFlag(range.country)}
                              </span>
                              {/* KGP Badge */}
                              {koronaGorPolski.some(
                                (kgpPeak) =>
                                  range.peak === kgpPeak.name ||
                                  range.peak.includes(kgpPeak.name) ||
                                  kgpPeak.name.includes(range.peak)
                              ) && (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-cream">
                                  KGP
                                </div>
                              )}
                              <div
                                className={`h-6 w-6 bg-gradient-to-br ${getRankColor(
                                  range.rank
                                )} flex items-center justify-center rounded-full text-xs font-bold text-cream`}
                              >
                                {range.rank}
                              </div>
                            </div>
                          </div>
                          <p className="mb-1 text-xs text-mountain-600">
                            {range.name}
                          </p>
                          <p className="text-sm font-bold text-forest-700">
                            {range.elevation}m
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trip Summary */}
              <div className="space-y-6">
                <h3 className="section-title mb-6 text-left text-2xl">
                  Twój Plan Wędrówki
                </h3>

                {selectedPeaks.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="card-vintage p-4 text-center">
                        <div className="stats-number mb-1 text-2xl">
                          {calculateTripStats().count}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                          Szczytów
                        </div>
                      </div>
                      <div className="card-vintage p-4 text-center">
                        <div className="stats-number mb-1 text-2xl">
                          {calculateTripStats().estimatedDays}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                          Dni
                        </div>
                      </div>
                      <div className="card-vintage p-4 text-center">
                        <div className="stats-number mb-1 text-2xl">
                          {calculateTripStats().estimatedKm}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                          Km
                        </div>
                      </div>
                      <div className="card-vintage p-4 text-center">
                        <div
                          className={`stats-number mb-1 text-2xl ${
                            calculateTripStats().difficulty === 'Ekstremalny'
                              ? 'text-accent'
                              : calculateTripStats().difficulty ===
                                  'Bardzo trudny'
                                ? 'text-earth-700'
                                : calculateTripStats().difficulty === 'Trudny'
                                  ? 'text-forest-700'
                                  : 'text-mountain-600'
                          }`}
                        >
                          {calculateTripStats().difficulty}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                          Poziom
                        </div>
                      </div>
                    </div>

                    {/* KGP Bonus Info */}
                    {calculateTripStats().kgpCount > 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="card-vintage to-earth/10 border-accent/30 bg-gradient-to-r from-accent/10 p-6"
                      >
                        <div className="text-center">
                          <div className="mb-3 flex items-center justify-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-cream">
                              KGP
                            </div>
                            <h4 className="font-bold text-accent">
                              BONUS: Korona Gór Polski
                            </h4>
                          </div>
                          <p className="mb-2 text-sm text-mountain-700">
                            Zdobędziesz{' '}
                            <span className="font-bold text-accent">
                              {calculateTripStats().kgpCount} z 16
                            </span>{' '}
                            sudeckich szczytów Korony Gór Polski!
                          </p>
                          <div className="text-xs text-mountain-600">
                            {calculateTripStats().kgpPeaks.map(
                              (peak, index) => (
                                <span key={peak.id}>
                                  {peak.name} ({peak.code})
                                  {index <
                                  calculateTripStats().kgpPeaks.length - 1
                                    ? ', '
                                    : ''}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Elevation Range */}
                    <div className="card-vintage p-6">
                      <h4 className="mb-4 text-center font-bold text-forest-800">
                        Zakres Wysokości
                      </h4>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-mountain-600">
                          Najniższy
                        </span>
                        <span className="text-sm text-mountain-600">
                          Najwyższy
                        </span>
                      </div>
                      <div className="relative mb-2 h-4 overflow-hidden rounded-full bg-forest-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-forest-400 to-forest-600"
                          style={{
                            width: `${
                              ((calculateTripStats().maxElevation -
                                calculateTripStats().minElevation) /
                                (1603 - 714)) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm font-bold">
                        <span className="text-forest-700">
                          {calculateTripStats().minElevation}m
                        </span>
                        <span className="text-forest-700">
                          {calculateTripStats().maxElevation}m
                        </span>
                      </div>
                    </div>

                    {/* Selected Peaks List */}
                    <div className="card-vintage p-6">
                      <h4 className="mb-4 font-bold text-forest-800">
                        Wybrane Szczyty
                      </h4>
                      <div className="max-h-40 space-y-2 overflow-y-auto">
                        {calculateTripStats()
                          .selected.sort((a, b) => b.elevation - a.elevation)
                          .map((peak, index) => (
                            <div
                              key={peak.id}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="font-medium">
                                {index + 1}. {peak.peak}
                              </span>
                              <span className="font-bold text-forest-700">
                                {peak.elevation}m
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="btn-primary w-full">
                        Pobierz Plan Wędrówki
                      </button>
                      <button className="btn-secondary w-full">
                        Udostępnij Plan
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="card-vintage p-8 text-center">
                    <div className="mb-4 text-4xl">🏔️</div>
                    <h4 className="mb-2 font-bold text-forest-800">
                      Wybierz Szczyty
                    </h4>
                    <p className="text-sm text-mountain-600">
                      Zaznacz szczyty, które chcesz zdobyć, aby zobaczyć
                      szczegóły swojej wędrówki
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid gap-6 md:grid-cols-4"
        >
          <div className="card-vintage p-6 text-center">
            <div className="stats-number mb-2 text-3xl">24</div>
            <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
              Pasma
            </div>
          </div>
          <div className="card-vintage p-6 text-center">
            <div className="stats-number mb-2 text-3xl">1603</div>
            <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
              Najwyższy (Śnieżka)
            </div>
          </div>
          <div className="card-vintage p-6 text-center">
            <div className="stats-number mb-2 text-3xl">714</div>
            <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
              Najniższy (Lázek)
            </div>
          </div>
          <div className="card-vintage p-6 text-center">
            <div className="stats-number mb-2 text-3xl">889</div>
            <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
              Różnica wysokości
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SudetenCrownSection;
