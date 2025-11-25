import { LightbulbIcon } from '@/components/icons';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { FeatureCards } from './FeatureCards';

export const WhyChooseSection = () => {
  return (
    <Section
      ariaLabel="Sekcja Dlaczego ten szlak"
      className="relative min-h-0 overflow-hidden bg-gradient-to-br from-mountain-100 to-cream"
    >
      <VintageMountainsBackground className="opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-200/30 via-transparent to-earth-200/30" />

      <div className="fluid-container relative z-10">
        <SectionHeader
          title="Dlaczego ten szlak"
          icon={<LightbulbIcon className="size-8 text-cream/80" />}
          variant="forest"
        />
        <FeatureCards />
      </div>
    </Section>
  );
};
