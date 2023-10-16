import { useState, useEffect } from 'react';
import { getArtists, getArtistAlbums } from '../services/SpotifyRequests';

/**
 * This custom hook fetches and manages data for artists and their albums through asynchronous API calls. 
 * It returns the fetched "artists" list as part of the state.
 * @returns 
 */
export const useArtistsAlbums = () => {
  const [artists, setArtists] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        const artists = await getArtists();
        setArtists(artists);

        const artistAlbums = await getArtistAlbums(artists);
        setArtistAlbums(artistAlbums);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchArtistsData();
  }, []);

  return { artistAlbums };
};