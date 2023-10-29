import TrackPlayer from 'react-native-track-player';
import { PlayerContext } from '../context/player';

module.exports = async function () {
  try {
    // Play when the remote play button is pressed
    TrackPlayer.addEventListener('remote-play', () => {
      TrackPlayer.play();
    });

    // Pause when the remote pause button is pressed
    TrackPlayer.addEventListener('remote-pause', () => {
      TrackPlayer.pause();
    });

    // Skip to the next track when the remote next button is pressed
    TrackPlayer.addEventListener('remote-next', () => {
      TrackPlayer.skipToNext();
    });

    // Skip to the previous track when the remote previous button is pressed
    TrackPlayer.addEventListener('remote-previous', () => {
      TrackPlayer.skipToPrevious();
    });

    // Pause when the playback queue has ended.
    TrackPlayer.addEventListener('playback-queue-ended', () => {
      TrackPlayer.pause();
    });
  } catch (error) {
    console.log(error)
  }
};
