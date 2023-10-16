import { useState, useEffect } from 'react';
import { getFollowingArtists } from '../services/SpotifyRequests';

/**
 * A custom hook for fetching and managing a user's followed artists' data.
 * @returns {Object} An object containing the list of followed artists.
 */
export const useSavedArtists = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        let data = await getFollowingArtists();
        setArtists(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchArtistsData();
  }, []);

  return { artists };
};