import { isTrackSaved } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook to check if a specific track is saved by the user.
 * @returns {Object} An object indicating if the track is saved, and a function to refetch the data.
 */
export const useTrack = () => {

  const isSaved = (id) => {
    const { data, refetch } = useQuery({ queryKey: ['isTrackSaved', id], queryFn: () => isTrackSaved(id) });
    return { isSaved: data, refetch };
  };

  return { isSaved };
};