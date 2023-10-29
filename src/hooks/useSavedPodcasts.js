import { getSavedPodcasts } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing a user's saved podcasts data using React Query.
 * @returns {Object} An object containing the list of saved podcasts.
 */
export const useSavedPodcasts = () => {
  const { data } = useQuery({
    queryKey: ['savedPodcasts'],
    queryFn: getSavedPodcasts,
  });

  return { podcasts: data };
};