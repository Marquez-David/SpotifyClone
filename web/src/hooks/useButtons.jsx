import { useState, useEffect } from 'react';

/**
 * Custom hook that provides functionality for button styling based on conditions.
 * @returns {Object} - An object containing functions related to button styling.
 */
export const useButton = () => {

  //Sets the button color based on a condition.
  const color = (condition, color1, color2) => {
    const [color, setColor] = useState(condition ? color1 : color2);
    useEffect(() => { setColor(condition ? color1 : color2) }, [condition]);
    return { color, setColor };
  };

  //Sets the button type based on a condition.
  const type = (condition, type1, type2) => {
    const [type, setType] = useState(condition ? type1 : type2);
    useEffect(() => { setType(condition ? type1 : type2) }, [condition]);
    return { type, setType };
  };

  //Sets the button text based on a condition.
  const text = (condition, text1, text2) => {
    const [text, setText] = useState(condition ? text1 : text2);
    useEffect(() => { setText(condition ? text1 : text2) }, [condition]);
    return { text, setText };
  };

  return { color, type, text }
};