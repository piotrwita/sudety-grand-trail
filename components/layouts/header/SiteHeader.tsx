'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

export const SiteHeader = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-forest-600 bg-forest-800/95"
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderLogo />

        <DesktopNavigation />

        <MobileNavigation />
      </div>
    </motion.nav>
  );
};

const HeaderLogo = () => (
  <Link href="/" className="flex items-center gap-3">
    <div className="relative size-8 overflow-hidden rounded-full bg-transparent shadow-vintage sm:h-10 sm:w-10">
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        className="object-cover"
      />
    </div>
    <span className="hidden font-display text-base font-bold text-cream transition-colors duration-200 hover:text-accent sm:block sm:text-lg">
      {siteConfig.name}
    </span>
  </Link>
);
