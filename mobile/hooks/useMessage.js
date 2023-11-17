import { useState, useEffect } from 'react';
import { homeStrings } from '../utils/strings';

/**
 * This custom hook determines the appropriate greeting message based on the current time and returns it as part of the state. 
 * The message is updated whenever message changes.
 * @returns 
 */
export const useMessage = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const timerMessage = () => {
      const currentTime = new Date().getHours();
      var message = homeStrings.goodEvening;
      if (currentTime > 6 && currentTime < 12) {
        message = homeStrings.goodMorning;
      } else if (currentTime >= 12 && currentTime < 19) {
        message = homeStrings.goodAfternoon;
      }
      setMessage(message);
    };

    timerMessage();
  }, [message]);

  return { message };
};