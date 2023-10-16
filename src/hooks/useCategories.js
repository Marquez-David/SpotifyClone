import { useState, useEffect } from 'react';
import { getBrowseCategories } from '../services/SpotifyRequests';

/**
 * Custom hook for managing categories state and fetching data.
 * Returns an object with categories and a setter function.
 * @returns 
 */
export const useCategories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getBrowseCategories();
        setCategories(response);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchCategories();
  }, []);

  return { categories, setCategories };
};