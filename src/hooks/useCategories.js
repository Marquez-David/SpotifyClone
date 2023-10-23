import { getBrowseCategories } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing browse categories data using React Query.
 * @returns {Object} An object containing the list of browse categories.
 */
export const useCategories = () => {
  const { data } = useQuery({
    queryKey: ['browseCategories'],
    queryFn: getBrowseCategories,
  });

  return { categories: data }
};