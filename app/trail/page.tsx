import { TrailMapSection } from '@/components/sections';
import { TrailDescriptionSection } from '@/components/sections';
import { TrailHeroSection } from '@/components/pages/TrailHeroSection';
import { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailPage() {
  return (
    <>
      <TrailHeroSection />
      <TrailMapSection />
      <TrailDescriptionSection />
    </>
  );
}
