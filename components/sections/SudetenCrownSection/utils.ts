import type { SudetenRange, KgpPeak } from './data';
import { koronaGorPolski } from './data';

export interface TripStats {
  count: number;
  estimatedKm: number;
  estimatedDays: number;
  totalElevation: number;
  maxElevation: number;
  minElevation: number;
  difficulty: string;
  selected: SudetenRange[];
  kgpCount: number;
  kgpPeaks: KgpPeak[];
}

/**
 * Check if a peak is part of Korona Gór Polski (KGP)
 * This is a fallback method - prefer using range.isKgp field directly
 */
export const isKgpPeak = (
  peakName: string,
  kgpPeaks: KgpPeak[] = koronaGorPolski
): boolean => {
  return kgpPeaks.some(
    (kgpPeak) =>
      peakName === kgpPeak.name ||
      peakName.includes(kgpPeak.name) ||
      kgpPeak.name.includes(peakName)
  );
};

/**
 * Calculate elevation height percentage for visualization
 */
export const getElevationHeight = (elevation: number): number => {
  const maxHeight = 1603; // Śnieżka
  const minHeight = 714; // Lázek
  const percentage =
    ((elevation - minHeight) / (maxHeight - minHeight)) * 100;
  return Math.max(percentage, 10); // minimum 10% height
};

/**
 * Get country flag emoji based on country code
 */
export const getCountryFlag = (country: string): string => {
  if (country.includes('PL')) return '🇵🇱';
  if (country.includes('CZ')) return '🇨🇿';
  if (country.includes('DE')) return '🇩🇪';
  return '🏔️';
};

/**
 * Get gradient color class based on rank
 */
export const getRankColor = (rank: number): string => {
  if (rank <= 3) return 'from-yellow-400 to-yellow-600'; // Gold for top 3
  if (rank <= 10) return 'from-forest-400 to-forest-600'; // Green for top 10
  return 'from-mountain-400 to-mountain-600'; // Gray for others
};

/**
 * Calculate trip statistics based on selected peaks
 */
export const calculateTripStats = (
  selectedPeaks: number[],
  ranges: SudetenRange[],
  kgpPeaks: KgpPeak[] = koronaGorPolski
): TripStats => {
  const selected = ranges.filter((range) => selectedPeaks.includes(range.id));
  const totalElevation = selected.reduce(
    (sum, range) => sum + range.elevation,
    0
  );
  const estimatedKm = selected.length * 40; // Rough estimate: 40km per peak
  const estimatedDays = Math.ceil(selected.length / 3); // Rough estimate: 3 peaks per day
  const maxElevation =
    selected.length > 0 ? Math.max(...selected.map((r) => r.elevation)) : 0;
  const minElevation =
    selected.length > 0 ? Math.min(...selected.map((r) => r.elevation)) : 0;

  // Calculate KGP peaks included
  const kgpPeaksIncluded = kgpPeaks.filter((kgpPeak) =>
    selected.some(
      (selectedRange) =>
        selectedRange.peak === kgpPeak.name ||
        selectedRange.peak.includes(kgpPeak.name) ||
        kgpPeak.name.includes(selectedRange.peak)
    )
  );

  let difficulty = 'Łatwy';
  if (selected.length > 15) difficulty = 'Ekstremalny';
  else if (selected.length > 10) difficulty = 'Bardzo trudny';
  else if (selected.length > 5) difficulty = 'Trudny';
  else if (selected.length > 2) difficulty = 'Średni';

  return {
    count: selected.length,
    estimatedKm,
    estimatedDays,
    totalElevation,
    maxElevation,
    minElevation,
    difficulty,
    selected,
    kgpCount: kgpPeaksIncluded.length,
    kgpPeaks: kgpPeaksIncluded,
  };
};

