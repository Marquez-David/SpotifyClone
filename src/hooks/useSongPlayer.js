import { useState, useEffect } from 'react';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { getSongQueue } from '../services/requests';
import { createQueue } from '../utils/helpers';

export const useSongPlayer = () => {
  const { playing } = useIsPlaying();
  const [player, setPlayer] = useState({ visible: false, state: '', setup: false, queue: [] });

  useEffect(() => {
    setPlayer((prevState) => ({ ...prevState, state: playing ? 'pause' : 'play' }));
  }, [playing]);

  const updatePlayer = async (playerQueue) => {
    setPlayer((prevState) => ({ ...prevState, visible: true, setup: true, queue: playerQueue }));
  };

  const shuffle = async (item) => {
    !player.setup ? TrackPlayer.setupPlayer() : null;
    try {
      const response = await getSongQueue(item.type, item.id);
      const songs = createQueue(response, item);
      await TrackPlayer.setQueue(songs);
      await TrackPlayer.play();
      updatePlayer(songs);
    } catch (error) {
      console.log('Error while fetching song queue: ' + error.message);
    }
  };

  const song = async (item) => {
    !player.setup ? TrackPlayer.setupPlayer() : null;
    const song = [{ title: item.name, artwork: item.image, url: item.preview_url, artist: item.artists }];
    await TrackPlayer.setQueue(song);
    await TrackPlayer.play();
    updatePlayer(song);
  };

  const play = async () => {
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  return { player, play, pause, song, shuffle }
};