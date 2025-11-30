'use client';

import { useState, useMemo } from 'react';
import { FadeIn } from '@/components/motion';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogContainer,
} from '@/components/motion/MorphingDialog';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useDebounce } from '@/hooks/useDebounce';
import { cn } from '@/lib/utils';
import { getRankColor, getCountryFlag, isKgpPeak } from './utils';
import { koronaGorPolski, type SudetenRange } from './data';
import { CheckIcon } from '@/components/icons';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { Watermark } from '@/components/Watermark';
import Image from 'next/image';

interface MountainCardsViewProps {
  ranges: SudetenRange[];
}

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  showKgpOnly: boolean;
  onToggleKgp: () => void;
  showKsOnly: boolean;
  onToggleKs: () => void;
}

interface MountainCardProps {
  range: SudetenRange;
  isKgp: boolean;
  isKs: boolean;
}

interface MobileMountainCardProps extends MountainCardProps {
  isSelected: boolean;
  onClick: () => void;
}

export const MountainCardsView = ({ ranges }: MountainCardsViewProps) => {
  // Controls which card is expanded on mobile
  const [selectedRangeId, setSelectedRangeId] = useState<number | null>(null);

  // Filter controls
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [showKgpOnly, setShowKgpOnly] = useState(false);
  const [showKsOnly, setShowKsOnly] = useState(false);

  const isMobile = useIsMobile();

  const filteredRanges = useMemo(() => {
    return ranges.filter((range) => {
      const searchLower = debouncedSearchTerm.toLowerCase();

      // Match against name, peak name, or country
      const matchesSearch =
        debouncedSearchTerm === '' ||
        range.name.toLowerCase().includes(searchLower) ||
        range.peak.toLowerCase().includes(searchLower) ||
        range.country.toLowerCase().includes(searchLower);

      // Check KS and KGP status
      const isKs = range.isKs ?? false;
      const isKgp = range.isKgp ?? isKgpPeak(range.peak, koronaGorPolski);
      
      // Apply filters - if filter is active, show only matching peaks
      const matchesKs = !showKsOnly || isKs;
      const matchesKgp = !showKgpOnly || isKgp;

      return matchesSearch && matchesKs && matchesKgp;
    });
  }, [ranges, debouncedSearchTerm, showKgpOnly, showKsOnly]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setShowKgpOnly(false);
    setShowKsOnly(false);
  };

  const handleMobileCardClick = (rangeId: number) => {
    // Toggle expansion: close if open, open if closed
    setSelectedRangeId(selectedRangeId === rangeId ? null : rangeId);
  };

  return (
    <div className="space-y-8">
      {/* Top Filters Section */}
      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showKgpOnly={showKgpOnly}
        onToggleKgp={() => setShowKgpOnly(!showKgpOnly)}
        showKsOnly={showKsOnly}
        onToggleKs={() => setShowKsOnly(!showKsOnly)}
      />

      {/* Cards Grid */}
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRanges.map((range) => {
          // Use isKs and isKgp fields directly from data
          const isKs = range.isKs ?? false;
          const isKgp = range.isKgp ?? isKgpPeak(range.peak, koronaGorPolski);

          // Mobile View: Expandable Cards
          if (isMobile) {
            return (
              <MobileMountainCard
                key={range.id}
                range={range}
                isKgp={isKgp}
                isKs={isKs}
                isSelected={selectedRangeId === range.id}
                onClick={() => handleMobileCardClick(range.id)}
              />
            );
          }

          return (
            <DesktopMountainCard key={range.id} range={range} isKgp={isKgp} isKs={isKs} />
          );
        })}
      </div>

      {/* Empty State */}
      {filteredRanges.length === 0 && (
        <EmptyState onClearFilters={handleClearFilters} />
      )}
    </div>
  );
};

