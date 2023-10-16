import { useState, useEffect } from 'react';
import { areAlbumsSaved } from '../services/SpotifyRequests';

/**
 * Custom hook that checks whether a list of album IDs is saved in the user's Spotify library.
 * * @param {string[]} type - Type of the data.
 * @param {string[]} id - An array of album IDs to check.
 * @returns {Object} - An object containing the state of saved albums and a function to update the state.
 */
export const useIsAlbumSaved = (type, id) => {
  const [isSaved, setIsSaved] = useState(null);

  useEffect(() => {
    const fetchIsAlbumSaved = async () => {
      try {
        if (type === 'album') {
          let data = await areAlbumsSaved(id);
          setIsSaved(data?.[0]);
        }
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchIsAlbumSaved();
  }, []);

  return { isSaved, setIsSaved };
};