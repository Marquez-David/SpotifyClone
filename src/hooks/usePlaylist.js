import { getPlaylist } from "../services/SpotifyRequests";
import { useInfiniteQuery } from '@tanstack/react-query';
import { offsets } from "../utils/constants";

/**
 * A custom hook for fetching and managing playlist data using React Query's useInfiniteQuery.
 * @param {string} playlistId - The ID of the playlist to retrieve.
 * @returns {Object} An object containing playlist data, loading state, error state, and functions to refetch and fetch the next page.
 */
export const usePlaylist = (playlistId) => {
  const { isLoading, isError, data, refetch, fetchNextPage } = useInfiniteQuery({
    queryKey: ['playlist', playlistId],
    queryFn: ({ pageParam = 0 }) => getPlaylist(playlistId, pageParam),
    getNextPageParam: (lastPage, allPages) => lastPage.length >= offsets.playlists ? allPages?.length * offsets.playlists : undefined,
  });

  return {
    isLoading,
    isError,
    playlist: data?.pages?.flatMap(page => page),
    refetch,
    fetchNextPage,
  }
};