import { FeatureCards } from '../FeatureCards';
import { FadeIn, ScaleIn } from '@/components/motion';
import { LightbulbIcon } from '@/components/icons';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { Section } from './Section';

export const WhyChooseSection = () => {
  return (
    <Section
      ariaLabel="Dlaczego ten szlak"
      className="relative overflow-hidden bg-gradient-to-br from-mountain-100 to-cream"
    >
      <VintageMountainsBackground className="opacity-10" />

      {/* Subtelny gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-200/30 via-transparent to-earth-200/30" />

      <div className="fluid-container relative z-10">
        <FadeIn
          inView={true}
          direction="up"
          offset={60}
          duration={0.6}
          className="relative mb-8 text-center lg:mb-16"
        >
          <ScaleIn
            inView={true}
            initialScale={0.5}
            duration={0.6}
            delay={0.2}
            className="section-icon-badge mb-8 bg-gradient-to-br from-forest-700 to-earth-700"
          >
            <LightbulbIcon className="size-8 text-cream/80" />
          </ScaleIn>
          <FadeIn inView={true} className="mb-6">
            <h2 className="section-title">
              <span className="text-gradient">Dlaczego ten szlak</span>
            </h2>
          </FadeIn>
          <div className="mx-auto my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-forest-700/40 to-transparent" />
        </FadeIn>

        <FeatureCards />
      </div>
    </Section>
  );
};
