import { getArtistAlbums } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook that manage the albums associated with a Spotify artist.
 * @param {string} artistId - The Spotify artist ID for which albums are to be fetched.
 * @returns {Object} - An object containing the loading state, error state, fetched data, and a refetch function.
 */
export const useArtistAlbums = (artistId) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['artistAlbums', artistId],
    queryFn: () => getArtistAlbums(artistId),
  });

  return {
    isLoading,
    isError,
    data,
    refetch,
  }
};