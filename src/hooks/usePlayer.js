import { useState } from 'react';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    visible: false,
    item: {},
  });

  const openPlayer = (data) => {
    setPlayer({
      visible: true,
      item: data,
    });
  };

  return { player, openPlayer }
};