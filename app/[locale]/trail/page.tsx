import { TrailMapSection } from '@/components/sections';
import { TrailDescriptionSection } from '@/components/sections';
import { TrailHeroSection } from '@/components/pages/TrailHeroSection';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.trail' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/trail',
    locale: locale as Locale,
    keywords: [
      'trasa',
      'mapa szlaku',
      'szczyty',
      'pasma górskie',
      'planowanie trasy',
      'GPX',
    ],
  });
}

export default async function TrailPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TrailHeroSection />
      <TrailMapSection />
      <TrailDescriptionSection />
    </>
  );
}
