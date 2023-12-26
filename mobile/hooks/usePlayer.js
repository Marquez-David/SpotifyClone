import { useState, useEffect } from 'react';
import TrackPlayer, { useIsPlaying, useProgress, usePlaybackState } from 'react-native-track-player';

import { getSongQueue } from '../services/requests';
import { createQueue } from '../utils/helpers';

/**
 * Custom hook that manages the audio playback functionality for the music player.
 * @returns {Object} - An object containing player state and control functions (play, pause, song, shuffle).
 */
export const usePlayer = () => {
  const { playing } = useIsPlaying();
  const { duration, position } = useProgress();
  const { state } = usePlaybackState();
  const [player, setPlayer] = useState({ progress: { position: 1, duration: 1 }, state: '', currentSong: {} });

  useEffect(() => {
    if (position && position != 0) {
      setPlayer((prevState) => ({ ...prevState, progress: { position: position, duration: duration } }));
    }
  }, [position]);

  useEffect(() => {
    const listener = async () => {
      const currentSong = await TrackPlayer.getActiveTrack();
      setPlayer((prevState) => ({ ...prevState, currentSong: currentSong }));
    };
    TrackPlayer.addEventListener('playback-track-changed', listener);
  }, []);

  useEffect(() => {
    setPlayer((prevState) => ({ ...prevState, state: playing ? 'pause' : 'play' }));
  }, [state]);

  //Setup the player when its not initialized
  const setupPlayer = () => {
    if (!state) {
      TrackPlayer.setupPlayer();
    }
  };

  //Plays a album/playlist
  const playQueue = async (shuffle, item) => {
    const response = await getSongQueue(item.type, item.id);
    const songs = createQueue(response, item, shuffle);
    await TrackPlayer.setQueue(songs);
    await TrackPlayer.play();
  };

  //Plays a single song.
  const song = async (item) => {
    const song = [{ id: item.id, pos: item.pos, title: item.name, artwork: item.image, url: item.preview_url, artist: item.artists }];
    await TrackPlayer.setQueue(song);
    await TrackPlayer.play();
  };

  //Plays a single episode.
  const episode = async (item) => {
    const episode = [{ id: item.id, title: item.name, artwork: item.image, url: item.audio_preview_url, artist: item.publisher }];
    await TrackPlayer.setQueue(episode);
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

  return { player, play, pause, song, episode, playQueue, setupPlayer };
};