'use client';

import { Section } from '@/components/sections';
import { FadeIn } from '@/components/motion';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { useTranslations } from '@/lib/i18n-utils';

export const AboutHeroSection = () => {
  const { t } = useTranslations('aboutHero');
  
  return (
    <Section
      className="min-h-0 bg-gradient-to-br from-forest-800 via-forest-700 to-earth-800 pb-16 pt-24 sm:pb-24 sm:pt-32"
      ariaLabel="Sekcja główna - O Projekcie"
    >
      {/* Background Pattern */}
      <div className="gradient-mesh-overlay absolute inset-0 opacity-20" />
      <VintageMountainsBackground className="opacity-10" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn direction="up" offset={60} duration={0.6}>
          <FadeIn direction="up" offset={30} duration={0.8} delay={0.4}>
            <h1 className="hero-title mb-6 text-cream">
              {t('title')} <br />
              <span className="gradient-text-mesh">{t('titleHighlight')}</span>
              <span className="text-fluid-lg mt-4 block font-medium normal-case tracking-normal text-cream/80">
                {t('subtitle')}
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" offset={30} duration={0.8} delay={0.6}>
            <p className="text-fluid-base lg:text-fluid-lg mx-auto mb-8 max-w-3xl font-medium leading-relaxed text-cream/85">
              <span className="italic text-cream/60">
                {t('description')}
              </span>
            </p>
          </FadeIn>
        </FadeIn>
      </div>
    </Section>
  );
};

