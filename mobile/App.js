import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useToken } from './hooks/useToken';
import { ModalProvider } from './context/modal';
import { PlayerProvider } from './context/player';

import { LoginStackNavigation } from "./navigation/LoginStackNavigation";
import { BottomTabNavigation } from './navigation/BottomTabNavigation';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const { state } = usePlaybackState();
  const { token } = useToken();

  !state && TrackPlayer.setupPlayer();
  const queryClient = new QueryClient();

  console.log(token)

  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <PlayerProvider>
            {token ? token.length > 0 ? <BottomTabNavigation /> : <LoginStackNavigation /> : <SplashScreen />}
          </PlayerProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </ModalProvider>
  );
}