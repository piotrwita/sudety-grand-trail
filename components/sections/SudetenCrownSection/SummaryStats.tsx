import { sudetenRanges } from './data';

export const SummaryStats = () => {
  const count = sudetenRanges.length;

  // Sort by elevation to find max/min
  const sortedByElevation = [...sudetenRanges].sort(
    (a, b) => b.elevation - a.elevation
  );

  const highest = sortedByElevation[0];
  const lowest = sortedByElevation[sortedByElevation.length - 1];
  const diff = highest.elevation - lowest.elevation;

  return (
    <>
      <div className="card-vintage p-6 text-center">
        <div className="stats-number mb-2 text-3xl">{count}</div>
        <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
          Pasma
        </div>
      </div>
      <div className="card-vintage p-6 text-center">
        <div className="stats-number mb-2 text-3xl">{highest.elevation}</div>
        <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
          Najwyższy ({highest.peak})
        </div>
      </div>
      <div className="card-vintage p-6 text-center">
        <div className="stats-number mb-2 text-3xl">{lowest.elevation}</div>
        <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
          Najniższy ({lowest.peak})
        </div>
      </div>
      <div className="card-vintage p-6 text-center">
        <div className="stats-number mb-2 text-3xl">{diff}</div>
        <div className="text-sm font-bold uppercase tracking-wide text-mountain-600">
          Różnica wysokości
        </div>
      </div>
    </>
  );
};
