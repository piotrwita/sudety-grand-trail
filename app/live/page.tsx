import { LiveTrackingSection } from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import { Metadata } from 'next';
import { ModernTrackerSection } from '@/components/sections/ModernTrackerSection';
import { LiveHeroSection } from '@/components/pages/LiveHeroSection';

export const metadata: Metadata = pageMetadata.live;

export default function LivePage() {
  return (
    <>
      <LiveHeroSection />
      <LiveTrackingSection />
      <ModernTrackerSection />
    </>
  );
}