const FilterBar = ({
  searchTerm,
  onSearchChange,
  showKgpOnly,
  onToggleKgp,
  showKsOnly,
  onToggleKs,
}: FilterBarProps) => {
  return (
    <FadeIn
      direction="up"
      duration={0.5}
      className="sticky top-20 z-30 -mx-4 bg-forest-50/80 p-4 md:static md:mx-0 md:bg-transparent md:p-0"
    >
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest-400">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Szukaj pasma, szczytu..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border-2 border-forest-200 bg-cream py-3 pl-12 pr-4 text-forest-800 shadow-sm transition-all placeholder:text-forest-400 hover:border-forest-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {/* KS Filter Toggle */}
          <button
            onClick={onToggleKs}
            className={cn(
              'group flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all md:px-6',
              showKsOnly
                ? 'border-amber-600 bg-gradient-to-br from-amber-700 to-amber-900 text-cream shadow-vintage'
                : 'border-forest-200 bg-cream text-forest-700 hover:border-forest-300 hover:bg-forest-50'
            )}
          >
            <span>Korona Sudetów</span>
            <div
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
                showKsOnly
                  ? 'border-cream bg-cream text-yellow-600'
                  : 'border-forest-300 group-hover:border-forest-400'
              )}
            >
              {showKsOnly && <CheckIcon />}
            </div>
          </button>

          {/* KGP Filter Toggle */}
          <button
            onClick={onToggleKgp}
            className={cn(
              'group flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all md:px-6',
              showKgpOnly
                ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-orange-700 text-cream shadow-vintage'
                : 'border-forest-200 bg-cream text-forest-700 hover:border-forest-300 hover:bg-forest-50'
            )}
          >
            <span>Korona Gór Polski</span>
            <div
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
                showKgpOnly
                  ? 'border-cream bg-cream text-accent'
                  : 'border-forest-300 group-hover:border-forest-400'
              )}
            >
              {showKgpOnly && <CheckIcon />}
            </div>
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

