'use client';

import { useState, useMemo, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { trailJournalData, type JournalDay } from '@/data/trail-journal';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { useTranslations } from '@/lib/i18n-utils';

// Pre-sort days at module level since data is static (avoids sorting on every render)
const sortedDays = [...trailJournalData].sort((a, b) => a.day - b.day);

// Animation timing constant
const ACCORDION_ANIMATION_DURATION = 300;

// Splits paragraphs into chunks and interleaves floating images (alternating left/right)
const renderContentWithImages = (
  content: string,
  images: string[] | undefined,
  dayNumber: number,
  dayTitle: string,
  t: (key: string) => string
) => {
  const paragraphs = content.split('\n\n');

  if (!images || images.length === 0) {
    // No images - just render paragraphs
    return paragraphs.map((paragraph, idx) => (
      <p
        key={idx}
        className="mb-5 text-justify text-base leading-loose text-forest-700 last:mb-0 sm:text-lg sm:leading-loose"
      >
        {paragraph}
      </p>
    ));
  }

  // Calculate where to insert images (roughly evenly spaced)
  const totalParagraphs = paragraphs.length;
  const imagePositions = [
    Math.floor(totalParagraphs * 0.1), // After ~10% of paragraphs
    Math.floor(totalParagraphs * 0.4), // After ~40% of paragraphs
    Math.floor(totalParagraphs * 0.7), // After ~70% of paragraphs
  ];

  const result: React.ReactNode[] = [];
  let imageIndex = 0;

  paragraphs.forEach((paragraph, idx) => {
    // Check if we should insert an image before this paragraph
    if (
      imageIndex < 3 &&
      idx === imagePositions[imageIndex] &&
      images[imageIndex]
    ) {
      const isLeft = imageIndex % 2 === 0; // Alternate: 0=left, 1=right, 2=left

      result.push(
        <div
          key={`img-${imageIndex}`}
          className={`relative mb-4 mt-2 w-1/2 max-w-[280px] overflow-hidden rounded-xl bg-forest-100 shadow-lg ring-1 ring-forest-200/50 sm:max-w-[320px] ${
            isLeft ? 'float-left mr-5 sm:mr-6' : 'float-right ml-5 sm:ml-6'
          }`}
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={images[imageIndex]}
              alt={`${t('day')} ${dayNumber} - ${dayTitle} - ${t('photo')} ${imageIndex + 1}`}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        </div>
      );
      imageIndex++;
    }

    result.push(
      <p
        key={`p-${idx}`}
        className="mb-5 text-justify text-base leading-loose text-forest-700 last:mb-0 sm:text-lg sm:leading-loose"
      >
        {paragraph}
      </p>
    );
  });

  // Add clearfix at the end to prevent float issues
  result.push(<div key="clearfix" className="clear-both" />);

  return result;
};

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    className="h-5 w-5 text-forest-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </motion.svg>
);

const FootstepsIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CalendarDayIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

interface DayAccordionProps {
  day: JournalDay;
  isOpen: boolean;
  onToggle: (dayNumber: number) => void;
}

