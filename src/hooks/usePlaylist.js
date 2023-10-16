import { useState, useEffect } from "react";
import { getPlaylist } from "../services/SpotifyRequests";

/**
 * This custom hook fetches and manages data data through an asynchronous API call. 
 * It returns the playlist data and the corresponding function to update the state with the fetched playlist.
 * @returns 
 */
export const usePlaylist = (playlistId, offset, setLoading) => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await getPlaylist(playlistId, offset);
        offset > 0 ? setPlaylist(playlist.concat(response)) : setPlaylist(response);
      } catch (error) {
        console.log('Error while calling function getPlaylist(): ' + error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [offset]);

  return { playlist };
};