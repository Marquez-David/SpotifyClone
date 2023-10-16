import { useState, useEffect } from 'react';

/**
 * A custom hook for managing button text based on a condition.
 * @param {boolean} condition - The condition that determines which text to display.
 * @param {string} text1 - The text to display when the condition is true.
 * @param {string} text2 - The text to display when the condition is false.
 * @returns {Object} An object containing the current button text and a function to set the button text.
 */
export const useButtonText = (condition, text1, text2) => {
  const [buttonText, setButtonText] = useState(condition ? text1 : text2);

  useEffect(() => {
    setButtonText(condition ? text1 : text2);
  }, [condition]);

  return { buttonText, setButtonText };
};