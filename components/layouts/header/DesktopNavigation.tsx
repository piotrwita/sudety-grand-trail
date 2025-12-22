'use client';

import { useEffect, useRef } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useNavigation } from '@/lib/get-navigation';
import { SocialLinkList } from '../SocialLinkList';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const springConfig = {
  stiffness: 500,
  damping: 35,
  duration: 0.5,
};

export const DesktopNavigation = () => {
  const pathname = usePathname();
  const navigation = useNavigation();
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  const underlineLeft = useMotionValue(0);
  const underlineWidth = useMotionValue(0);

  const springLeft = useSpring(underlineLeft, springConfig);
  const springWidth = useSpring(underlineWidth, springConfig);

  // Update underline position when pathname or navigation changes
  useEffect(() => {
    const updateUnderline = () => {
      const activeIndex = navigation.findIndex(
        (item) => item.href === pathname
      );

      if (activeIndex !== -1) {
        const activeTab = tabRefs.current[activeIndex];
        if (activeTab && activeTab.offsetWidth > 0) {
          // Only update if element has valid dimensions
          underlineLeft.set(activeTab.offsetLeft);
          underlineWidth.set(activeTab.offsetWidth);
        }
      } else {
        // Reset underline if no navigation item is active
        underlineWidth.set(0);
      }
    };

    // Use setTimeout to ensure DOM has fully updated after language change
    // This gives React time to re-render with new text content
    // Double timeout to ensure all refs are set and text has been rendered
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(updateUnderline);
      });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, navigation, underlineLeft, underlineWidth]);

  return (
    <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-8">
      <ul className="relative flex gap-6 lg:gap-8">
        {navigation.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              ref={(el) => {
                tabRefs.current[index] = el;
                // Immediately update underline if this is the active tab and element is mounted
                if (el && isActive) {
                  // Use requestAnimationFrame to ensure layout is complete
                  requestAnimationFrame(() => {
                    if (el.offsetWidth > 0) {
                      underlineLeft.set(el.offsetLeft);
                      underlineWidth.set(el.offsetWidth);
                    }
                  });
                }
              }}
            >
              <Link
                href={item.href as any}
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

      <div className="border-l border-forest-600 pl-6">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
