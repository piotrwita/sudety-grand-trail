import { SudetenCrownSection } from '@/components/sections';
import { MountainsHeroSection } from '@/components/pages/MountainsHeroSection';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.korona;

export default function MountainsPage() {
  return (
    <>
      <MountainsHeroSection />
      <SudetenCrownSection />
    </>
  );
}
