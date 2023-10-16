import { useState, useEffect } from 'react';
import { getAlbum } from '../services/SpotifyRequests';

/**
 * This custom hook fetches and manages data data through an asynchronous API call. 
 * It returns the album data and the corresponding function to update the state with the fetched album.
 * @returns 
 */
export const useAlbum = (albumId) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await getAlbum(albumId);
        setAlbum(response);
      } catch (error) {
        console.log('Error while calling function getAlbum(): ' + error);
      }
    };

    fetchAlbumData();
  }, []);

  return { album, setAlbum };
};