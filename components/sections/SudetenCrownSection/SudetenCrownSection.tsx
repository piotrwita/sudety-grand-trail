'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '../Section';
import { sudetenRanges, koronaGorPolski } from './data';
import { MountainCardsView } from './MountainCardsView';
import { TrailPlannerView } from './TrailPlannerView';
import { FadeIn, ScaleIn } from '@/components/motion';
import { SummaryStats } from './SummaryStats';

const ViewModes = {
  Grid: 'grid',
  Planner: 'planner',
} as const;

type ViewMode = (typeof ViewModes)[keyof typeof ViewModes];

export const SudetenCrownSection = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewModes.Grid);
  const [selectedPeaks, setSelectedPeaks] = useState<number[]>([]);

  const togglePeak = (rangeId: number) => {
    setSelectedPeaks((prev) =>
      prev.includes(rangeId)
        ? prev.filter((id) => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const handleQuickSelect = (peakIds: number[]) => {
    setSelectedPeaks(peakIds);
  };

  return (
    <Section className="bg-forest-50 py-24" ariaLabel="Sekcja Korona Sudetów">
      <div className="fluid-container">
        {/* Header */}
        <FadeIn
          direction="up"
          offset={50}
          duration={0.8}
          inView={true}
          inViewMargin="-100px"
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
          <ScaleIn
            initialScale={0.5}
            finalScale={1}
            initialOpacity={0}
            finalOpacity={1}
            duration={0.6}
            delay={0.2}
            inView={true}
            className="section-icon-badge mb-8 bg-gradient-to-br from-yellow-400 to-yellow-600"
          >
            <span className="text-2xl">👑</span>
          </ScaleIn>

          <h2 className="section-title mb-6">
            <span className="text-gradient">Korona Sudetów</span>
          </h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="text-fluid-xl mx-auto mb-8 max-w-5xl font-medium leading-relaxed text-mountain-600">
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
        </FadeIn>

        {viewMode === ViewModes.Grid && (
          <MountainCardsView ranges={sudetenRanges} />
        )}

        {viewMode === ViewModes.Planner && (
          <TrailPlannerView
            ranges={sudetenRanges}
            kgpPeaks={koronaGorPolski}
            selectedPeaks={selectedPeaks}
            onTogglePeak={togglePeak}
            onQuickSelect={handleQuickSelect}
          />
        )}

        <FadeIn
          direction="up"
          offset={30}
          duration={0.8}
          delay={0.3}
          inView={true}
          className="mt-16 grid gap-6 md:grid-cols-4"
        >
          <SummaryStats />
        </FadeIn>
      </div>
    </Section>
  );
};
