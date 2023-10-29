import { getUserPlaylists } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing a user's saved playlists using React Query.
 * @returns {Object} An object containing the list of saved playlists.
 */
export const useSavedPlaylists = () => {
  const { data } = useQuery({
    queryKey: ['savedPlaylists'],
    queryFn: getUserPlaylists,
  });

  return { playlists: data };
};