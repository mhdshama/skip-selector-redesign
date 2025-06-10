import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SkipCardSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-6 w-1/2 mb-2" />
    </CardHeader>
    <CardContent className="space-y-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-10 w-full rounded-md" />
    </CardContent>
  </Card>
);
