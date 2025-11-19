'use client';

import { FadeIn } from '@/components/motion';
import type { SudetenRange } from './data';
import { getRankColor, getCountryFlag, isKgpPeak } from './utils';
import { koronaGorPolski } from './data';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useState } from 'react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/motion/MorphingDialog';
import { cn } from '@/lib/utils';

interface MountainCardsViewProps {
  ranges: SudetenRange[];
}

export const MountainCardsView = ({ ranges }: MountainCardsViewProps) => {
  const [selectedRange, setSelectedRange] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {ranges.map((range, index) => {
        const isSelected = selectedRange === range.id;
        const isKgp = isKgpPeak(range.peak, koronaGorPolski);

        if (!isMobile) {
          return (
            <FadeIn
              key={range.id}
              direction="up"
              offset={20}
              duration={0.3}
              delay={index * 0.05}
              inView={true}
            >
              <MorphingDialog
                transition={{
                  type: 'spring',
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <MorphingDialogTrigger className="w-full">
                  <div className="card-vintage group relative cursor-pointer overflow-hidden p-4 transition-all duration-300 md:p-6">
                    <MountainCardContent range={range} isKgp={isKgp} />
                    {/* Desktop Hover Effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-700/5 to-earth-700/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative h-auto w-[500px] rounded-2xl border-2 border-forest-200 bg-cream shadow-vintage-lg">
                    <MorphingDialogClose />
                    <div className="p-6">
                      <MountainCardContent range={range} isKgp={isKgp} />
                      <div className="mt-4 border-t border-forest-200 pt-4">
                        <MountainDetails range={range} />
                      </div>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            </FadeIn>
          );
        }

        return (
          <FadeIn
            key={range.id}
            direction="up"
            offset={20}
            duration={0.3}
            delay={index * 0.05}
            inView={true}
          >
            <div
              className={cn(
                'card-vintage group relative cursor-pointer overflow-hidden p-4 transition-all duration-300 hover:scale-100 hover:shadow-vintage-lg md:p-6',
                isSelected && 'ring-2 ring-accent'
              )}
              onClick={() => setSelectedRange(isSelected ? null : range.id)}
            >
              <MountainCardContent range={range} isKgp={isKgp} />

              {/* Expanded Info (Collapsible) */}
              <div
                className={cn(
                  'grid transition-all duration-300 ease-in-out',
                  isSelected
                    ? 'mt-4 grid-rows-[1fr] border-t border-forest-200 pt-4 opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="relative overflow-hidden">
                  <MountainDetails range={range} />
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};

const MountainDetails = ({ range }: { range: SudetenRange }) => (
  <div className="space-y-2 text-sm text-mountain-500 md:space-y-1">
    <div className="grid grid-cols-2 gap-2 md:block md:space-y-1">
      <div>
        <span className="block font-bold text-forest-700 md:mr-2 md:inline">
          Czeski:
        </span>
        <span className="block md:inline">{range.nameCs}</span>
      </div>
      <div>
        <span className="block font-bold text-forest-700 md:mr-2 md:inline">
          Niemiecki:
        </span>
        <span className="block md:inline">{range.nameDe}</span>
      </div>
      <div>
        <span className="block font-bold text-forest-700 md:mr-2 md:inline">
          Szczyt ({getCountryFlag(range.country)}):
        </span>
        <span className="block md:inline">{range.peakCs}</span>
      </div>
      <div>
        <span className="block font-bold text-forest-700 md:mr-2 md:inline">
          Kraje:
        </span>
        <span className="block md:inline">{range.country}</span>
      </div>
    </div>
  </div>
);

const MountainCardContent = ({
  range,
  isKgp,
}: {
  range: SudetenRange;
  isKgp: boolean;
}) => (
  <div className="flex flex-row items-center md:block">
    {/* Rank Badge - Responsive positioning */}
    <div className="relative mr-4 flex-shrink-0 md:absolute md:right-4 md:top-4 md:mr-0">
      <div
        className={cn(
          'flex size-10 items-center justify-center rounded-full bg-gradient-to-br font-display text-base font-bold text-cream shadow-vintage md:size-8 md:text-sm',
          getRankColor(range.rank)
        )}
      >
        {range.rank}
      </div>

      {isKgp && (
        <div className="absolute -bottom-2 -right-2 flex size-5 items-center justify-center rounded-full bg-accent p-3 text-[10px] font-bold leading-none text-cream shadow-sm md:bottom-auto md:right-10 md:top-0 md:size-8 md:text-xs">
          KGP
        </div>
      )}
    </div>

    {/* Content Container */}
    <div className="flex-grow md:mt-8 md:text-center">
      <div className="hidden text-4xl md:mb-2 md:block">🏔️</div>

      {/* Country Flag - Desktop only */}
      <div className="absolute right-2 top-2 hidden p-1 text-xl md:left-4 md:right-auto md:top-4 md:block md:text-2xl">
        {getCountryFlag(range.country)}
      </div>
      <h3 className="font-display text-base font-bold leading-tight text-forest-800 md:mb-2 md:text-lg">
        {range.name}
      </h3>
      <p className="text-sm font-medium text-mountain-600 md:mb-4 md:font-bold">
        {range.peak}
      </p>
    </div>

    <div className="ml-4 flex flex-shrink-0 flex-col items-end justify-center text-right md:ml-0 md:block md:text-center">
      <span className="text-base font-bold opacity-60 md:hidden">
        {getCountryFlag(range.country)}
      </span>
      <div className="stats-number text-xl text-forest-700 md:text-2xl">
        {range.elevation}m
      </div>
    </div>
  </div>
);
