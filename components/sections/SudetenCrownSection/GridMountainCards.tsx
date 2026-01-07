'use client';

import { useReducer, useMemo, useCallback } from 'react';
import { FadeIn } from '@/components/motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useDebounce } from '@/hooks/useDebounce';
import { cn } from '@/lib/utils';
import { type SudetenRange } from './data';
import { CheckIcon } from '@/components/icons';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { MountainCard } from './MountainCard';
import { useTranslations } from '@/lib/i18n-utils';

interface GridMountainCardsProps {
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

export const GridMountainCards = ({ ranges }: GridMountainCardsProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { selectedRangeId, searchTerm, showKgpOnly, showKsOnly } = state;
  const isMobile = useIsMobile();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Precompute KGP status for all ranges once
  const rangesWithKgp = useMemo(() => {
    return ranges.map((range) => ({
      ...range,
      computedIsKgp: range.isKgp,
      computedIsKs: range.isKs,
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
    <div className="relative h-full space-y-8">
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

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-6">
        {filteredRanges.map((range, index) => (
          <MountainCard
            key={index}
            range={range}
            isKgp={range.computedIsKgp}
            isKs={range.computedIsKs}
            isSelected={selectedRangeId === range.id}
            onClick={() => handleMobileCardClick(range.id)}
            isMobile={isMobile}
          />
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
  const { t } = useTranslations('sudetenCrown');
  
  return (
    <FadeIn
      direction="up"
      duration={0.5}
      className="z-30 -mx-4 bg-earth-50/80 p-3 backdrop-blur-sm md:mx-0 md:bg-transparent md:p-0 md:backdrop-blur-none"
    >
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:gap-4">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-earth-400 sm:left-4">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border-2 border-earth-200 bg-cream py-2 pl-10 pr-3 text-sm text-earth-800 shadow-sm transition-all placeholder:text-earth-400 hover:border-earth-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20 sm:py-2.5 sm:pl-12 sm:pr-4 sm:text-base md:py-3"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
          {/* KS Filter Toggle */}
          <button
            onClick={onToggleKs}
            className={cn(
              'group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3',
              showKsOnly
                ? 'border-amber-600 bg-gradient-to-br from-amber-700 to-amber-900 text-cream shadow-vintage'
                : 'border-earth-200 bg-cream text-earth-700 hover:border-earth-300 hover:bg-earth-50'
            )}
          >
            <span className="whitespace-nowrap">{t('koronaSudetow')}</span>
            <div
              className={cn(
                'flex size-4 items-center justify-center rounded-full border-2 transition-colors sm:size-5',
                showKsOnly
                  ? 'border-cream bg-cream text-yellow-600'
                  : 'border-earth-300 group-hover:border-earth-400'
              )}
            >
              {showKsOnly && <CheckIcon />}
            </div>
          </button>

          {/* KGP Filter Toggle */}
          <button
            onClick={onToggleKgp}
            className={cn(
              'group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3',
              showKgpOnly
                ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-orange-700 text-cream shadow-vintage'
                : 'border-earth-200 bg-cream text-earth-700 hover:border-earth-300 hover:bg-earth-50'
            )}
          >
            <span className="whitespace-nowrap">{t('koronaGorPolski')}</span>
            <div
              className={cn(
                'flex size-4 items-center justify-center rounded-full border-2 transition-colors sm:size-5',
                showKgpOnly
                  ? 'border-cream bg-cream text-accent'
                  : 'border-earth-300 group-hover:border-earth-400'
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

const EmptyState = ({ onClearFilters }: { onClearFilters: () => void }) => {
  const { t } = useTranslations('sudetenCrown');
  
  return (
    <div className="py-12 text-center text-mountain-500">
      <p className="text-lg">{t('noResults')}</p>
      <button
        onClick={onClearFilters}
        className="mt-4 text-accent-hover hover:underline"
      >
        {t('clearFilters')}
      </button>
    </div>
  );
};
