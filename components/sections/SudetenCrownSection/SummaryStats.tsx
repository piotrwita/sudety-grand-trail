import { sudetenRanges } from './data';

const count = sudetenRanges.length;

// Sort by elevation to find max/min
const sortedByElevation = [...sudetenRanges].sort(
  (a, b) => b.elevation - a.elevation
);

const highest = sortedByElevation[0];
const lowest = sortedByElevation[sortedByElevation.length - 1];
const diff = highest.elevation - lowest.elevation;

const stats = [
  {
    value: count,
    label: 'Pasma',
  },
  {
    value: highest.elevation,
    label: `Najwyższy (${highest.peak})`,
  },
  {
    value: lowest.elevation,
    label: `Najniższy (${lowest.peak})`,
  },
  {
    value: diff,
    label: 'Różnica wysokości',
  },
];

export const SummaryStats = () => {
  return (
    <>
      {stats.map((stat) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </>
  );
};

interface StatCardProps {
  value: string | number;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="card-vintage p-4 text-center hover:scale-100 md:p-6 md:hover:scale-105">
    <div className="stats-number mb-1 text-xl md:mb-2 md:text-3xl">{value}</div>
    <div className="text-xs font-bold uppercase tracking-wide text-mountain-600 md:text-sm">
      {label}
    </div>
  </div>
);
