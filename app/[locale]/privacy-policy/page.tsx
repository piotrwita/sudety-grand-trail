import { PrivacyPolicyContent } from './PrivacyPolicyContent';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.privacyPolicy' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/privacy-policy',
    locale: locale as Locale,
    keywords: [
      'polityka prywatności',
      'prywatność',
      'RODO',
      'ochrona danych',
      'cookies',
    ],
  });
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyPolicyContent />;
}
