import {
  HeroSection,
  WhyChooseSection,
  AboutProjectSection,
  MotivationSection,
} from '@/components/sections';
import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <AboutProjectSection />
      <MotivationSection />
    </>
  );
}
