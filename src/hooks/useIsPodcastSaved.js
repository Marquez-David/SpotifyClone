import { getUserFollowPodcast } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Checks if the current user follows a specific podcast on Spotify.
 * @param {string} podcastId - The unique identifier of the podcast.
 * @returns {Object} - An object containing the boolean value 'isSaved' indicating whether the user follows the podcast,
 * and a function 'refetch' to manually trigger a refetch of the data.
 */
export const useIsPodcastSaved = (podcastId) => {
  const { data, refetch } = useQuery({
    queryKey: ['podcastSaved', podcastId],
    queryFn: () => getUserFollowPodcast(podcastId),
  });

  return { isSaved: data, refetch };
};