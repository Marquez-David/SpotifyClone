import { getUserFollowsArtist } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for checking if the user follows an artist using React Query.
 * @param {string} artistId - The ID of the artist to check for user follow status.
 * @returns {Object} An object containing a boolean flag indicating if the user follows the artist.
 */
export const useUserFollowsArtist = (artistId) => {
  const { data } = useQuery({
    queryKey: ['userFollowArtist', artistId],
    queryFn: () => getUserFollowsArtist(artistId),
  });

  return { userFollowsArtist: data?.[0] };
};