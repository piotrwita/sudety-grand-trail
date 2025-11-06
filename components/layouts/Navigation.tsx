'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { SocialLinkList } from './SocialLinkList';
import { HamburgerIcon } from '@/components/icons';

export const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-forest-600 bg-forest-800/95"
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
        >
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-2 font-medium transition-[color,transform] duration-200 hover:scale-105 ${
                pathname === item.href
                  ? 'text-accent'
                  : 'text-cream/90 hover:text-cream'
              }`}
            >
              {'isLive' in item && item.isLive && (
                <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              )}
              <span>{item.label}</span>
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}

          <SocialLinkList className="flex gap-3 border-l border-forest-600 pl-6" />
        </div>

        {/* Mobile Social Links & Menu Button */}
        <div className="flex gap-3 md:hidden">
          <SocialLinkList className="flex gap-3 border-r border-forest-600 pr-3" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-cream transition-all duration-200 hover:bg-forest-700 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-forest-800"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-forest-900/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="from-forest-800/98 to-forest-900/98 relative z-50 overflow-hidden border-t border-forest-600/80 bg-gradient-to-b shadow-2xl backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col items-center gap-4 px-4 py-6 sm:px-6">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative flex w-full max-w-xs items-center justify-center gap-3 overflow-hidden rounded-xl border px-6 py-5 text-center font-medium shadow-lg transition-all duration-200 active:scale-95 ${
                      pathname === item.href
                        ? 'border-accent/50 bg-gradient-to-r from-forest-700/80 to-forest-600/80 text-accent shadow-accent/20'
                        : 'border-forest-600/50 bg-gradient-to-r from-forest-700/60 to-forest-800/60 text-cream/90 hover:border-accent/30 hover:from-forest-600/70 hover:to-forest-700/70 hover:text-cream'
                    }`}
                  >
                    {'isLive' in item && item.isLive && (
                      <div className="size-3 animate-pulse rounded-full bg-accent" />
                    )}
                    <span className="text-lg font-bold tracking-wide">
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {pathname === item.href && (
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
