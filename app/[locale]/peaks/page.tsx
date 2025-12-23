import { SudetenCrownSection } from '@/components/sections';
import { PeaksHeroSection } from '@/components/pages/MountainsHeroSection';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.peaks' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/peaks',
    locale: locale as Locale,
    keywords: [
      'Korona Sudetów',
      'szczyty sudetów',
      'góry sudety',
      'odznaka korony',
      'zdobywanie szczytów',
    ],
  });
}

export default async function PeaksPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PeaksHeroSection />
      <SudetenCrownSection />
    </>
  );
}
