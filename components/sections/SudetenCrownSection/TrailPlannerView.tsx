'use client';

import { useMemo } from 'react';
import { FadeIn, ScaleIn } from '@/components/motion';
import type { SudetenRange, KgpPeak } from './data';
import {
  calculateTripStats,
  getRankColor,
  getCountryFlag,
  isKgpPeak,
} from './utils';

interface TrailPlannerViewProps {
  ranges: SudetenRange[];
  kgpPeaks: KgpPeak[];
  selectedPeaks: number[];
  onTogglePeak: (rangeId: number) => void;
  onQuickSelect: (peakIds: number[]) => void;
}

export const TrailPlannerView = ({
  ranges,
  kgpPeaks,
  selectedPeaks,
  onTogglePeak,
  onQuickSelect,
}: TrailPlannerViewProps) => {
  // Memoize trip stats to avoid recalculating on every render
  const tripStats = useMemo(
    () => calculateTripStats(selectedPeaks, ranges, kgpPeaks),
    [selectedPeaks, ranges, kgpPeaks]
  );

  const handleQuickSelectTop3 = () => {
    onQuickSelect(ranges.slice(0, 3).map((r) => r.id));
  };

  const handleQuickSelectTop10 = () => {
    onQuickSelect(ranges.slice(0, 10).map((r) => r.id));
  };

  const handleQuickSelectPolish = () => {
    onQuickSelect(
      ranges.filter((r) => r.country.includes('PL')).map((r) => r.id)
    );
  };

  const handleQuickSelectKgp = () => {
    const kgpRangeIds = ranges
      .filter((range) => isKgpPeak(range.peak, kgpPeaks))
      .map((r) => r.id);
    onQuickSelect(kgpRangeIds);
  };

  const handleQuickSelectAll = () => {
    onQuickSelect(ranges.map((r) => r.id));
  };

  const handleClear = () => {
    onQuickSelect([]);
  };

  return (
    <div className="space-y-8">
      {/* Quick Select Buttons */}
      <div className="text-center">
        <p className="mb-6 text-lg font-medium text-mountain-600">
          Wybierz szczyty do zdobycia lub skorzystaj z gotowych planów:
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button onClick={handleQuickSelectTop3} className="btn-outline">
            TOP 3 Najwyższe
          </button>
          <button onClick={handleQuickSelectTop10} className="btn-outline">
            TOP 10
          </button>
          <button onClick={handleQuickSelectPolish} className="btn-outline">
            Tylko Polskie
          </button>
          <button
            onClick={handleQuickSelectKgp}
            className="btn-outline border-accent text-accent hover:bg-accent hover:text-cream"
          >
            KGP Sudety (16)
          </button>
          <button onClick={handleQuickSelectAll} className="btn-secondary">
            Pełna Korona (22)
          </button>
          <button
            onClick={handleClear}
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
            {ranges.map((range) => (
              <FadeIn
                key={range.id}
                inView={false}
                whileHover={{ scale: 1.02 }}
                className={`card-vintage cursor-pointer p-4 transition-all duration-300 ${
                  selectedPeaks.includes(range.id)
                    ? 'border-forest-500 bg-forest-100 shadow-vintage-lg'
                    : 'hover:bg-forest-50'
                }`}
                {...{
                  onClick: () => onTogglePeak(range.id),
                }}
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
                        {isKgpPeak(range.peak, kgpPeaks) && (
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
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Trip Summary */}
        <div className="space-y-6">
          <h3 className="section-title mb-6 text-left text-2xl">
            Twój Plan Wędrówki
          </h3>

          {selectedPeaks.length > 0 ? (
            <FadeIn
              direction="up"
              offset={20}
              inView={false}
              className="space-y-6"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card-vintage p-4 text-center">
                  <div className="stats-number mb-1 text-2xl">
                    {tripStats.count}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                    Szczytów
                  </div>
                </div>
                <div className="card-vintage p-4 text-center">
                  <div className="stats-number mb-1 text-2xl">
                    {tripStats.estimatedDays}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                    Dni
                  </div>
                </div>
                <div className="card-vintage p-4 text-center">
                  <div className="stats-number mb-1 text-2xl">
                    {tripStats.estimatedKm}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                    Km
                  </div>
                </div>
                <div className="card-vintage p-4 text-center">
                  <div
                    className={`stats-number mb-1 text-2xl ${
                      tripStats.difficulty === 'Ekstremalny'
                        ? 'text-accent'
                        : tripStats.difficulty === 'Bardzo trudny'
                          ? 'text-earth-700'
                          : tripStats.difficulty === 'Trudny'
                            ? 'text-forest-700'
                            : 'text-mountain-600'
                    }`}
                  >
                    {tripStats.difficulty}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wide text-mountain-600">
                    Poziom
                  </div>
                </div>
              </div>

              {/* KGP Bonus Info */}
              {tripStats.kgpCount > 0 && (
                <ScaleIn
                  initialScale={0.9}
                  finalScale={1}
                  initialOpacity={0}
                  finalOpacity={1}
                  inView={false}
                  className="card-vintage border-accent/30 bg-gradient-to-r from-accent/10 to-earth/10 p-6"
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
                        {tripStats.kgpCount} z 16
                      </span>{' '}
                      sudeckich szczytów Korony Gór Polski!
                    </p>
                    <div className="text-xs text-mountain-600">
                      {tripStats.kgpPeaks.map((peak, index) => (
                        <span key={peak.id}>
                          {peak.name} ({peak.code})
                          {index < tripStats.kgpPeaks.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScaleIn>
              )}

              {/* Elevation Range */}
              <div className="card-vintage p-6">
                <h4 className="mb-4 text-center font-bold text-forest-800">
                  Zakres Wysokości
                </h4>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-mountain-600">Najniższy</span>
                  <span className="text-sm text-mountain-600">Najwyższy</span>
                </div>
                <div className="relative mb-2 h-4 overflow-hidden rounded-full bg-forest-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-forest-400 to-forest-600"
                    style={{
                      width: `${
                        ((tripStats.maxElevation - tripStats.minElevation) /
                          (1603 - 714)) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-forest-700">
                    {tripStats.minElevation}m
                  </span>
                  <span className="text-forest-700">
                    {tripStats.maxElevation}m
                  </span>
                </div>
              </div>

              {/* Selected Peaks List */}
              <div className="card-vintage p-6">
                <h4 className="mb-4 font-bold text-forest-800">
                  Wybrane Szczyty
                </h4>
                <div className="max-h-40 space-y-2 overflow-y-auto">
                  {tripStats.selected
                    .sort((a, b) => b.elevation - a.elevation)
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
            </FadeIn>
          ) : (
            <div className="card-vintage p-8 text-center">
              <div className="mb-4 text-4xl">🏔️</div>
              <h4 className="mb-2 font-bold text-forest-800">
                Wybierz Szczyty
              </h4>
              <p className="text-sm text-mountain-600">
                Zaznacz szczyty, które chcesz zdobyć, aby zobaczyć szczegóły
                swojej wędrówki
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
