import { getArtists, getArtistAlbums } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing artist data using React Query.
 * @returns {Object} An object containing artist data.
 */
const useArtist = () => {
  const { data } = useQuery({
    queryKey: ['artists'],
    queryFn: () => getArtists(),
  });

  return { artist: data };
};

/**
 * A custom hook for fetching and managing artist's albums data using React Query.
 * @returns {Object} An object containing the artist's albums data.
 */
export const useArtistsAlbums = () => {
  const { artist } = useArtist();
  const { data } = useQuery({
    queryKey: ['artistsAlbums', artist],
    queryFn: () => getArtistAlbums(artist),
    enabled: !!artist, // the query will not execute until artist data is available
  });

  return { artistAlbums: data };
};