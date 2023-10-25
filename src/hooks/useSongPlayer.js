import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { modalDialogStrings } from '../utils/strings';

import { getAvailableDevices, playSong, stopSong } from '../services/SpotifyRequests';
import { ModalContext } from '../context/modal';


export const useSongPlayer = () => {
  const { openModal } = useContext(ModalContext);
  const [player, setPlayer] = useState({ visible: false, type: '', item: {} });
  const { data } = useQuery({ queryKey: ['devices'], queryFn: () => getAvailableDevices() });

  const updatePlayer = (playerVisible, playerType, playerItem) => {
    setPlayer({ visible: playerVisible, type: playerType, item: playerItem });
  };

  const play = async (item) => {
    if (!data?.length) { //No device available
      openModal(modalDialogStrings.noDevices, modalDialogStrings.understood);
    } else {
      updatePlayer(true, 'pause', item);
      const response = await playSong(data[0].id, item.album.uri, item.track_number);
    }
  };

  const pause = async (item) => {
    if (!data?.length) { //No device found
      openModal(modalDialogStrings.noDevices, modalDialogStrings.understood);
    } else {
      updatePlayer(true, 'play', item);
      const response = await stopSong(data[0].id);
    }
  };

  return { player, setPlayer, play, pause }
};