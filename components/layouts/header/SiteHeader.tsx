import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { LogoImage } from '@/components/LogoImage';
import { FadeIn } from '@/components/motion/FadeIn';

export const SiteHeader = () => {
  return (
    <FadeIn
      direction="down"
      duration={0.6}
      offset={100}
      className="fixed inset-x-0 top-0 z-50 border-b border-forest-600 bg-forest-800/95"
      data-scroll-lock-fill-gap
    >
      <nav className="fluid-container flex h-16 items-center justify-between">
        <HeaderLogo />

        <DesktopNavigation />

        <MobileNavigation />
      </nav>
    </FadeIn>
  );
};

const HeaderLogo = () => (
  <Link href="/" className="flex items-center gap-3">
    <div className="size-8 overflow-hidden rounded-full bg-transparent shadow-vintage sm:size-10">
      <LogoImage width={40} height={40} />
    </div>
    <span className="hidden font-display text-base font-bold text-cream transition-colors duration-200 hover:text-accent-hover sm:block sm:text-lg">
      {siteConfig.name}
    </span>
  </Link>
);
