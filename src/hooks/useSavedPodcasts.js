import { useState, useEffect } from 'react';
import { getSavedPodcasts } from '../services/SpotifyRequests';

/**
 * A custom hook for fetching and managing a user's saved podcasts data.
 * @returns {Object} An object containing the list of saved podcasts.
 */
export const useSavedPodcasts = () => {
  const [podcasts, setPodcasts] = useState(null);

  useEffect(() => {
    const fetchPodcastsData = async () => {
      try {
        const podcasts = await getSavedPodcasts();
        setPodcasts(podcasts);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPodcastsData();
  }, []);

  return { podcasts };
};