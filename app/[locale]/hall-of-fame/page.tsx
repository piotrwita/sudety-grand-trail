import { HallOfFameStats } from '@/components/HallOfFameStats';
import { PreTrailRegistration } from '@/components/PreTrailRegistration';
import { HallOfFameList } from '@/components/HallOfFameList';
import { SubmissionFormSection } from '@/components/sections';
import { HallOfFameHeroSection } from '@/components/pages/HallOfFameHeroSection';
import { generateLocaleMetadata } from '@/config/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { type Locale } from '@/i18n/routing';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.hallOfFame' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/hall-of-fame',
    locale: locale as Locale,
    keywords: [
      'galeria sław',
      'zdobywcy',
      'finishers',
      'rekordy',
      'statystyki',
      'zgłoszenie przejścia',
    ],
  });
}

export default async function HallOfFamePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HallOfFameHeroSection />
      <HallOfFameStats />
      <PreTrailRegistration />
      <HallOfFameList />
      <SubmissionFormSection />
    </>
  );
}
