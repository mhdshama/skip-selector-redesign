import { useSkips } from '../api/get-skips';
import { useState } from 'react';
import { SkipCard } from './skip-card';
import { SkipListSkeleton } from './skip-list-skeleton';

export const SkipList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data, isLoading } = useSkips({ postcode: 'NR32', area: 'Lowestoft' });

  if (isLoading) return <SkipListSkeleton />;


  const skips = data ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          selected={selectedId === skip.id}
          onSelect={() => setSelectedId(skip.id)}
        />
      ))}
    </div>
  );
};
