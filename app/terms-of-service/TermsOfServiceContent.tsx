'use client';

import { FadeIn } from '@/components/motion';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { useTranslations } from '@/lib/i18n-utils';
import { DocumentTextIcon } from '@/components/icons';
import { ReactNode } from 'react';
import { siteConfig } from '@/config/site';

export const TermsOfServiceContent = () => {
  const { t, tArray } = useTranslations('termsOfService');

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

              <div className="mt-12 space-y-12">
                {tArray('sections').map((section: any, index: number) => (
                  <PolicySection key={index} title={section.title}>
                    <div className="space-y-6">
                      {section.content.map((content: any, contentIndex: number) => (
                        <div key={contentIndex}>
                          {content.subtitle && (
                            <h4 className="mb-2 text-xl font-bold text-accent">
                              {content.subtitle}
                            </h4>
                          )}
                          <p className="text-mountain-300">
                            {content.text.includes('{email}') 
                              ? content.text.replace('{email}', siteConfig.contactEmail)
                              : content.text}
                          </p>
                          {content.list && (
                            <PolicyList items={content.list} />
                          )}
                          {content.footer && (
                            <p className="mt-4 text-sm italic text-mountain-400">
                              {content.footer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </PolicySection>
                ))}
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

