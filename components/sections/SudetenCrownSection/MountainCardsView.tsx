'use client';

import { useReducer, useMemo, useCallback, memo } from 'react';
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
  isSelected?: boolean;
  onClick?: () => void;
  isMobile: boolean;
}

// Reducer state type
type FilterState = {
  selectedRangeId: number | null;
  searchTerm: string;
  showKgpOnly: boolean;
  showKsOnly: boolean;
};

const FILTER_ACTIONS = {
  SET_SEARCH: 'SET_SEARCH',
  TOGGLE_KGP: 'TOGGLE_KGP',
  TOGGLE_KS: 'TOGGLE_KS',
  SET_SELECTED_RANGE: 'SET_SELECTED_RANGE',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
} as const;

// Reducer action types
type FilterAction =
  | { type: typeof FILTER_ACTIONS.SET_SEARCH; payload: string }
  | { type: typeof FILTER_ACTIONS.TOGGLE_KGP }
  | { type: typeof FILTER_ACTIONS.TOGGLE_KS }
  | { type: typeof FILTER_ACTIONS.SET_SELECTED_RANGE; payload: number | null }
  | { type: typeof FILTER_ACTIONS.CLEAR_FILTERS };

// Reducer function
function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case FILTER_ACTIONS.SET_SEARCH:
      return { ...state, searchTerm: action.payload };
    case FILTER_ACTIONS.TOGGLE_KGP:
      return { ...state, showKgpOnly: !state.showKgpOnly };
    case FILTER_ACTIONS.TOGGLE_KS:
      return { ...state, showKsOnly: !state.showKsOnly };
    case FILTER_ACTIONS.SET_SELECTED_RANGE:
      return { ...state, selectedRangeId: action.payload };
    case FILTER_ACTIONS.CLEAR_FILTERS:
      return {
        ...state,
        searchTerm: '',
        showKgpOnly: false,
        showKsOnly: false,
        selectedRangeId: null,
      };
    default:
      return state;
  }
}

const initialState: FilterState = {
  selectedRangeId: null,
  searchTerm: '',
  showKgpOnly: false,
  showKsOnly: false,
};

