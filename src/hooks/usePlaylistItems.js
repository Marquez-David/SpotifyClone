import { useQuery } from '@tanstack/react-query';
import { getPlaylistItems } from "../services/requests";

/**
 * Custom hook to fetch playlist items based on the provided playlistId.
 * @param playlistId The ID of the playlist for which to fetch items.
 * @returns An object containing the playlist data.
 */
export const usePlaylistItems = (playlistId) => {
  const { data } = useQuery({
    queryKey: ['playlistItems', playlistId],
    queryFn: () => getPlaylistItems(playlistId),
  });

  return { playlist: data };
};