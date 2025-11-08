import { SudetenCrownSection } from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.korona;

export default function KoronaPage() {
  return (
    <div className="pt-16">
      <SudetenCrownSection />
    </div>
  );
}
