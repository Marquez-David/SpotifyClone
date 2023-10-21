import { getSavedEpisodes } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing a user's saved episodes data using React Query.
 * @returns {Object} An object containing the list of saved episodes.
 */
export const useSavedEpisodes = () => {
  const { data } = useQuery({
    queryKey: ['savedEpisodes'],
    queryFn: getSavedEpisodes,
  });

  return { episodes: data };
};