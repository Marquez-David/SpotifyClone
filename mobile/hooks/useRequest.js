import { requestItem } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook that provides functionality for making a generic request and managing its state.
 * @param {string} request - The type of request to make.
 * @returns {Object} - An object containing loading state, error state, data, and a function to refetch the request.
 */
export const useRequest = (request) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['request', request],
    queryFn: () => requestItem(request),
  });

  return { isLoading, isError, data, refetch };
};