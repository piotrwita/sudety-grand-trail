import { day1 } from './trail-journal/day-1';
import { day2 } from './trail-journal/day-2';
import { day3 } from './trail-journal/day-3';
import { day4 } from './trail-journal/day-4';
import { day5 } from './trail-journal/day-5';
import { day6 } from './trail-journal/day-6';
import { day7 } from './trail-journal/day-7';
import { day8 } from './trail-journal/day-8';
import { day9 } from './trail-journal/day-9';
import { day10 } from './trail-journal/day-10';
import { day11 } from './trail-journal/day-11';
import { day12 } from './trail-journal/day-12';
import { day13 } from './trail-journal/day-13';
import { day14 } from './trail-journal/day-14';
import { day15 } from './trail-journal/day-15';

export interface JournalDay {
  day: number;
  distanceToday: number;
  distanceTotal: number;
  title: string;
  content: string;
  images?: string[];
}

export const trailJournalData: JournalDay[] = [
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8,
  day9,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
];
