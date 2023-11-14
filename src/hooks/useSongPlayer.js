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
  const [player, setPlayer] = useState({ visible: false, state: '', setup: false, currentSong: {} });

  useEffect(() => {
    const listener = async () => {
      const currentSong = await TrackPlayer.getActiveTrack();
      setPlayer((prevState) => ({ ...prevState, visible: true, setup: true, currentSong: currentSong }));
    };
    TrackPlayer.addEventListener('playback-track-changed', listener);
  }, []);

  useEffect(() => {
    setPlayer((prevState) => ({ ...prevState, state: playing ? 'pause' : 'play' }));
  }, [playing]);

  //Set up the audio player if it hasn't been initialized.
  const setupPlayer = async () => {
    !player.setup ? TrackPlayer.setupPlayer() : null;
  };

  //Plays a shuffled queue of songs.
  const shuffle = async (item) => {
    await setupPlayer();
    try {
      const response = await getSongQueue(item.type, item.id);
      const songs = createQueue(response, item);
      await TrackPlayer.setQueue(songs);
      await TrackPlayer.play();
    } catch (error) {
      console.log('Error while fetching song queue: ' + error.message);
    }
  };

  //Plays a single song.
  const song = async (item) => {
    await setupPlayer();
    const song = [{ title: item.name, artwork: item.image, url: item.preview_url, artist: item.artists }];
    await TrackPlayer.setQueue(song);
    await TrackPlayer.play();
  };

  //Plays a single episode.
  const episode = async (item) => {
    await setupPlayer();
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

  return { player, play, pause, song, shuffle, episode };
};