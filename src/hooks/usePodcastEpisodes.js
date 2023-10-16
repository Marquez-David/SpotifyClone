import { useState, useEffect } from 'react';
import { getPodcastEpisodes } from '../services/SpotifyRequests';

/**
 * A custom hook for fetching and managing podcast episodes based on the provided podcast ID.
 * @param {string} podcastId - The ID of the podcast for which episodes are to be fetched.
 * @returns {Object} An object containing the podcast episodes as its property.
 */
export const usePodcastEpisodes = (podcastId, offset, setLoading) => {
  const [podcastEpisodes, setPodcastEpisodes] = useState(null);

  useEffect(() => {
    const fetchPodcastEpisodes = async () => {
      try {
        const response = await getPodcastEpisodes(podcastId, offset);
        offset > 0 ? setPodcastEpisodes(podcastEpisodes.concat(response)) : setPodcastEpisodes(response);
      } catch (error) {
        console.log('Error while calling function fetchPodcastEpisodes(): ' + error);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcastEpisodes();
  }, [offset]);

  return { podcastEpisodes, setPodcastEpisodes };
};