const DayAccordion = memo(({ day, isOpen, onToggle }: DayAccordionProps) => {
  const { t, locale } = useTranslations('trailJourney');
  const headerRef = useRef<HTMLButtonElement>(null);
  const prevIsOpenRef = useRef(isOpen);

  // Get translated title - always needed for header
  const translatedTitle = t(`days.${day.day}.title`) || day.title;

  // Format date based on locale
  const formattedDate = useMemo(() => {
    if (!day.date) return '';
    const dateLocale = locale === 'en' ? 'en-US' : 'pl-PL';
    return new Date(day.date).toLocaleDateString(dateLocale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [day.date, locale]);

  // Lazy load content only when opened - prevents calling t() for closed accordions
  const translatedContent = useMemo(() => {
    if (!isOpen) return '';
    return t(`days.${day.day}.content`) || day.content;
  }, [isOpen, day.day, t]);

  // Scroll to header when accordion opens (transitioning from closed to open)
  useEffect(() => {
    if (isOpen && !prevIsOpenRef.current && headerRef.current) {
      const timeoutId = setTimeout(() => {
        if (headerRef.current) {
          const rect = headerRef.current.getBoundingClientRect();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const headerOffset = 96; // 6rem (h-16 header + padding)
          const targetPosition = rect.top + scrollTop - headerOffset;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth',
          });
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: day.day * 0.05 }}
      className="overflow-hidden rounded-xl border border-forest-200/50 bg-white/80 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
    >
      {/* Header - Always visible */}
      <button
        ref={headerRef}
        onClick={() => onToggle(day.day)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-forest-50/50 sm:p-5"
        aria-expanded={isOpen}
      >
        <div className="flex flex-1 flex-wrap items-center gap-3 sm:gap-4">
          {/* Day badge */}
          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700 font-display text-lg font-black text-cream shadow-lg sm:h-14 sm:w-14">
            <span className="relative z-10">{day.day}</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-white/10" />
          </div>

          {/* Title and stats */}
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-forest-800 sm:text-xl">
              „{translatedTitle}"
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-forest-600 sm:gap-3">
              {formattedDate && (
                <>
                  <span className="inline-flex items-center gap-1">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">{formattedDate}</span>
                  </span>
                  <span className="text-forest-400">|</span>
                </>
              )}
              <span className="inline-flex items-center gap-1">
                <FootstepsIcon />
                <span className="font-medium">{day.distanceToday} km</span>
              </span>
              <span className="text-forest-400">|</span>
              <span className="text-forest-500">
                {t('total')}: {day.distanceTotal} km
              </span>
            </div>
          </div>
        </div>

        {/* Chevron */}
        <ChevronIcon isOpen={isOpen} />
      </button>

      {/* Content - Expandable - Only rendered when open for lazy loading */}
      <AnimatePresence initial={false}>
        {isOpen && translatedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="border-t border-forest-100 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
              {/* Content with interspersed images */}
              <div className="prose prose-forest max-w-none rounded-xl bg-forest-50/50 p-4 sm:p-6">
                {renderContentWithImages(
                  translatedContent,
                  day.images,
                  day.day,
                  translatedTitle,
                  t
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

DayAccordion.displayName = 'DayAccordion';

export const TrailJourneySection = () => {
  const { t } = useTranslations('trailJourney');
  const [openDay, setOpenDay] = useState<number | null>(null);
  const pendingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pendingTimeoutRef.current) {
        clearTimeout(pendingTimeoutRef.current);
      }
    };
  }, []);

  const handleToggle = useCallback((day: number) => {
    // Clear any pending timeout
    if (pendingTimeoutRef.current) {
      clearTimeout(pendingTimeoutRef.current);
      pendingTimeoutRef.current = null;
    }

    setOpenDay((currentOpenDay) => {
      // If clicking the same day, just close it
      if (currentOpenDay === day) {
        return null;
      }

      // If there's an open day, close it first then open new one after animation
      if (currentOpenDay !== null) {
        pendingTimeoutRef.current = setTimeout(() => {
          setOpenDay(day);
        }, ACCORDION_ANIMATION_DURATION);
        return null;
      }

      // No open day, open immediately
      return day;
    });
  }, []);

  return (
    <section
      id="trail-journey"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gold-500/10 to-gold-600/10"
    >
      {/* Background elements */}
      <VintageMountainsBackground className="opacity-15" />

      <div className="fluid-container relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-12"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-forest-100 px-4 py-2 text-sm font-medium text-forest-700">
              <CalendarDayIcon />
              <span>{t('badge')}</span>
            </div>

            <h2 className="section-title mb-4">
              {t('title')}
              <br />
              <span className="gradient-text-mesh">{t('titleHighlight')}</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-forest-600 sm:text-lg">
              {t('description')}
            </p>
          </motion.div>

          {/* Accordion list */}
          <div className="space-y-3 sm:space-y-4">
            {sortedDays.map((day) => (
              <DayAccordion
                key={day.day}
                day={day}
                isOpen={openDay === day.day}
                onToggle={handleToggle}
              />
            ))}
          </div>

          {/* Note about more days */}
          {trailJournalData.length < 15 && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center text-sm italic text-forest-500"
            >
              {t('moreDays')}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrailJourneySection;
