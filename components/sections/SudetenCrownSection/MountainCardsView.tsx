'use client';

import { FadeIn, ScaleIn } from '@/components/motion';
import type { SudetenRange } from './data';
import { getRankColor, getCountryFlag, isKgpPeak } from './utils';
import { koronaGorPolski } from './data';
import { useState } from 'react';

interface MountainCardsViewProps {
  ranges: SudetenRange[];
}

export const MountainCardsView = ({ ranges }: MountainCardsViewProps) => {
  const [selectedRange, setSelectedRange] = useState<number | null>(null);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {ranges.map((range, index) => (
        <FadeIn
          direction="up"
          offset={30}
          duration={0.25}
          delay={index * 0.15}
          inView={true}
        >
          <div
            className="card-vintage group relative cursor-pointer overflow-hidden p-6"
            onClick={() =>
              setSelectedRange(selectedRange === range.id ? null : range.id)
            }
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
            {isKgpPeak(range.peak, koronaGorPolski) && (
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
              <ScaleIn
                initialScale={0.8}
                initialOpacity={0}
                finalOpacity={1}
                duration={0.3}
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
              </ScaleIn>
            )}

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-700/5 to-earth-700/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </FadeIn>
      ))}
    </div>
  );
};
