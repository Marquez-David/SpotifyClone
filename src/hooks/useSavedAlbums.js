import { getSavedAlbums } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing a user's saved albums data using React Query.
 * @returns {Object} An object containing the list of saved albums.
 */
export const useSavedAlbums = () => {
  const { data } = useQuery({
    queryKey: ['savedAlbums'],
    queryFn: getSavedAlbums,
  });

  return { albums: data };
};