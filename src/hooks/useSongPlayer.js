import { useState, useEffect } from 'react';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';

export const useSongPlayer = () => {
  const { playing } = useIsPlaying();
  const [player, setPlayer] = useState({ visible: false, state: '', setup: false, queue: [] });
  !player.setup ? TrackPlayer.setupPlayer() : null;

  useEffect(() => {
    setPlayer((prevState) => ({ ...prevState, state: playing ? 'pause' : 'play' }));
  }, [playing]);

  const updatePlayer = async (playerQueue) => {
    setPlayer((prevState) => ({ ...prevState, queue: playerQueue }));
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
    updatePlayer(song);
  };

  const play = async () => {
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  return { player, play, pause, playSong }
};