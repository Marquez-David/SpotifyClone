import { useState, useEffect } from 'react';

/**
 * A custom hook for managing search text based on the subcategory.
 * @param {string} subcategory - The subcategory that influences search text management.
 * @returns {Object} An object containing the current search text and a function to set the search text.
 */
export const useSearchText = (subcategory) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchText('');
  }, [subcategory]);

  return { searchText, setSearchText };
};