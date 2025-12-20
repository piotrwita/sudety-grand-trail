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

interface MountainCardProps {
  range: SudetenRange;
  isKgp: boolean;
  isKs: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  isMobile: boolean;
}

const cardBaseStyles =
  'group relative overflow-hidden rounded-2xl border-2 border-earth-200/60 bg-gradient-to-br from-cream via-earth-50/20 to-cream p-3 shadow-vintage-lg transition-all duration-300 hover:scale-[1.02] hover:border-earth-400/60 hover:shadow-vintage-xl sm:p-4 md:p-5 lg:p-6';

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
          isMobile && 'hover:scale-100',
          isSelected && 'border-earth-500/80 ring-2 ring-earth-500/50'
        )}
        onClick={onClick}
      >
        {/* Subtle gradient overlay */}
        <div className="from-earth-500/3 to-earth-600/3 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Hover glow effect - only outside */}
        <div className="via-earth-500/8 pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-earth-400/15 to-earth-600/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
        <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />

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
          {/* Subtle gradient overlay */}
          <div className="from-earth-500/3 to-earth-600/3 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Hover glow effect - only outside */}
          <div className="via-earth-500/8 pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-earth-400/15 to-earth-600/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

          <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative h-auto w-[500px] rounded-2xl border-2 border-earth-300/80 bg-cream shadow-vintage-lg [&_.mountain-image-container]:h-80">
          <div className="p-4 sm:p-5 md:p-6 lg:p-8">
            <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />
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
  }: Omit<MountainCardProps, 'isSelected' | 'onClick' | 'isMobile'>) => (
    <div className="relative flex h-full flex-col">
      <Watermark className="absolute -bottom-6 -right-6 z-0 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.12]" />

      {/* Image Container with Overlays */}
      <div className="relative mb-3 w-full overflow-hidden rounded-xl">
        {range.imageUrl ? (
          <div className="mountain-image-container relative h-40 w-full sm:h-48 md:h-56 lg:h-64">
            <Image
              src={range.imageUrl}
              alt={`${range.name} - ${range.peak}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-earth-100 to-earth-200 text-4xl sm:h-48 md:h-56 lg:h-64">
            🏔️
          </div>
        )}

        {/* Rank Badge and Flag Overlays */}
        <div className="absolute left-3 top-3 flex items-start justify-between sm:left-4 sm:top-4">
          <RankBadge rank={range.rank} isKgp={isKgp} isKs={isKs} />
        </div>
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <CountryBadge country={range.country} />
        </div>
      </div>

      {/* Content Body: Name + Stats */}
      <div className="flex flex-1 flex-col justify-between">
        <MountainInfo range={range} />
        <ElevationStats range={range} />
      </div>
    </div>
  )
);

MountainCardVisuals.displayName = 'MountainCardVisuals';

const CountryBadge = ({ country }: { country: string }) => {
  const codes = country.split('/').map((c) => c.trim());

  return (
    <div className="flex gap-1">
      {codes.map((code) => (
        <span
          key={code}
          className={cn(
            'flex h-6 min-w-[24px] items-center justify-center rounded bg-earth-900/80 px-1.5 text-xs font-bold text-cream shadow-sm sm:h-7 sm:text-sm',
            code === 'PL' && 'bg-red-900/80',
            code === 'CZ' && 'bg-blue-900/80',
            code === 'DE' && 'bg-yellow-900/80'
          )}
        >
          {code}
        </span>
      ))}
    </div>
  );
};

const MountainInfo = memo(({ range }: { range: SudetenRange }) => {
  return (
    <div className="mb-2 text-center">
      <h3 className="font-display text-sm font-bold uppercase leading-tight text-earth-800 sm:text-base md:text-lg md:normal-case lg:text-xl">
        {range.name}
      </h3>
      <p className="truncate text-xs font-medium text-mountain-600 sm:text-sm md:font-bold lg:text-base">
        {range.peak}
      </p>
    </div>
  );
});

MountainInfo.displayName = 'MountainInfo';

const ElevationStats = memo(({ range }: { range: SudetenRange }) => (
  <div className="text-center">
    <div className="stats-number text-lg font-bold text-earth-700 sm:text-xl md:text-2xl lg:text-3xl">
      {range.elevation}M
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

const MountainDetails = memo(({ range }: { range: SudetenRange }) => {
  return (
    <div className="space-y-2 text-sm text-earth-700 md:space-y-1">
      <div className="grid grid-cols-2 gap-2 md:block md:space-y-1">
        <DetailRow label="Czeski" value={range.nameCs} />
        <DetailRow label="Niemiecki" value={range.nameDe} />
        <DetailRow
          label={`Szczyt (${getCountryFlag(range.country)})`}
          value={range.peakCs}
        />
        {range.peakDe && (
          <DetailRow label="Szczyt (niem.)" value={range.peakDe} />
        )}
        <DetailRow label="Kraje" value={range.country} />
      </div>
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

const rankColors = {
  1: 'from-yellow-400 to-yellow-600',
  2: 'from-earth-400 to-earth-600',
  3: 'from-mountain-400 to-mountain-600',
};
export const getRankColor = (rank: number): string => {
  return rankColors[rank as keyof typeof rankColors] || rankColors[3];
};

const RankBadge = memo(
  ({ rank, isKgp, isKs }: { rank: number; isKgp: boolean; isKs: boolean }) => (
    <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
      {/* Rank Number */}
      <div
        className={cn(
          'flex items-center justify-center rounded-full bg-gradient-to-br font-display font-bold text-cream shadow-vintage',
          'size-9 text-sm sm:size-10 sm:text-base md:size-8 md:text-sm lg:size-9 lg:text-base',
          getRankColor(rank)
        )}
      >
        {rank}
      </div>

      {/* Badges - inline row next to rank */}
      {(isKs || isKgp) && (
        <div className="flex shrink-0 gap-1 sm:gap-1.5">
          {isKs && (
            <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-700 to-amber-900 text-[9px] font-black leading-none text-cream shadow-[0_4px_12px_rgba(180,83,9,0.4),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)] ring-2 ring-amber-500/30 sm:size-6 sm:text-[10px]">
              <span className="relative">KS</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-transparent" />
            </div>
          )}
          {isKgp && (
            <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-red-700 text-[9px] font-black leading-none text-cream shadow-[0_4px_12px_rgba(234,88,12,0.4),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)] ring-2 ring-orange-400/30 sm:size-6 sm:text-[10px]">
              <span className="relative">KGP</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent" />
            </div>
          )}
        </div>
      )}
    </div>
  )
);

RankBadge.displayName = 'RankBadge';

export { LazyMountainCard as MountainCard };
