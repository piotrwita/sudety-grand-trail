import { TrailMapSection } from '@/components/sections';
import TrailDescription from '@/components/TrailDescription';
import { TrailHeroSection } from '@/components/pages/TrailHeroSection';
import { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailPage() {
  return (
    <>
      <TrailHeroSection />
      <TrailMapSection />
      <TrailDescription />
    </>
  );
}
