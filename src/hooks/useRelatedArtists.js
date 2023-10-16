import { useState, useEffect } from "react";
import { getRelatedArtists } from "../services/SpotifyRequests";

/**
 * A custom hook for fetching and managing related artists based on the provided artist ID.
 * @param {string} artistId - The ID of the artist for which related artists are to be fetched.
 * @returns {Object} An object containing information about related artists.
 */
export const useRelatedArtist = (artistId) => {
  const [relatedArtist, setRelatedArtist] = useState(null);

  useEffect(() => {
    const fetchRelatedArtist = async () => {
      try {
        let data = await getRelatedArtists(artistId);
        setRelatedArtist(data);
      } catch (error) {
        console.log('Error while calling function useRelatedArtist(): ' + error);
      }
    };

    fetchRelatedArtist();
  }, []);

  return { relatedArtist };
};