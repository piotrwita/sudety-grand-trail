'use client';

import { cn } from '@/lib/utils';
import { memo, useRef } from 'react';
import { SudetenRange } from './data';
import { Watermark } from '@/components/Watermark';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { FadeIn } from '@/components/motion';
import {
  MorphingDialog,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from '@/components/motion/MorphingDialog';
import { useTranslations } from '@/lib/i18n-utils';

interface MountainCardProps {
  range: SudetenRange;
  isKgp: boolean;
  isKs: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  isMobile: boolean;
}

const cardBaseStyles =
  'group relative overflow-hidden rounded-3xl border-2 border-earth-200/70 bg-gradient-to-br from-cream via-earth-50/30 to-cream p-3 shadow-[0_8px_24px_rgba(107,68,35,0.12),0_4px_8px_rgba(107,68,35,0.08)] transition-[transform,border-color,box-shadow] duration-500 ease-out hover:scale-[1.03] hover:border-earth-500/80 hover:shadow-[0_16px_48px_rgba(107,68,35,0.2),0_8px_16px_rgba(107,68,35,0.15)] hover:-translate-y-1 sm:p-4 md:p-5 lg:p-6';

const LazyMountainCard = memo((props: MountainCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '40px' });

  return (
    <div ref={ref} className="h-full">
      {isInView ? (
        <FadeIn
          direction="up"
          inView={true}
          delay={0.1}
          duration={0.4}
          className="h-full"
          inViewMargin={props.isMobile ? '50px' : '100px'}
        >
          <MountainCard {...props} />
        </FadeIn>
      ) : (
        <MountainCardSkeleton isMobile={props.isMobile} />
      )}
    </div>
  );
});

LazyMountainCard.displayName = 'LazyMountainCard';

const MountainCardSkeleton = ({ isMobile }: { isMobile: boolean }) => (
  <div
    className={cn(
      cardBaseStyles,
      !isMobile && 'h-full hover:scale-100',
      'animate-pulse bg-earth-100/20'
    )}
  >
    <div className="relative mb-3 w-full overflow-hidden rounded-xl">
      <div className="relative h-40 w-full bg-earth-200/30 sm:h-48 md:h-56 lg:h-64"></div>
    </div>
    <div className="flex flex-1 flex-col justify-between">
      <div className="mb-2 text-center">
        <div className="mx-auto mb-2 h-5 w-3/4 rounded bg-earth-200/30"></div>
        <div className="mx-auto h-4 w-1/2 rounded bg-earth-200/30"></div>
      </div>
      <div className="text-center">
        <div className="mx-auto h-8 w-1/4 rounded bg-earth-200/30"></div>
      </div>
    </div>
  </div>
);

