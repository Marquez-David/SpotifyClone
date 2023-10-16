import { useState, useEffect } from 'react';

/**
 * A custom hook for managing button properties, particularly the button color, based on a condition.
 * @param {boolean} condition - The condition that determines which button color to use.
 * @param {string} color1 - The button color to use when the condition is true.
 * @param {string} color2 - The button color to use when the condition is false.
 * @returns {Object} An object containing the current button color and a function to set the button color.
 */
export const useButtonColor = (condition, color1, color2) => {
  const [buttonColor, setButtonColor] = useState(condition ? color1 : color2);

  useEffect(() => {
    setButtonColor(condition ? color1 : color2);
  }, [condition]);

  return { buttonColor, setButtonColor };
};