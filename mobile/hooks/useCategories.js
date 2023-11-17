import { getBrowseCategories } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing browse categories data using React Query.
 * @returns {Object} An object containing the list of browse categories.
 */
export const useCategories = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['browseCategories'],
    queryFn: getBrowseCategories,
  });

  return { isLoading, isError, categories: data, refetch };
};