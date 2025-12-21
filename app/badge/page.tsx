import { BadgeSection } from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { BadgeHeroSection } from '@/components/pages/BadgeHeroSection';

export const metadata: Metadata = pageMetadata.badge;

export default function BadgePage() {
  return (
    <>
      <BadgeHeroSection />
      <BadgeSection />
    </>
  );
}
