import { AboutCreator } from '@/components/AboutCreator';
import { TrailJourneySection } from '@/components/sections';
import { AboutHeroSection } from '@/components/pages/AboutHeroSection';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.about' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/about',
    locale: locale as Locale,
    keywords: ['o mnie', 'twórca', 'historia', 'motywacja', 'biografia', 'pasja do gór'],
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHeroSection />
      <AboutCreator />
      <TrailJourneySection />
    </>
  );
}
