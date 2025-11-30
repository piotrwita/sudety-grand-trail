'use client';

import { Section } from '../Section';
import { sudetenRanges } from './data';
import { MountainCardsView } from './MountainCardsView';
import { FadeIn, ScaleIn } from '@/components/motion';
import { SummaryStats } from './SummaryStats';

export const SudetenCrownSection = () => {

  return (
    <Section className="bg-forest-50 py-24" ariaLabel="Sekcja wykaz szczytów">
      <div className="fluid-container">
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
