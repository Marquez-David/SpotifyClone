import { useState, useEffect } from 'react';
import { getSavedAlbums } from '../services/SpotifyRequests';

/**
 * A custom hook for fetching and managing a user's saved podcasts data.
 * @returns {Object} An object containing the list of saved podcasts.
 */
export const useSavedAlbums = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchAlbumsData = async () => {
      try {
        let data = await getSavedAlbums();
        setAlbums(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchAlbumsData();
  }, []);

  return { albums };
};