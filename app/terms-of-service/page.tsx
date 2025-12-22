import { TermsOfServiceContent } from './TermsOfServiceContent';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.termsOfService;

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}

