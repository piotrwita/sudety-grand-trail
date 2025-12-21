import { AboutCreator } from '@/components/AboutCreator';
import { TrailJourneySection } from '@/components/sections';
import { AboutHeroSection } from '@/components/pages/AboutHeroSection';
import { pageMetadata } from '@/config/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutCreator />
      <TrailJourneySection />
    </>
  );
}
