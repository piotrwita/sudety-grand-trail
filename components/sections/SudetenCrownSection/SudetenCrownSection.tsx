'use client';

import { Section } from '../Section';
import { sudetenRanges } from './data';
import { MountainCardsView } from './MountainCardsView';
import { FadeIn, ScaleIn } from '@/components/motion';
import { SummaryStats } from './SummaryStats';

export const SudetenCrownSection = () => {

  return (
    <Section className="bg-forest-50 py-24" ariaLabel="Sekcja Korona Sudetów">
      <div className="fluid-container">
        {/* Header */}
        <FadeIn
          direction="up"
          offset={50}
          duration={0.8}
          className="relative mb-16 text-center"
        >
          <ScaleIn
            initialScale={0.5}
            finalScale={1}
            initialOpacity={0}
            finalOpacity={1}
            duration={0.6}
            delay={0.2}
            className="section-icon-badge mb-8 bg-gradient-to-br from-yellow-400 to-yellow-600"
          >
            <span className="text-2xl">👑</span>
          </ScaleIn>

          <h2 className="section-title mb-6">
            <span className="text-gradient">Korona Sudetów</span>
          </h2>

          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />

          <p className="text-fluid-xl mx-auto mb-8 max-w-5xl font-medium leading-relaxed text-mountain-600">
            29 szczytów. 22 pasma górskie. Jeden szlak. Kompletne
            podbicie Sudetów od Śnieżki (1603m) po Lázek (714m).
          </p>
        </FadeIn>

        <MountainCardsView ranges={sudetenRanges} />

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