const MountainCard = ({
  range,
  isKgp,
  isKs,
  isSelected,
  onClick,
  isMobile,
}: MountainCardProps) => {
  if (isMobile) {
    return (
      <div
        className={cn(
          cardBaseStyles,
          'cursor-pointer',
          isMobile && 'hover:scale-100 hover:-translate-y-0',
          isSelected && 'border-earth-600/90 ring-4 ring-earth-500/40 shadow-[0_20px_60px_rgba(107,68,35,0.25)]'
        )}
        onClick={onClick}
      >
        {/* Enhanced gradient overlay with animation */}
        <div className="from-earth-500/5 via-earth-600/3 to-earth-700/5 absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Enhanced hover glow effect - optimized: single layer with reduced blur */}
        <div className="via-earth-500/10 pointer-events-none absolute -inset-1.5 -z-10 rounded-3xl bg-gradient-to-br from-earth-400/15 to-earth-600/15 opacity-0 blur-lg transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100" />
        
        {/* Shine effect on hover - optimized with will-change */}
        <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 will-change-transform" />
        </div>
        <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} isMobile={true} isSelected={isSelected} />

        {/* Mobile expand indicator - bottom right corner - optimized */}
        {!isSelected && (
          <div className="absolute bottom-3 right-3 z-10 sm:bottom-4 sm:right-4">
            <div className="flex size-8 items-center justify-center rounded-full bg-earth-100/90 shadow-[0_2px_8px_rgba(107,68,35,0.15)] transition-[background-color,box-shadow] duration-300 will-change-[background-color,box-shadow] group-hover:bg-earth-200/90 group-hover:shadow-[0_4px_12px_rgba(107,68,35,0.25)]">
              <svg
                className="size-5 text-earth-600/80 transition-[color,transform] duration-300 will-change-[color,transform] group-hover:text-earth-700 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="Rozwiń"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Expanded Details (Collapsible) */}
        <div
          className={cn(
            'grid transition-all duration-200 ease-in-out',
            isSelected
              ? 'mt-3 grid-rows-[1fr] border-t border-earth-300/60 bg-gradient-to-r from-transparent via-earth-100/30 to-transparent pt-3 opacity-100 sm:mt-4 sm:pt-4'
              : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <div className="relative overflow-hidden">
            <MountainDetails range={range} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger className="w-full text-left">
        <div className={cn(cardBaseStyles, 'h-full')}>
          {/* Enhanced gradient overlay with animation */}
          <div className="from-earth-500/5 via-earth-600/3 to-earth-700/5 absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Enhanced hover glow effect - optimized: single layer with reduced blur */}
          <div className="via-earth-500/10 pointer-events-none absolute -inset-1.5 -z-10 rounded-3xl bg-gradient-to-br from-earth-400/15 to-earth-600/15 opacity-0 blur-lg transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100" />
          
          {/* Shine effect on hover - optimized with will-change */}
          <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 will-change-transform" />
          </div>

          <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} isMobile={false} isSelected={false} />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative h-auto w-[500px] rounded-3xl border-2 border-earth-400/90 bg-cream shadow-[0_20px_60px_rgba(107,68,35,0.25),0_8px_16px_rgba(107,68,35,0.15)] [&_.mountain-image-container]:h-80">
          <div className="p-4 sm:p-5 md:p-6 lg:p-8">
            <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} isMobile={false} isSelected={false} />
            <div className="mt-4 border-t border-earth-300/60 pt-4">
              <MountainDetails range={range} />
            </div>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

const MountainCardVisuals = memo(
  ({
    range,
    isKgp,
    isKs,
    isMobile = false,
    isSelected = false,
  }: Omit<MountainCardProps, 'onClick'>) => {
    return (
      <div className="relative flex h-full flex-col">
      <Watermark className="absolute -bottom-6 -right-6 z-0 opacity-[0.08] transition-all duration-500 group-hover:opacity-[0.15] group-hover:scale-105" />

      {/* Image Container with Enhanced Overlays */}
      <div className="relative mb-4 w-full overflow-hidden rounded-2xl shadow-[0_4px_12px_rgba(107,68,35,0.15)] transition-[box-shadow,transform] duration-500 will-change-[box-shadow,transform] group-hover:shadow-[0_8px_24px_rgba(107,68,35,0.25)] group-hover:scale-[1.02]">
        {range.imageUrl ? (
          <div className="mountain-image-container relative h-40 w-full overflow-hidden sm:h-48 md:h-56 lg:h-64">
            <Image
              src={range.imageUrl}
              alt={`${range.rangeName} - ${range.peakName}`}
              fill
              className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-earth-900/20 to-transparent transition-opacity duration-500 group-hover:from-earth-900/80" />
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-earth-900/20" />
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-earth-100 via-earth-100 to-earth-200 text-5xl transition-all duration-500 group-hover:from-earth-200 group-hover:to-earth-300 sm:h-48 md:h-56 lg:h-64">
            🏔️
          </div>
        )}

        {/* Rank Badge and Flag Overlays with enhanced styling */}
        <div className="absolute left-3 top-3 flex items-start justify-between transition-transform duration-500 group-hover:scale-105 sm:left-4 sm:top-4">
          <RankBadge rank={range.rank} isKgp={isKgp} isKs={isKs} />
        </div>
        <div className="absolute right-3 top-3 transition-transform duration-500 group-hover:scale-105 sm:right-4 sm:top-4">
          <CountryBadge country={range.country} />
        </div>
      </div>

      {/* Content Body: Name + Stats */}
      <div className="flex flex-1 flex-col justify-between">
        <MountainInfo range={range} />
        <ElevationStats range={range} />
      </div>
    </div>
    );
  }
);

MountainCardVisuals.displayName = 'MountainCardVisuals';

const CountryBadge = ({ country }: { country: string }) => {
  const codes = country.split('/').map((c) => c.trim());

  const getFlagForCode = (code: string): string => {
    if (code === 'PL') return '🇵🇱';
    if (code === 'CZ') return '🇨🇿';
    if (code === 'DE') return '🇩🇪';
    return '🏔️';
  };

  const getCountryStyle = (code: string) => {
    switch (code) {
      case 'PL':
        return {
          gradient: 'from-red-600 via-red-700 to-red-800',
          shadow: 'shadow-[0_6px_20px_rgba(220,38,38,0.5),0_2px_8px_rgba(185,28,28,0.4),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(153,27,27,0.4)]',
          ring: 'ring-2 ring-red-400/50',
          glow: 'bg-red-500/40',
        };
      case 'CZ':
        return {
          gradient: 'from-blue-600 via-blue-700 to-blue-800',
          shadow: 'shadow-[0_6px_20px_rgba(37,99,235,0.5),0_2px_8px_rgba(29,78,216,0.4),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(30,64,175,0.4)]',
          ring: 'ring-2 ring-blue-400/50',
          glow: 'bg-blue-500/40',
        };
      case 'DE':
        return {
          gradient: 'from-yellow-500 via-yellow-600 to-yellow-700',
          shadow: 'shadow-[0_6px_20px_rgba(234,179,8,0.5),0_2px_8px_rgba(202,138,4,0.4),inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(161,98,7,0.4)]',
          ring: 'ring-2 ring-yellow-400/50',
          glow: 'bg-yellow-500/40',
        };
      default:
        return {
          gradient: 'from-earth-600 via-earth-700 to-earth-800',
          shadow: 'shadow-[0_6px_20px_rgba(107,68,35,0.5),0_2px_8px_rgba(91,58,31,0.4),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(77,50,27,0.4)]',
          ring: 'ring-2 ring-earth-400/50',
          glow: 'bg-earth-500/40',
        };
    }
  };

  return (
    <div className="flex gap-1.5">
      {codes.map((code) => {
        const style = getCountryStyle(code);
        return (
          <div
            key={code}
            className={cn(
              'relative flex h-7 min-w-[28px] items-center justify-center rounded-lg bg-gradient-to-br font-bold text-white shadow-[0_6px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-[transform,box-shadow] duration-500 will-change-[transform,box-shadow] group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] sm:h-8 sm:min-w-[32px] sm:text-sm',
              style.gradient,
              style.shadow,
              style.ring
            )}
          >
            {/* Outer glow ring on hover */}
            <div className={cn(
              'absolute -inset-1 rounded-lg opacity-0 blur-sm transition-opacity duration-500 will-change-opacity group-hover:opacity-100',
              style.glow
            )} />
            
            {/* Inner shine effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/30 via-white/15 to-transparent opacity-50 transition-opacity duration-300 will-change-opacity group-hover:opacity-75" />
            
            {/* Top highlight */}
            <div className="absolute top-0 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-lg bg-gradient-to-b from-white/40 to-transparent opacity-40" />
            
            {/* Flag emoji with shadow */}
            <span className="relative z-10 text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] sm:text-lg">
              {getFlagForCode(code)}
            </span>
            
            {/* Animated shine sweep on hover - optimized */}
            <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out will-change-transform" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MountainInfo = memo(({ range }: { range: SudetenRange }) => {
  return (
    <div className="mb-3 text-center transition-transform duration-500 will-change-transform group-hover:translate-y-[-2px]">
      <h3 className="font-display text-sm font-bold uppercase leading-tight text-earth-900 drop-shadow-sm transition-color duration-300 will-change-[color] group-hover:text-earth-950 sm:text-base md:text-lg md:normal-case lg:text-xl">
        {range.rangeName}
      </h3>
      <p className="mt-1 truncate text-xs font-semibold text-mountain-700 transition-color duration-300 will-change-[color] group-hover:text-mountain-800 sm:text-sm md:font-bold lg:text-base">
        {range.peakName}
      </p>
    </div>
  );
});

MountainInfo.displayName = 'MountainInfo';

const ElevationStats = memo(({ range }: { range: SudetenRange }) => (
  <div className="text-center transition-transform duration-500 will-change-transform group-hover:scale-105">
    <div className="stats-number relative inline-block text-lg font-bold text-earth-800 drop-shadow-sm transition-[color,filter] duration-300 will-change-[color,filter] group-hover:text-earth-900 group-hover:drop-shadow-md sm:text-xl md:text-2xl lg:text-3xl">
      <span className="relative z-10">{range.peakHeight}M</span>
      {/* Subtle glow effect behind elevation */}
      <span className="absolute inset-0 text-earth-600/30 blur-sm transition-opacity duration-300 will-change-opacity group-hover:opacity-50">
        {range.peakHeight}M
      </span>
    </div>
  </div>
));

ElevationStats.displayName = 'ElevationStats';

const getCountryFlag = (country: string): string => {
  if (country.includes('PL')) return '🇵🇱';
  if (country.includes('CZ')) return '🇨🇿';
  if (country.includes('DE')) return '🇩🇪';
  return '🏔️';
};

// Helper function to normalize names for comparison (removes diacritics and converts to lowercase)
const normalizeName = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // removes diacritics
    .trim();
};

// Check if two names are similar (after normalization)
const namesAreSimilar = (name1: string, name2: string): boolean => {
  return normalizeName(name1) === normalizeName(name2);
};

const MountainDetails = memo(({ range }: { range: SudetenRange }) => {
  const { t } = useTranslations('sudetenCrown');
  
  // Helper function to get country flags as string
  const getCountryFlagsString = (country: string): string => {
    const codes = country.split('/').map((c) => c.trim());
    const flags = codes.map((code) => {
      if (code === 'PL') return '🇵🇱';
      if (code === 'CZ') return '🇨🇿';
      if (code === 'DE') return '🇩🇪';
      return '🏔️';
    });
    return flags.join(' ');
  };

  // Check if name contains Czech diacritics (ě, ř, ů, á, é, í, ó, ú, ý, č, ď, ň, š, ť, ž)
  const containsCzechDiacritics = (name: string): boolean => {
    const czechChars = /[ěřůáéíóúýčďňšťžĚŘŮÁÉÍÓÚÝČĎŇŠŤŽ]/;
    return czechChars.test(name);
  };

  // Check if name contains Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż)
  const containsPolishDiacritics = (name: string): boolean => {
    const polishChars = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;
    return polishChars.test(name);
  };

  // Only show foreign names if they exist and differ from Polish names
  // For peak names: also show if one has Czech diacritics and the other doesn't (e.g., Jeřáb vs Jerab)
  const shouldShowForeignRangeName = 
    range.foreignRangeName && 
    !namesAreSimilar(range.rangeName, range.foreignRangeName);
  
  const shouldShowForeignPeakName = 
    range.foreignPeakName && 
    (!namesAreSimilar(range.peakName, range.foreignPeakName) ||
     (containsCzechDiacritics(range.peakName) && !containsCzechDiacritics(range.foreignPeakName)) ||
     (!containsCzechDiacritics(range.peakName) && containsCzechDiacritics(range.foreignPeakName)));

  // Determine if foreignPeakName is Polish:
  // If foreignPeakName contains Czech diacritics, it's Czech (not Polish)
  // If foreignPeakName contains Polish diacritics, it's Polish
  // If peakName contains Czech diacritics, foreignPeakName is Polish
  // If peak is in Czech Republic only, foreignPeakName is Polish (unless peakName contains Polish diacritics)
  const isForeignPeakNamePolish = shouldShowForeignPeakName && 
    range.foreignPeakName &&
    !containsCzechDiacritics(range.foreignPeakName!) && (
      containsPolishDiacritics(range.foreignPeakName!) || 
      containsCzechDiacritics(range.peakName) ||
      (range.country === 'CZ' && !containsPolishDiacritics(range.peakName) && !containsCzechDiacritics(range.peakName))
    );

  // Special handling for Góry Łużyckie Luž (id: 35)
  const isLuzSpecialCase = range.id === 35 && 
    range.additionalRangeNameGerman && 
    range.additionalRangeNameCzech && 
    range.additionalPeakNameCzech && 
    range.additionalPeakNameGerman;

  return (
    <div className="space-y-3 text-sm text-earth-700">
      {/* Names Section */}
      <div className="grid grid-cols-2 gap-2 md:block md:space-y-1">
        {isLuzSpecialCase ? (
          <>
            <DetailRow label={t('rangeNameCzech')} value={range.additionalRangeNameCzech!} />
            <DetailRow label={t('rangeNameGerman')} value={range.additionalRangeNameGerman!} />
            <DetailRow label={t('peakName')} value={range.additionalPeakNameCzech!} />
            <DetailRow label={t('peakNameGerman')} value={range.additionalPeakNameGerman!} />
          </>
        ) : (
          <>
            {shouldShowForeignRangeName && (
              <DetailRow label={t('rangeNameCzech')} value={range.foreignRangeName!} />
            )}
            {shouldShowForeignPeakName && (
              <DetailRow 
                label={isForeignPeakNamePolish ? t('peakNamePolish') : t('peakNameCzech')} 
                value={range.foreignPeakName!} 
              />
            )}
          </>
        )}
        <DetailRow 
          label={t('countries')} 
          value={getCountryFlagsString(range.country)} 
        />
      </div>

      {/* Description Section */}
      {range.description && (
        <div className="mt-4 border-t border-earth-300/60 pt-3">
          <div className="space-y-1">
            <span className="block font-bold text-earth-800">
              {t('description')}:
            </span>
            <p className="whitespace-pre-line text-earth-700 leading-relaxed">
              {t(`peaks.${range.id}.description`)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

MountainDetails.displayName = 'MountainDetails';

const DetailRow = memo(({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="block font-bold text-earth-800 md:mr-2 md:inline">
      {label}:
    </span>
    <span className="block text-earth-700 md:inline">{value}</span>
  </div>
));

DetailRow.displayName = 'DetailRow';

// Enhanced rank colors with richer gradients
type RankStyle = {
  gradient: string;
  shadow: string;
  ring: string;
  glow: string;
};

const rankColors: Record<1 | 2 | 3 | 'default', RankStyle> = {
  1: {
    gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
    shadow: 'shadow-[0_6px_20px_rgba(234,179,8,0.5),0_2px_8px_rgba(234,179,8,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(161,98,7,0.4)]',
    ring: 'ring-2 ring-yellow-300/50',
    glow: 'shadow-[0_0_20px_rgba(234,179,8,0.6)]',
  },
  2: {
    gradient: 'from-gray-200 via-gray-300 to-gray-400',
    shadow: 'shadow-[0_6px_20px_rgba(156,163,175,0.4),0_2px_8px_rgba(107,114,128,0.3),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(75,85,99,0.3)]',
    ring: 'ring-2 ring-gray-200/50',
    glow: 'shadow-[0_0_20px_rgba(156,163,175,0.5)]',
  },
  3: {
    gradient: 'from-amber-700 via-amber-800 to-amber-900',
    shadow: 'shadow-[0_6px_20px_rgba(180,83,9,0.5),0_2px_8px_rgba(146,64,14,0.3),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(120,53,15,0.4)]',
    ring: 'ring-2 ring-amber-600/50',
    glow: 'shadow-[0_0_20px_rgba(180,83,9,0.6)]',
  },
  default: {
    gradient: 'from-forest-500 via-forest-600 to-forest-700',
    shadow: 'shadow-[0_6px_20px_rgba(47,79,62,0.4),0_2px_8px_rgba(34,52,43,0.3),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(34,52,43,0.4)]',
    ring: 'ring-2 ring-forest-400/50',
    glow: 'shadow-[0_0_20px_rgba(47,79,62,0.5)]',
  },
};

export const getRankStyle = (rank: number): RankStyle => {
  if (rank === 1) return rankColors[1];
  if (rank === 2) return rankColors[2];
  if (rank === 3) return rankColors[3];
  return rankColors.default;
};

const RankBadge = memo(
  ({ rank, isKgp, isKs }: { rank: number; isKgp: boolean; isKs: boolean }) => {
    const rankStyle = getRankStyle(rank);
    
    return (
      <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
        {/* Rank Number with premium medal-style design */}
        <div
          className={cn(
            'relative flex items-center justify-center rounded-full bg-gradient-to-br font-display font-bold text-white transition-transform duration-500 will-change-transform group-hover:scale-115',
            'size-11 text-lg sm:size-12 sm:text-xl md:size-11 md:text-lg lg:size-12 lg:text-xl',
            rankStyle.gradient,
            rankStyle.shadow,
            rankStyle.ring
          )}
        >
          {/* Outer glow ring on hover */}
          <div className={cn(
            'absolute -inset-1 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-sm',
            rank === 1 && 'bg-yellow-400/40',
            rank === 2 && 'bg-gray-300/40',
            rank === 3 && 'bg-amber-700/40',
            rank > 3 && 'bg-forest-500/40'
          )} />
          
          {/* Inner shine effect - always visible but stronger on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-60 transition-opacity duration-300 will-change-opacity group-hover:opacity-100" />
          
          {/* Top highlight */}
          <div className="absolute top-0 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-50" />
          
          {/* Number with text shadow for depth */}
          <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{rank}</span>
          
          {/* Animated shine sweep on hover - optimized */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out will-change-transform" />
          </div>
        </div>

      {/* Badges - inline row next to rank with premium medal-style design */}
      {(isKs || isKgp) && (
        <div className="flex shrink-0 gap-1.5 sm:gap-2">
          {isKs && (
            <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-[9px] font-black leading-none text-white shadow-[0_6px_20px_rgba(180,83,9,0.6),0_2px_8px_rgba(146,64,14,0.4),inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(120,53,15,0.4)] ring-2 ring-amber-500/50 transition-[transform,box-shadow] duration-500 will-change-[transform,box-shadow] group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(180,83,9,0.7),0_2px_8px_rgba(146,64,14,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] sm:size-6 sm:text-[10px]">
              {/* Outer glow ring on hover */}
              <div className="absolute -inset-1 rounded-full bg-amber-500/40 opacity-0 blur-sm transition-opacity duration-500 will-change-opacity group-hover:opacity-100" />
              
              {/* Inner shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-60 transition-opacity duration-300 will-change-opacity group-hover:opacity-100" />
              
              {/* Top highlight */}
              <div className="absolute top-0 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-50" />
              
              {/* Text with shadow - centered */}
              <span className="relative z-10 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">KS</span>
              
              {/* Animated shine sweep on hover - optimized */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out will-change-transform" />
              </div>
            </div>
          )}
          {isKgp && (
            <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 text-[9px] font-black leading-none text-white shadow-[0_6px_20px_rgba(234,88,12,0.6),0_2px_8px_rgba(194,65,12,0.4),inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(154,52,18,0.4)] ring-2 ring-orange-400/50 transition-[transform,box-shadow] duration-500 will-change-[transform,box-shadow] group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(234,88,12,0.7),0_2px_8px_rgba(194,65,12,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] sm:size-6 sm:text-[10px]">
              {/* Outer glow ring on hover */}
              <div className="absolute -inset-1 rounded-full bg-orange-400/40 opacity-0 blur-sm transition-opacity duration-500 will-change-opacity group-hover:opacity-100" />
              
              {/* Inner shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-60 transition-opacity duration-300 will-change-opacity group-hover:opacity-100" />
              
              {/* Top highlight */}
              <div className="absolute top-0 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-50" />
              
              {/* Text with shadow - centered */}
              <span className="relative z-10 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">KGP</span>
              
              {/* Animated shine sweep on hover - optimized */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-opacity duration-500 will-change-[opacity] group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out will-change-transform" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    );
  }
);

RankBadge.displayName = 'RankBadge';

export { LazyMountainCard as MountainCard };
