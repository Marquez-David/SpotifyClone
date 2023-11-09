import { requestItem } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

export const useRequest = (request) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['request', request],
    queryFn: () => requestItem(request),
  });

  return {
    isLoading,
    isError,
    data,
    refetch,
  }
};