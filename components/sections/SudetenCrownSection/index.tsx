import { Section } from '@/components/sections/Section';
import { sudetenRanges } from './data';
import { GridMountainCards } from './GridMountainCards';
import { FadeIn } from '@/components/motion';
import { SummaryStats } from './SummaryStats';

export const SudetenCrownSection = () => {
  return (
    <Section className="bg-forest-50 py-20" ariaLabel="Sekcja wykaz szczytów">
      <div className="fluid-container min-h-screen">
        <GridMountainCards ranges={sudetenRanges} />
        <FadeIn
          direction="up"
          offset={20}
          duration={0.6}
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
