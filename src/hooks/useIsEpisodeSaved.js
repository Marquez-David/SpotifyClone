import { isEpisodeSaved } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for checking if an episode is saved by the user using React Query.
 * @param {string} episodeId - The ID of the episode to check for.
 * @returns {Object} An object containing a boolean flag indicating if the episode is saved.
 */
export const useIsEpisodeSaved = (episodeId) => {
  const { data, refetch } = useQuery({
    queryKey: ['isEpisodeSaved', episodeId],
    queryFn: () => isEpisodeSaved(episodeId),
  });

  return { isSaved: data, refetch };
};