export const MountainCardsView = ({ ranges }: MountainCardsViewProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { selectedRangeId, searchTerm, showKgpOnly, showKsOnly } = state;
  const isMobile = useIsMobile();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Precompute KGP status for all ranges once
  const rangesWithKgp = useMemo(() => {
    return ranges.map((range) => ({
      ...range,
      computedIsKgp: range.isKgp ?? isKgpPeak(range.peak, koronaGorPolski),
      computedIsKs: range.isKs ?? false,
    }));
  }, [ranges]);

  const filteredRanges = useMemo(() => {
    return rangesWithKgp.filter((range) => {
      const searchLower = debouncedSearchTerm.toLowerCase();

      // Match against name, peak name, or country
      const matchesSearch =
        debouncedSearchTerm === '' ||
        range.name.toLowerCase().includes(searchLower) ||
        range.peak.toLowerCase().includes(searchLower) ||
        range.country.toLowerCase().includes(searchLower);

      // Apply filters - if filter is active, show only matching peaks
      const matchesKs = !showKsOnly || range.computedIsKs;
      const matchesKgp = !showKgpOnly || range.computedIsKgp;

      return matchesSearch && matchesKs && matchesKgp;
    });
  }, [rangesWithKgp, debouncedSearchTerm, showKgpOnly, showKsOnly]);

  const handleClearFilters = () => {
    dispatch({ type: FILTER_ACTIONS.CLEAR_FILTERS });
  };

  const handleMobileCardClick = useCallback(
    (rangeId: number) => {
      // Toggle expansion: close if open, open if closed
      const newSelectedId = selectedRangeId === rangeId ? null : rangeId;
      dispatch({
        type: FILTER_ACTIONS.SET_SELECTED_RANGE,
        payload: newSelectedId,
      });
    },
    [selectedRangeId]
  );

  return (
    <div className="space-y-8">
      {/* Top Filters Section */}
      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={(value) =>
          dispatch({ type: FILTER_ACTIONS.SET_SEARCH, payload: value })
        }
        showKgpOnly={showKgpOnly}
        onToggleKgp={() => dispatch({ type: FILTER_ACTIONS.TOGGLE_KGP })}
        showKsOnly={showKsOnly}
        onToggleKs={() => dispatch({ type: FILTER_ACTIONS.TOGGLE_KS })}
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-6">
        {filteredRanges.map((range, index) => (
          <FadeIn
            key={index}
            direction="up"
            offset={20}
            duration={0.3}
            delay={0.1}
            inView={true}
            inViewMargin={isMobile ? '-50px' : '-200px'}
          >
            <MountainCard
              key={range.id}
              range={range}
              isKgp={range.computedIsKgp}
              isKs={range.computedIsKs}
              isSelected={selectedRangeId === range.id}
              onClick={() => handleMobileCardClick(range.id)}
              isMobile={isMobile}
            />
          </FadeIn>
        ))}
      </div>

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
      className="z-30 -mx-4 bg-forest-50/80 p-3 backdrop-blur-sm md:mx-0 md:bg-transparent md:p-0 md:backdrop-blur-none"
    >
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:gap-4">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-forest-400 sm:left-4">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Szukaj pasma, szczytu..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border-2 border-forest-200 bg-cream py-2 pl-10 pr-3 text-sm text-forest-800 shadow-sm transition-all placeholder:text-forest-400 hover:border-forest-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20 sm:py-2.5 sm:pl-12 sm:pr-4 sm:text-base md:py-3"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-1.5 sm:gap-2">
          {/* KS Filter Toggle */}
          <button
            onClick={onToggleKs}
            className={cn(
              'group flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 px-3 py-2 text-xs font-bold uppercase tracking-wide transition-all sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm md:px-6 md:py-3',
              showKsOnly
                ? 'border-amber-600 bg-gradient-to-br from-amber-700 to-amber-900 text-cream shadow-vintage'
                : 'border-forest-200 bg-cream text-forest-700 hover:border-forest-300 hover:bg-forest-50'
            )}
          >
            <span className="whitespace-nowrap">Korona Sudetów</span>
            <div
              className={cn(
                'flex size-4 items-center justify-center rounded-full border-2 transition-colors sm:size-5',
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
              'group flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 px-3 py-2 text-xs font-bold uppercase tracking-wide transition-all sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm md:px-6 md:py-3',
              showKgpOnly
                ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-orange-700 text-cream shadow-vintage'
                : 'border-forest-200 bg-cream text-forest-700 hover:border-forest-300 hover:bg-forest-50'
            )}
          >
            <span className="whitespace-nowrap">Korona Gór Polski</span>
            <div
              className={cn(
                'flex size-4 items-center justify-center rounded-full border-2 transition-colors sm:size-5',
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

const cardBaseStyles =
  'group relative overflow-hidden rounded-2xl border-2 border-forest-200/60 bg-gradient-to-br from-cream via-forest-50/20 to-cream p-3 shadow-vintage-lg transition-all duration-300 hover:scale-[1.02] hover:border-forest-400/60 hover:shadow-vintage-xl sm:p-4 md:p-5 lg:p-6';

const MountainCard = memo(
  ({
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
            isSelected && 'border-forest-500/80 ring-2 ring-forest-500/50'
          )}
          onClick={onClick}
        >
          {/* Subtle gradient overlay */}
          <div className="from-forest-500/3 to-forest-600/3 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Hover glow effect - only outside */}
          <div className="via-forest-500/8 pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-forest-400/15 to-forest-600/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
          <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />

          {/* Expanded Details (Collapsible) */}
          <div
            className={cn(
              'grid transition-all duration-300 ease-in-out',
              isSelected
                ? 'mt-3 grid-rows-[1fr] border-t border-forest-300/60 bg-gradient-to-r from-transparent via-forest-100/30 to-transparent pt-3 opacity-100 sm:mt-4 sm:pt-4'
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
            <div className="from-forest-500/3 to-forest-600/3 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Hover glow effect - only outside */}
            <div className="via-forest-500/8 pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-forest-400/15 to-forest-600/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

            <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative h-auto w-[500px] rounded-2xl border-2 border-forest-300/80 bg-cream shadow-vintage-lg [&_.mountain-image-container]:h-80">
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              <MountainCardVisuals range={range} isKgp={isKgp} isKs={isKs} />
              <div className="mt-4 border-t border-forest-300/60 pt-4">
                <MountainDetails range={range} />
              </div>
            </div>
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    );
  }
);

MountainCard.displayName = 'MountainCard';

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
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-forest-100 to-forest-200 text-4xl sm:h-48 md:h-56 lg:h-64">
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
            'flex h-6 min-w-[24px] items-center justify-center rounded bg-forest-900/80 px-1.5 text-xs font-bold text-cream shadow-sm backdrop-blur-sm sm:h-7 sm:text-sm',
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
      <h3 className="font-display text-sm font-bold uppercase leading-tight text-forest-800 sm:text-base md:text-lg md:normal-case lg:text-xl">
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
    <div className="stats-number text-lg font-bold text-forest-700 sm:text-xl md:text-2xl lg:text-3xl">
      {range.elevation}M
    </div>
  </div>
));

ElevationStats.displayName = 'ElevationStats';

const MountainDetails = memo(({ range }: { range: SudetenRange }) => (
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
));

MountainDetails.displayName = 'MountainDetails';

const DetailRow = memo(({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="block font-bold text-forest-800 md:mr-2 md:inline">
      {label}:
    </span>
    <span className="block text-forest-700 md:inline">{value}</span>
  </div>
));

DetailRow.displayName = 'DetailRow';

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
