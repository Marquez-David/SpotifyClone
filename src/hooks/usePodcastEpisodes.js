import { getPodcastEpisodes } from '../services/requests';
import { offsets } from '../utils/constants';
import { useInfiniteQuery } from '@tanstack/react-query';

/**
 * A custom hook for fetching and managing podcast episodes using React Query's useInfiniteQuery.
 * @param {string} podcastId - The ID of the podcast for which to retrieve episodes.
 * @returns {Object} An object containing podcast episodes, loading state, error state, and functions to refetch and fetch the next page.
 */
export const usePodcastEpisodes = (podcastId) => {
  const { isLoading, isError, data, refetch, fetchNextPage } = useInfiniteQuery({
    queryKey: ['podcast', podcastId],
    queryFn: ({ pageParam = 0 }) => getPodcastEpisodes(podcastId, pageParam),
    getNextPageParam: (lastPage, allPages) => lastPage.length >= offsets.podcasts ? allPages?.length * offsets.podcasts : undefined,
  });

  return {
    isLoading,
    isError,
    refetch,
    podcastEpisodes: data?.pages?.flatMap(page => page),
    fetchNextPage,
  }
};