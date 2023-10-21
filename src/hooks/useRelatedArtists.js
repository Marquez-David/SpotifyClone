import { getRelatedArtists } from "../services/SpotifyRequests";
import { useQuery } from "@tanstack/react-query";

/**
 * A custom hook for fetching and managing related artists using React Query's useQuery.
 * @param {string} artistsId - The ID of the artist for which to retrieve related artists.
 * @returns {Object} An object containing related artists data, loading state, error state, and a function to refetch the data.
 */
export const useRelatedArtists = (artistsId) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['relatedArtists', artistsId],
    queryFn: () => getRelatedArtists(artistsId),
  });

  return {
    isLoadingRelatedArtists: isLoading,
    isErrorRelatedArtists: isError,
    relatedArtists: data,
    refetchRelatedArtists: refetch,
  };
};