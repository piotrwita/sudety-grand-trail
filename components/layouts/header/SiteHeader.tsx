'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { LogoImage } from '../../LogoImage';

export const SiteHeader = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-forest-600 bg-forest-800/95"
    >
      <div className="fluid-container flex h-16 items-center justify-between">
        <HeaderLogo />

        <DesktopNavigation />

        <MobileNavigation />
      </div>
    </motion.nav>
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
