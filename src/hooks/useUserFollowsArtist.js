import { useState, useEffect } from 'react';
import { getUserFollowsArtist } from '../services/SpotifyRequests';

/**
 * A custom hook for checking if the current user follows a specific artist based on the provided artist ID.
 * @param {string} artistId - The ID of the artist to be checked for follow status.
 * @returns {Object} An object containing a boolean indicating whether the user follows the artist.
 */
export const useUserFollowsArtist = (artistId) => {
  const [userFollowsArtist, setUserFollowsArtist] = useState(null);

  useEffect(() => {
    const fetchUserFollowsArtist = async () => {
      try {
        let data = await getUserFollowsArtist(artistId);
        setUserFollowsArtist(data?.[0]);
      } catch (error) {
        console.log('Error while calling function fetchUserFollowArtist(): ' + error);
      }
    };

    fetchUserFollowsArtist();
  }, []);

  return { userFollowsArtist, setUserFollowsArtist };
};