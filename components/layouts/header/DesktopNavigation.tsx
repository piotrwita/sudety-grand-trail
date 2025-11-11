'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { SocialLinkList } from '../SocialLinkList';
import { cn } from '@/lib/utils';

const springConfig = {
  stiffness: 500,
  damping: 35,
  duration: 0.5,
};

export const DesktopNavigation = () => {
  const pathname = usePathname();
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  const underlineLeft = useMotionValue(0);
  const underlineWidth = useMotionValue(0);

  const springLeft = useSpring(underlineLeft, springConfig);
  const springWidth = useSpring(underlineWidth, springConfig);

  useEffect(() => {
    const activeIndex = siteConfig.navigation.findIndex(
      (item) => item.href === pathname
    );

    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      const activeTab = tabRefs.current[activeIndex];
      if (activeTab) {
        underlineLeft.set(activeTab.offsetLeft);
        underlineWidth.set(activeTab.offsetWidth);
      }
    }
  }, [pathname, underlineLeft, underlineWidth]);

  return (
    <div className="hidden md:flex md:items-center md:justify-end md:gap-6 lg:gap-8">
      <ul className="relative flex gap-6 lg:gap-8">
        {siteConfig.navigation.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={index}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-2 font-medium transition-colors duration-200',
                  isActive
                    ? 'text-accent'
                    : 'text-cream/90 hover:text-accent-hover'
                )}
              >
                {'isLive' in item && item.isLive && (
                  <div className="size-2 animate-pulse rounded-full bg-accent" />
                )}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
        <motion.div
          className="absolute -bottom-1 h-0.5 bg-accent"
          style={{
            left: springLeft,
            width: springWidth,
          }}
        />
      </ul>

      <SocialLinkList className="flex gap-3 border-l border-forest-600 pl-6" />
    </div>
  );
};
