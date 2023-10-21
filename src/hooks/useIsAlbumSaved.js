import { areAlbumsSaved } from '../services/SpotifyRequests';
import { useQuery } from '@tanstack/react-query';
import { contentType } from '../utils/strings';

/**
 * A custom hook for checking if an album is saved by the user using React Query.
 * @param {string} type - The content type, such as "album."
 * @param {string} albumId - The ID of the album to check for.
 * @returns {Object} An object containing a boolean flag indicating if the album is saved.
 */
export const useIsAlbumSaved = (type, albumId) => {
  const { data } = useQuery({
    queryKey: ['isAlbumSaved', albumId],
    queryFn: () => areAlbumsSaved(albumId),
    enabled: type === contentType.album, // the query will not execute until type is album
  });

  return { isSaved: data?.[0] };
};