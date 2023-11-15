import { getFeaturedAlbums } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Fetches a list of featured albums from the Spotify API.
 * @returns {Array} - An array containing the featured albums.
 */
export const useFeaturedAlbums = () => {
  const { data } = useQuery({
    queryKey: ['featuredAlbums'],
    queryFn: () => getFeaturedAlbums(),
  });

  return { featuredAlbums: data };
};