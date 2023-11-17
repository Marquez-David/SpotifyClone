import { useState, useEffect } from 'react';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { getSongQueue } from '../services/requests';
import { createQueue } from '../utils/helpers';

/**
 * Custom hook that manages the audio playback functionality for the music player.
 * @returns {Object} - An object containing player state and control functions (play, pause, song, shuffle).
 */
export const useSongPlayer = () => {
  const { playing } = useIsPlaying();
  const [player, setPlayer] = useState({ visible: false, state: '', currentSong: {} });

  useEffect(() => {
    const listener = async () => {
      const currentSong = await TrackPlayer.getActiveTrack();
      setPlayer((prevState) => ({ ...prevState, visible: true, currentSong: currentSong }));
    };
    TrackPlayer.addEventListener('playback-track-changed', listener);
  }, []);

  useEffect(() => {
    setPlayer((prevState) => ({ ...prevState, state: playing ? 'pause' : 'play' }));
  }, [playing]);

  //Plays a album/playlist
  const playQueue = async (shuffle, item) => {
    const response = await getSongQueue(item.type, item.id);
    const songs = createQueue(response, item, shuffle);
    await TrackPlayer.setQueue(songs);
    await TrackPlayer.play();
  };

  //Plays a single song.
  const song = async (item) => {
    const song = [{ title: item.name, artwork: item.image, url: item.preview_url, artist: item.artists }];
    await TrackPlayer.setQueue(song);
    await TrackPlayer.play();
  };

  //Plays a single episode.
  const episode = async (item) => {
    const song = [{ title: item.name, artwork: item.image, url: item.audio_preview_url, artist: item.publisher }];
    await TrackPlayer.setQueue(song);
    await TrackPlayer.play();
  };

  //Resumes playback of the current song.
  const play = async () => {
    await TrackPlayer.play();
  };

  //Pauses the playback of the current song.
  const pause = async () => {
    await TrackPlayer.pause();
  };

  return { player, play, pause, song, episode, playQueue };
};