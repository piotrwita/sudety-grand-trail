'use client';

import { FadeIn } from '@/components/motion';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { useTranslations } from '@/lib/i18n-utils';
import { DocumentTextIcon } from '@/components/icons';
import { ReactNode } from 'react';
import { siteConfig } from '@/config/site';

export const PrivacyPolicyContent = () => {
  const { t, tArray } = useTranslations('privacyPolicy');

  return (
    <Section className="bg-forest-900 pb-20 pt-32 text-cream">
      <div className="fluid-container">
        <FadeIn direction="up" duration={0.6}>
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              title={t('title')}
              icon={<DocumentTextIcon className="size-6 text-cream" />}
              variant="light"
            />

            <p className="mb-4 text-sm text-mountain-400">{t('lastUpdated')}</p>

            <div className="prose prose-invert prose-mountain max-w-none">
              <p className="text-lg leading-relaxed text-mountain-200">
                {t('intro')}
              </p>
              <p className="mb-12 leading-relaxed text-mountain-300">
                {t('commitment')}
              </p>

              <div className="space-y-12">
                {/* 0. Information We Collect */}
                <PolicySection title={t('sections.0.title')}>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-accent">
                        {t('sections.0.content.0.subtitle')}
                      </h4>
                      <p className="mb-3 text-mountain-300">
                        {t('sections.0.content.0.text')}
                      </p>
                      <PolicyList items={tArray('sections.0.content.0.list')} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-accent">
                        {t('sections.0.content.1.subtitle')}
                      </h4>
                      <p className="mb-3 text-mountain-300">
                        {t('sections.0.content.1.text')}
                      </p>
                      <PolicyList items={tArray('sections.0.content.1.list')} />
                      <p className="mt-4 text-sm italic text-mountain-400">
                        {t('sections.0.content.1.footer')}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-accent">
                        {t('sections.0.content.2.subtitle')}
                      </h4>
                      <p className="mb-3 text-mountain-300">
                        {t('sections.0.content.2.text')}
                      </p>
                      <PolicyList items={tArray('sections.0.content.2.list')} />
                      <p className="mt-4 text-sm italic text-mountain-400">
                        {t('sections.0.content.2.footer')}
                      </p>
                    </div>
                  </div>
                </PolicySection>

                {/* 1. Cookies and Tracking */}
                <PolicySection title={t('sections.1.title')}>
                  <div className="space-y-4">
                    <p className="text-mountain-300">
                      {t('sections.1.content.0.text')}
                    </p>
                    <h4 className="mb-2 text-xl font-bold text-accent">
                      {t('sections.1.content.0.subtitle')}
                    </h4>
                    <PolicyList items={tArray('sections.1.content.0.list')} />
                    <p className="mt-4 text-sm italic text-mountain-400">
                      {t('sections.1.content.0.footer')}
                    </p>
                  </div>
                </PolicySection>

                {/* 2. How We Use Your Information */}
                <PolicySection title={t('sections.2.title')}>
                  <p className="mb-3 text-mountain-300">
                    {t('sections.2.content.0.text')}
                  </p>
                  <PolicyList items={tArray('sections.2.content.0.list')} />
                </PolicySection>

                {/* 3. Public Display of Data */}
                <PolicySection title={t('sections.3.title')}>
                  <p className="text-mountain-300">
                    {t('sections.3.content.0.text')}
                  </p>
                </PolicySection>

                {/* 4. Information Sharing */}
                <PolicySection title={t('sections.4.title')}>
                  <p className="mb-3 text-mountain-300">
                    {t('sections.4.content.0.text')}
                  </p>
                  <PolicyList items={tArray('sections.4.content.0.list')} />
                </PolicySection>

                {/* 5. Data Security */}
                <PolicySection title={t('sections.5.title')}>
                  <p className="text-mountain-300">
                    {t('sections.5.content.0.text')}
                  </p>
                </PolicySection>

                {/* 6. Data Retention */}
                <PolicySection title={t('sections.6.title')}>
                  <p className="text-mountain-300">
                    {t('sections.6.content.0.text')}
                  </p>
                </PolicySection>

                {/* 7. Your Rights */}
                <PolicySection title={t('sections.7.title')}>
                  <p className="mb-3 text-mountain-300">
                    {t('sections.7.content.0.text')}
                  </p>
                  <PolicyList items={tArray('sections.7.content.0.list')} />
                  <p className="mt-4 text-sm text-mountain-400">
                    {t('sections.7.content.0.footer')}
                  </p>
                </PolicySection>

                {/* 8. Third-Party Links */}
                <PolicySection title={t('sections.8.title')}>
                  <p className="text-mountain-300">
                    {t('sections.8.content.0.text')}
                  </p>
                </PolicySection>

                {/* 9. Children's Privacy */}
                <PolicySection title={t('sections.9.title')}>
                  <p className="text-mountain-300">
                    {t('sections.9.content.0.text')}
                  </p>
                </PolicySection>

                {/* 10. Changes to This Privacy Policy */}
                <PolicySection title={t('sections.10.title')}>
                  <p className="text-mountain-300">
                    {t('sections.10.content.0.text')}
                  </p>
                </PolicySection>

                {/* 11. Contact Us */}
                <PolicySection title={t('sections.11.title')}>
                  <p className="text-mountain-300">
                    {t('sections.11.content.0.text', {
                      email: siteConfig.contactEmail,
                    })}
                  </p>
                </PolicySection>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

const PolicySection = ({ title, children }: PolicySectionProps) => (
  <div className="border-l-2 border-forest-700 py-2 pl-6 sm:pl-8">
    <h3 className="mb-4 font-display text-2xl font-bold text-cream">{title}</h3>
    <div className="leading-relaxed text-mountain-300">{children}</div>
  </div>
);

const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5 text-mountain-300">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
