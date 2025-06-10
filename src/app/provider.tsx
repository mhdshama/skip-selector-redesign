import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { queryConfig } from '@/lib/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <span className="text-xl">Loading app...</span>
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </React.Suspense>
  );
};
