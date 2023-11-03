import { getRecentlyPlayed } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook that fetches the user's recently played tracks using the getRecentlyPlayed function.
 * @returns {Object} - An object containing the user's recently played tracks.
 */
export const useRecentlyPlayed = () => {
  const { data } = useQuery({
    queryKey: ['recentlyPlayed'],
    queryFn: () => getRecentlyPlayed(),
  });

  return {
    recentlyPlayed: data,
  }
};