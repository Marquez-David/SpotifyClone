import { useState, useEffect } from 'react';
import { getUserPlaylists } from '../services/SpotifyRequests';

/**
 * This custom hook fetches and manages data for user playlists through an asynchronous API call. 
 * It returns the playlists data as part of the state.
 * @returns 
 */
export const useSavedPlaylists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchPlaylistsData = async () => {
      try {
        const playlists = await getUserPlaylists();
        setPlaylists(playlists);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPlaylistsData();
  }, []);

  return { playlists };
};