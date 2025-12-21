'use client';

import { Section, SectionHeader } from '@/components/sections';
import { FadeIn } from '@/components/motion';
import { DocumentIcon } from '@/components/icons';
import { SubmissionForm } from './SubmissionForm';
import { sectionIds } from '@/config/section-ids';
import { useTranslations } from '@/lib/i18n-utils';

export const SubmissionFormSection = () => {
  const { t } = useTranslations('submissionFormSection');
  
  return (
    <Section
      id={sectionIds.submission}
      ariaLabel={t('title')}
      className="bg-forest-800"
    >
      <div className="fluid-container">
        <SectionHeader
          title={t('title')}
          icon={<DocumentIcon className="size-6 text-cream/80" />}
          variant="light"
        />
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.6}
          inView={true}
          className="mb-16 text-center"
        >
          <p className="text-fluid-lg mx-auto max-w-4xl font-medium leading-relaxed text-cream/90">
            {t('description')} <span className="theme-halloffame-text-gradient-light font-bold">{t('descriptionHighlight')}</span>{t('descriptionEnd')}{' '}
            <span className="theme-halloffame-text-gradient-light font-bold">{t('hallOfFame')}</span>{t('descriptionEnd2')}
          </p>
        </FadeIn>

        <div className="mx-auto max-w-5xl">
          <SubmissionForm />
        </div>
      </div>

      {/* Decorative vintage elements */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute bottom-20 right-10 h-24 w-24 animate-pulse rounded-full bg-cream/10 blur-xl" />
    </Section>
  );
};
