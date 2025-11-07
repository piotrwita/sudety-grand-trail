'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { SocialLinkList } from '../SocialLinkList';

export const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
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
  );
};
