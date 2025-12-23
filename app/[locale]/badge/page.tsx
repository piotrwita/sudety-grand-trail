import { BadgeSection } from '@/components/sections';
import { BadgeHeroSection } from '@/components/pages/BadgeHeroSection';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.badge' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/badge',
    locale: locale as Locale,
    keywords: [
      'odznaka',
      'badge',
      'wyróżnienie',
      'regulamin',
      'zdobycie odznaki',
      'oficjalna odznaka',
      'nagroda',
      'medal',
    ],
  });
}

export default async function BadgePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BadgeHeroSection />
      <BadgeSection />
    </>
  );
}
