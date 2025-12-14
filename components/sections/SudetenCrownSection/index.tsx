import { Section } from '@/components/sections/Section';
import { sudetenRanges } from './data';
import { GridMountainCards } from './GridMountainCards';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';

export const SudetenCrownSection = () => {
  return (
    <Section className="bg-earth-50 relative overflow-hidden" ariaLabel="Sekcja wykaz szczytów">
      <VintageMountainsBackground className="opacity-10" />
      <div className="fluid-container min-h-screen relative z-10">
        <GridMountainCards ranges={sudetenRanges} />
      </div>
    </Section>
  );
};
