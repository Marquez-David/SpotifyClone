import { useState, useEffect } from 'react';
import { getArtistTopTracks } from '../services/SpotifyRequests';

/**
 * A custom hook for fetching and managing an artist's top tracks based on the provided artist ID.
 * @param {string} artistId - The ID of the artist for which top tracks are to be fetched.
 * @returns {Object} An object containing the artist's top tracks as its property.
 */
export const useArtistTopTracks = (artistId) => {
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchArtistTopTracks = async () => {
      try {
        let data = await getArtistTopTracks(artistId);
        setTopTracks(data);
      } catch (error) {
        console.log('Error while calling function useArtist(): ' + error);
      }
    };

    fetchArtistTopTracks();
  }, []);

  return { topTracks };
};