import { LiveTrackingSection } from '@/components/sections';
import { ModernTrackerSection } from '@/components/sections/ModernTrackerSection';
import { LiveHeroSection } from '@/components/pages/LiveHeroSection';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.live' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/live',
    locale: locale as Locale,
    keywords: [
      'live tracking',
      'śledzenie na żywo',
      'GPS',
      'real-time',
      'aktualna pozycja',
      'mapa na żywo',
      'Poltrax',
    ],
  });
}

export default async function LivePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <LiveHeroSection />
      <LiveTrackingSection />
      <ModernTrackerSection />
    </>
  );
}