const MobileMountainCard = ({
  range,
  isKgp,
  isKs,
  isSelected,
  onClick,
}: MobileMountainCardProps) => {
  return (
    <FadeIn direction="up" offset={20} duration={0.3} delay={0.1} inView={true}>
      <div
        className={cn(
          'group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-forest-200/60 bg-gradient-to-br from-cream via-forest-50/20 to-cream p-4 shadow-vintage-lg transition-all duration-300 hover:scale-[1.02] hover:border-forest-400/60 hover:shadow-vintage-xl md:p-6',
          isSelected && 'ring-2 ring-forest-500/50 border-forest-500/80'
        )}
        onClick={onClick}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-500/3 via-transparent to-forest-600/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Hover glow effect - only outside */}
        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-forest-400/15 via-forest-500/8 to-forest-600/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100 -z-10" />
        <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />

        {/* Expanded Details (Collapsible) */}
        <div
          className={cn(
            'grid transition-all duration-300 ease-in-out',
            isSelected
              ? 'mt-4 grid-rows-[1fr] border-t border-forest-300/60 bg-gradient-to-r from-transparent via-forest-100/30 to-transparent pt-4 opacity-100'
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
};

const DesktopMountainCard = ({ range, isKgp, isKs }: MountainCardProps) => {
  return (
    <FadeIn direction="up" offset={20} duration={0.3} delay={0.1} inView>
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <MorphingDialogTrigger className="w-full text-left">
          <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-forest-200/60 bg-gradient-to-br from-cream via-forest-50/20 to-cream p-4 shadow-vintage-lg transition-all duration-300 hover:scale-[1.02] hover:border-forest-400/60 hover:shadow-vintage-xl md:p-6">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-500/3 via-transparent to-forest-600/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Hover glow effect - only outside */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-forest-400/15 via-forest-500/8 to-forest-600/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100 -z-10" />
            
            <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative h-auto w-[500px] rounded-2xl border-2 border-forest-300/80 bg-cream shadow-vintage-lg [&_.mountain-image-container]:h-64">
            <div className="p-6">
              <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />
              <div className="mt-4 border-t border-forest-300/60 pt-4">
                <MountainDetails range={range} />
              </div>
            </div>
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </FadeIn>
  );
};

const MountainCardVisuals = ({ range, isKgp, isKs }: MountainCardProps) => (
  <div className="relative flex h-full items-center md:block">
    <Watermark className="absolute -bottom-6 -right-6 z-0 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.12]" />

    {/* Rank Badge - Left on mobile, Top Left on Desktop */}
    <div className="mr-4 flex-shrink-0 md:mb-4 md:mr-0 md:flex md:items-start md:justify-between">
      <RankBadge rank={range.rank} isKgp={isKgp} isKs={isKs} />
      {/* Desktop Flag */}
      <div className="hidden text-2xl md:block">
        {getCountryFlag(range.country)}
      </div>
    </div>

    {/* Content Body: Name + Stats */}
    <div className="flex min-w-0 flex-grow justify-between md:block md:text-center">
      <MountainInfo range={range} />
      <ElevationStats range={range} />
    </div>
  </div>
);

const MountainInfo = ({ range }: { range: SudetenRange }) => {
  const imageUrl = range.imageUrl;

  return (
    <div className="flex min-w-0 flex-col justify-center md:block">
      {imageUrl ? (
        <div className="mountain-image-container relative hidden h-32 w-full overflow-hidden rounded-lg md:mb-3 md:block [&_img]:transition-transform [&_img]:duration-300 group-hover:[&_img]:scale-105">
          <Image
            src={imageUrl}
            alt={`${range.name} - ${range.peak}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={range.id <= 3}
          />
        </div>
      ) : (
        <div className="hidden text-4xl md:mb-2 md:block">🏔️</div>
      )}
      <h3 className="font-display text-base font-bold uppercase leading-tight text-forest-800 md:mb-2 md:text-lg md:normal-case">
        {range.name}
      </h3>
      <p className="truncate text-sm font-medium text-mountain-600 md:mb-4 md:font-bold">
        {range.peak}
      </p>
    </div>
  );
};

const ElevationStats = ({ range }: { range: SudetenRange }) => (
  <div className="ml-4 flex flex-shrink-0 flex-col items-end justify-center text-right md:ml-0 md:block md:text-center">
    {/* Mobile Flag */}
    <span className="mb-0.5 text-xs font-bold uppercase text-forest-400 md:hidden">
      {range.country}
    </span>
    <div className="stats-number text-xl font-bold text-forest-700 md:text-2xl">
      {range.elevation}M
    </div>
  </div>
);

const MountainDetails = ({ range }: { range: SudetenRange }) => (
  <div className="space-y-2 text-sm text-forest-700 md:space-y-1">
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

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="block font-bold text-forest-800 md:mr-2 md:inline">
      {label}:
    </span>
    <span className="block text-forest-700 md:inline">{value}</span>
  </div>
);

const RankBadge = ({ rank, isKgp, isKs }: { rank: number; isKgp: boolean; isKs: boolean }) => (
  <div className="relative flex-shrink-0">
    <div
      className={cn(
        'flex size-10 items-center justify-center rounded-full bg-gradient-to-br font-display text-base font-bold text-cream shadow-vintage md:size-8 md:text-sm',
        getRankColor(rank)
      )}
    >
      {rank}
    </div>

    {/* Badge container - position badges relative to rank badge */}
    <div className="absolute -bottom-0.5 -right-0.5 flex shrink-0 gap-1 md:left-full md:top-0 md:ml-2 md:flex-row md:gap-1.5">
      {isKs && (
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-700 to-amber-900 text-[10px] font-black leading-none text-cream shadow-[0_4px_12px_rgba(180,83,9,0.4),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)] ring-2 ring-amber-500/30 md:h-7 md:w-7 md:text-[8px]">
          <span className="relative z-10">KS</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-transparent" />
        </div>
      )}
      {isKgp && (
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-red-700 text-[10px] font-black leading-none text-cream shadow-[0_4px_12px_rgba(234,88,12,0.4),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)] ring-2 ring-orange-400/30 md:h-7 md:w-7 md:text-[8px]">
          <span className="relative z-10">KGP</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent" />
        </div>
      )}
    </div>
  </div>
);

const EmptyState = ({ onClearFilters }: { onClearFilters: () => void }) => (
  <div className="py-12 text-center text-mountain-500">
    <p className="text-lg">Nie znaleziono pasm spełniających kryteria.</p>
    <button
      onClick={onClearFilters}
      className="mt-4 text-accent-hover hover:underline"
    >
      Wyczyść filtry
    </button>
  </div>
);
