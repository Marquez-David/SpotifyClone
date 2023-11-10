import { getUserFollowsArtist } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Checks if the current user follows a specific artist on Spotify.
 * @param {string} artistId - The unique identifier of the artist.
 * @returns {Object} - An object containing the boolean value 'isSaved' indicating whether the user follows the artist,
 * and a function 'refetch' to manually trigger a refetch of the data.
 */
export const useIsArtistSaved = (artistId) => {
  const { data, refetch } = useQuery({
    queryKey: ['artistSaved', artistId],
    queryFn: () => getUserFollowsArtist(artistId),
  });

  return { isSaved: data, refetch };
};