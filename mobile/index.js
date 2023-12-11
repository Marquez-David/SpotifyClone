import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import { PlaybackService } from './services/playback.js';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);