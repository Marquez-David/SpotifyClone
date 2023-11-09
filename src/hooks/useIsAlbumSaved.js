import { isAlbumSaved } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for checking if an album is saved by the user using React Query.
 * @param {string} albumId - The ID of the album to check for.
 * @returns {Object} An object containing a boolean flag indicating if the album is saved.
 */
export const useIsAlbumSaved = (albumId) => {
  const { data, refetch } = useQuery({
    queryKey: ['isAlbumSaved', albumId],
    queryFn: () => isAlbumSaved(albumId),
  });

  return { isSaved: data, refetch };
};