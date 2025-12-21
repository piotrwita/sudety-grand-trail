import { HallOfFameStats } from '@/components/HallOfFameStats';
import { PreTrailRegistration } from '@/components/PreTrailRegistration';
import { HallOfFameList } from '@/components/HallOfFameList';
import { SubmissionFormSection } from '@/components/sections';
import { HallOfFameHeroSection } from '@/components/pages/HallOfFameHeroSection';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.hallOfFame;

export default function HallOfFamePage() {
  return (
    <>
      <HallOfFameHeroSection />
      <HallOfFameStats />
      <PreTrailRegistration />
      <HallOfFameList />
      <SubmissionFormSection />
    </>
  );
}
