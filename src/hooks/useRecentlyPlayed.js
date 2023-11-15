import { getRecentlyPlayed } from "../services/requests";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook that fetches the user's recently played items from the Spotify API.
 * @returns {Object} - An object containing the recently played data.
 */
export const useRecentlyPlayed = () => {
  const { data } = useQuery({
    queryKey: ['recentlyPlayed'],
    queryFn: () => getRecentlyPlayed(),
  });

  return { recentlyPlayed: data };
};