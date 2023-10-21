import { getFollowingArtists } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing a user's saved artists data using React Query.
 * @returns {Object} An object containing the list of saved artists.
 */
export const useSavedArtists = () => {
  const { data } = useQuery({
    queryKey: ['savedArtists'],
    queryFn: getFollowingArtists,
  });

  return { artists: data };
};