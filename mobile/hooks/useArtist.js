import { isArtistSaved, getRelatedArtists, getArtistAlbums, getArtistTopTracks } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook that provides functionality related to artists.
 * @returns {Object} - An object containing functions related to artists.
 */
export const useArtist = () => {

  //Checks if a specific artist is saved by the user.
  const isSaved = (id) => {
    const { data, refetch } = useQuery({ queryKey: ['artistSaved', id], queryFn: () => isArtistSaved(id) });
    return { isSaved: data, refetch };
  };

  //Fetches albums by a specific artist.
  const albums = (id) => {
    const { isLoading, isError, data, refetch } = useQuery({ queryKey: ['artistAlbums', id], queryFn: () => getArtistAlbums(id) });
    return { isLoadingAlbum: isLoading, isErrorAlbum: isError, albums: data, refetchAlbums: refetch }
  };

  //Fetches related artists for a specific artist.
  const related = (id) => {
    const { isLoading, isError, data, refetch } = useQuery({ queryKey: ['relatedArtists', id], queryFn: () => getRelatedArtists(id) });
    return { isLoadingRelated: isLoading, isErrorRelated: isError, related: data, refetchRelated: refetch };
  };

  //Fetches top tracks for a specific artist.
  const topTracks = (id) => {
    const { isLoading, isError, data, refetch } = useQuery({ queryKey: ['topTracks', id], queryFn: () => getArtistTopTracks(id) });
    return { isLoadingTopTracks: isLoading, isErrorTopTracks: isError, topTracks: data, refetchTopTracks: refetch }
  };

  return { isSaved, related, albums, topTracks }
};