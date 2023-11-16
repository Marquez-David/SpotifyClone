import { isEpisodeSaved } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook that provides functionality related to podcast episodes.
 * @returns {Object} - An object containing functions related to episodes.
 */
export const useEpisode = () => {

  //Checks if a specific podcast episode is saved by the user.
  const isSaved = (id) => {
    const { data, refetch } = useQuery({ queryKey: ['isEpisodeSaved', id], queryFn: () => isEpisodeSaved(id) });
    return { isSaved: data, refetch };
  };

  return { isSaved };
};