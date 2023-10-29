import { getSavedContent } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing saved content using React Query's useQuery.
 * @param {string} content - The type of content (e.g., albums, playlists) to retrieve saved items.
 * @returns {Object} An object containing saved content data, loading state, error state, and a function to refetch the data.
 */
export const useSavedContent = (content) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['savedContent', content],
    queryFn: () => getSavedContent(content),
  });

  return {
    isLoading,
    isError,
    data,
    refetch,
  };
};