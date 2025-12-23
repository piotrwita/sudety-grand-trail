import {
  HomeHeroSection,
  WhyChooseSection,
  AboutProjectSection,
} from '@/components/sections';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.home' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/',
    locale: locale as Locale,
    keywords: ['strona główna', 'home', 'sudety trail', 'górskie wyzwanie'],
  });
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHeroSection />
      <WhyChooseSection />
      <AboutProjectSection />
    </>
  );
}
