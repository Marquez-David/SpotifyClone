import { useState, useEffect } from 'react';
import { contentTypeStrings } from '../utils/strings';

/**
 * A custom hook for managing subcategories based on a selected category.
 * @param {string} category - The selected category that determines the subcategory.
 * @returns {Object} An object containing the current subcategory and a function to set the subcategory.
 */
export const useSubcategory = (category) => {
  const [subcategory, setSubcategory] = useState(contentTypeStrings.playlists);

  useEffect(() => {
    const handleSubcategories = () => {
      if (category === contentTypeStrings.music) {
        setSubcategory(contentTypeStrings.playlists);
      } else {
        setSubcategory(contentTypeStrings.episodes);
      }
    };

    handleSubcategories();
  }, [category]);

  return { subcategory, setSubcategory };
};