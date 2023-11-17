import { isAlbumSaved, getFeaturedAlbums } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook that provides functionality related to albums.
 * @returns {Object} - An object containing functions related to albums.
 */
export const useAlbum = () => {

  //Checks if a specific album is saved by the user.
  const isSaved = (id) => {
    const { data, refetch } = useQuery({ queryKey: ['isAlbumSaved', id], queryFn: () => isAlbumSaved(id) });
    return { isSaved: data, refetch };
  };

  //Fetches a list of featured albums.
  const featured = () => {
    const { data } = useQuery({ queryKey: ['featuredAlbums'], queryFn: () => getFeaturedAlbums() });
    return { featuredAlbums: data };
  };

  return { isSaved, featured };
};