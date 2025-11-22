'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { SocialLinkList } from '../SocialLinkList';
import { HamburgerIcon } from '@/components/icons';
import { useState } from 'react';

export const MobileNavigation = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex gap-3 lg:hidden">
      <SocialLinkList className="flex gap-3 border-r border-forest-600 pr-3" />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="rounded-lg p-2 text-cream transition-all duration-200 hover:bg-forest-700 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-forest-800"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <HamburgerIcon isOpen={isMenuOpen} />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-forest-900/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="via-forest-850 fixed left-0 right-0 top-16 z-50 border-b border-forest-700/40 bg-gradient-to-b from-forest-800 to-forest-900 p-6 shadow-2xl"
            >
              <ul className="flex flex-col items-center gap-3">
                {siteConfig.navigation.map((item, idx) => (
                  <motion.li
                    key={`${item.href}-${idx}`}
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.05 + idx * 0.05,
                    }}
                    className="w-full max-w-sm"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl border px-8 py-5 font-medium shadow-lg transition-all duration-300 active:scale-[0.97] ${
                        pathname === item.href
                          ? 'border-accent/60 bg-gradient-to-br from-forest-700 to-forest-800 text-accent shadow-accent/30'
                          : 'border-forest-600/50 bg-gradient-to-br from-forest-700/95 to-forest-800/95 text-cream hover:border-accent/50 hover:from-forest-700 hover:to-forest-800 hover:text-cream hover:shadow-xl hover:shadow-accent/20'
                      }`}
                    >
                      <span className="flex items-center gap-3 text-lg font-bold tracking-wide">
                        {'isLive' in item && item.isLive && (
                          <div className="relative flex size-3">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex size-3 rounded-full bg-accent" />
                          </div>
                        )}
                        {item.label}
                      </span>
                      {pathname === item.href ? (
                        <div className="size-2.5 rounded-full bg-accent shadow-lg shadow-accent/60" />
                      ) : (
                        <div className="size-1.5 rounded-full bg-forest-500/40 transition-all duration-300 group-hover:size-2 group-hover:bg-accent/60" />
                      )}

                      {/* Hover shimmer effect */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="via-cream/8 absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-transparent" />
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
