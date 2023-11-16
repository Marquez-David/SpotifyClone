import { getUserFollowPodcast, getPodcastEpisodes } from '../services/requests';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { offsets } from '../utils/constants';

/**
 * Custom hook that provides functionality for fetching podcast data.
 * @returns {Object} - An object containing functions related to podcasts.
 */
export const usePodcast = () => {

  //Checks if a podcast is saved by the user, along with a refetch function.
  const isSaved = (id) => {
    const { data, refetch } = useQuery({ queryKey: ['podcastSaved', id], queryFn: () => getUserFollowPodcast(id) });
    return { isSaved: data, refetch };
  };

  //Fetches episodes of a podcast.
  const episodes = (id) => {
    const { isLoading, isError, data, refetch, fetchNextPage } = useInfiniteQuery({
      queryKey: ['podcast', id],
      queryFn: ({ pageParam = 0 }) => getPodcastEpisodes(id, pageParam),
      getNextPageParam: (lastPage, allPages) => lastPage.length >= offsets.podcasts ? allPages?.length * offsets.podcasts : undefined,
    });
    return { isLoading, isError, refetch, episodes: data?.pages?.flatMap(page => page), fetchNextPage }
  };

  return { isSaved, episodes };
};