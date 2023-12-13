import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { usePlayer } from './hooks/usePlayer';
import { useToken } from './hooks/useToken';
import { ModalProvider } from './context/modal';
import { PlayerProvider } from './context/player';

import { LoginStackNavigation } from "./navigation/LoginStackNavigation";
import { BottomTabNavigation } from './navigation/BottomTabNavigation';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const { setupPlayer } = usePlayer();
  const { token } = useToken();
  const queryClient = new QueryClient();

  useEffect(() => { setupPlayer(); }, []);

  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <PlayerProvider>
            {token === null ? <SplashScreen /> : token.length > 0 ? <BottomTabNavigation /> : <LoginStackNavigation />}
          </PlayerProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </ModalProvider>
  );
}