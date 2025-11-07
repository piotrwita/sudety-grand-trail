'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { SocialLinkList } from '../SocialLinkList';

export const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:items-center md:justify-end md:gap-6 lg:gap-8">
      <ul className="flex gap-6 lg:gap-8">
        {siteConfig.navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`relative flex items-center gap-2 font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-accent'
                  : 'text-cream/90 hover:text-accent-hover'
              }`}
            >
              {'isLive' in item && item.isLive && (
                <div className="size-2 animate-pulse rounded-full bg-accent" />
              )}
              <span>{item.label}</span>
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <SocialLinkList className="flex gap-3 border-l border-forest-600 pl-6" />
    </div>
  );
};
