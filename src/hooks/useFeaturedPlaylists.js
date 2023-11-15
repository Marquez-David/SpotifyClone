import { getFeaturedPlaylists } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook that fetches a list of featured playlists from the Spotify API.
 * @returns {Object} - An object containing the list of featured playlists.
 */
export const useFeaturedPlaylists = () => {
  const { data } = useQuery({
    queryKey: ['featuredPlaylists'],
    queryFn: () => getFeaturedPlaylists(),
  });

  return { featuredPlaylists: data };
};