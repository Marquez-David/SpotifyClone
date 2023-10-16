import { useState, useEffect } from 'react';

/**
 * A custom hook for managing button types based on a condition.
 * @param {boolean} condition - The condition that determines which button type to use.
 * @param {string} type1 - The button type to use when the condition is true.
 * @param {string} type2 - The button type to use when the condition is false.
 * @returns {Object} An object containing the current button type and a function to set the button type.
 */
export const useButtonType = (condition, type1, type2) => {
  const [buttonType, setButtonType] = useState(condition ? type1 : type2);

  useEffect(() => {
    setButtonType(condition ? type1 : type2);
  }, [condition]);

  return { buttonType, setButtonType };
};