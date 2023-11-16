import { getPlaylist, getFeaturedPlaylists } from "../services/requests";
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { offsets } from "../utils/constants";

/**
 * Custom hook that provides functionality for fetching playlist data.
 * @returns {Object} - An object containing functions related to playlists.
 */
export const usePlaylist = () => {

  //Fetches a specific playlist.
  const playlist = (id) => {
    const { isLoading, isError, data, refetch, fetchNextPage } = useInfiniteQuery({
      queryKey: ['playlist', id],
      queryFn: ({ pageParam = 0 }) => getPlaylist(id, pageParam),
      getNextPageParam: (lastPage, allPages) => lastPage.length >= offsets.playlists ? allPages?.length * offsets.playlists : undefined,
    });

    return { isLoading, isError, playlist: data?.pages?.flatMap(page => page), refetch, fetchNextPage }
  };

  //Fetches featured playlists.
  const featured = () => {
    const { data } = useQuery({ queryKey: ['featuredPlaylists'], queryFn: () => getFeaturedPlaylists() });
    return { featuredPlaylists: data };
  };

  return { playlist, featured };
};