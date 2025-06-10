import { queryOptions, useQuery } from '@tanstack/react-query';
import { api } from '../../../lib/api-client';
import type { QueryConfig } from '../../../lib/react-query';
import type { Skip } from '../types/skip';

export const getSkips = ({
  postcode,
  area,
}: {
  postcode: string;
  area: string;
}): Promise< Skip[]> => {
  return api.get(`/skips/by-location?postcode=${postcode}&area=${area}`);
};

export const getSkipsQueryOptions = (postcode: string, area: string) =>
  queryOptions({
    queryKey: ['skips', postcode, area],
    queryFn: () => getSkips({ postcode, area }),
  });

type UseSkipsOptions = {
  postcode: string;
  area: string;
  queryConfig?: QueryConfig<typeof getSkipsQueryOptions>;
};

export const useSkips = ({
  postcode,
  area,
  queryConfig,
}: UseSkipsOptions) => {
  return useQuery({
    ...getSkipsQueryOptions(postcode, area),
    ...queryConfig,
  });
};
