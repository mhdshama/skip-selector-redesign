import { SkipCardSkeleton } from "./skip-card-skeleton";

export const SkipListSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, index) => (
      <SkipCardSkeleton key={index} />
    ))}
  </div>
);
