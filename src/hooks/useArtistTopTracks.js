import { getArtistTopTracks } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing top tracks of an artist using React Query's useQuery.
 * @param {string} artistId - The ID of the artist for which to retrieve top tracks.
 * @returns {Object} An object containing top tracks data, loading state, error state, and a function to refetch the data.
 */
export const useArtistTopTracks = (artistId) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['topTracks', artistId],
    queryFn: () => getArtistTopTracks(artistId),
  });

  return {
    isLoadingTopTracks: isLoading,
    isErrorTopTracks: isError,
    topTracks: data,
    refetchTopTracks: refetch,
  }
};