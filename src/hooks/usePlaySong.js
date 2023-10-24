import { playSong } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing album data using React Query's useQuery.
 * @param {string} albumId - The ID of the album to retrieve.
 * @returns {Object} An object containing album data, loading state, and error state.
 */
export const usePlaySong = () => {
  const { data } = useQuery({
    queryKey: ['playSong'],
    queryFn: () => playSong(),
  });

  return {
    data,

  }
};