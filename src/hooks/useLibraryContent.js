import { getLibraryContent } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Fetches and provides data about saved content.
 * @returns {Object} - An object containing information about saved content.
 */
export const useLibraryContent = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['savedContent'],
    queryFn: getLibraryContent,
  });

  return { isLoading, isError, data, refetch };
};