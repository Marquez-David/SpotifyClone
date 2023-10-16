import { useState, useEffect } from 'react';
import { getSavedEpisodes } from '../services/SpotifyRequests';

/**
 * A custom hook for fetching and managing a user's saved episodes data.
 * @returns {Object} An object containing the list of saved episodes.
 */
export const useSavedEpisodes = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      try {
        let data = await getSavedEpisodes();
        setEpisodes(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchEpisodesData();
  }, []);

  return { episodes };
};