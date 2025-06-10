import { SkipList } from "@/features/skips/components/skip-list";

export const HomePage = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold text-center mb-6">
      Choose Your Skip Size
    </h1>
    <p className="text-center text-muted-foreground mb-6">
      Select the skip size that best suits your needs
    </p>
    <SkipList />
  </div>
);
