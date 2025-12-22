import { PrivacyPolicyContent } from './PrivacyPolicyContent';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.privacyPolicy;

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
