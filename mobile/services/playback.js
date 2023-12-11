import TrackPlayer from 'react-native-track-player';

/**
 * Sets up event listeners for remote control commands in a music playback application.
 * @returns {Promise<void>} - A promise that resolves when the event listeners are set up.
 */
export const PlaybackService = async () => {
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
