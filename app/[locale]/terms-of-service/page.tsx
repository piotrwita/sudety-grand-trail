import { TermsOfServiceContent } from './TermsOfServiceContent';
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
  const t = await getTranslations({ locale, namespace: 'metadata.pages.termsOfService' });

  return generateLocaleMetadata({
    title: t('title'),
    description: t('description'),
    path: '/terms-of-service',
    locale: locale as Locale,
    keywords: [
      'regulamin',
      'warunki korzystania',
      'zasady',
      'legalne',
      'terms of service',
    ],
  });
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsOfServiceContent />;
}
