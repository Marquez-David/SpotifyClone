import { useState } from 'react';
import TrackPlayer from 'react-native-track-player';

export const useSongPlayer = () => {
  const [player, setPlayer] = useState({ visible: false, type: '', setup: false, queue: [] });
  !player.setup ? TrackPlayer.setupPlayer() : null;

  const updatePlayer = async (playerType, playerQueue) => {
    setPlayer({ visible: true, type: playerType, setup: true, queue: playerQueue });
  };

  const playSong = async (item) => {
    const song = [{
      title: item.name,
      artwork: item.album.images[0].url,
      url: item.preview_url,
      artist: item.artists,
    }];
    await TrackPlayer.setQueue(song);
    await TrackPlayer.play();
    updatePlayer('pause', song);
  };

  const play = async () => {
    updatePlayer('pause', player.queue);
    await TrackPlayer.play();
  };

  const pause = async () => {
    updatePlayer('play', player.queue);
    await TrackPlayer.pause();
  };

  return { player, play, pause, playSong }
};