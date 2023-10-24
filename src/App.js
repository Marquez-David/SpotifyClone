import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LoginStackNavigation } from "./navigation/LoginStackNavigation";
import { BottomTabNavigation } from './navigation/BottomTabNavigation';

import { ModalProvider } from './context/modal';
import { PlayerProvider } from './context/player';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

/**
 * Verifies the validity of an hasAccess token and updates the state accordingly.
 * @param {*} setHasAccess 
 */
async function checkTokenValidity(setHasAccess) {
  const accessToken = await AsyncStorage.getItem("spotifyToken");
  const expirationDate = await AsyncStorage.getItem("tokenExpirationDate");
  //hasAccess token has been set previously
  if (accessToken) {
    console.log(accessToken);
    const currentTime = Date.now();
    if (currentTime < parseInt(expirationDate)) {
      setHasAccess(1);
    } else {
      AsyncStorage.removeItem("spotifyToken");
      AsyncStorage.removeItem("tokenExpirationDate");
      setHasAccess(0);
    }
  } else {
    setHasAccess(0);
  }
}

/**
 * Renders the appropriate navigation component based on user access
 * @param {*} hasAccess 
 * @returns 
 */
const renderInitialComponent = (hasAccess) => {
  if (hasAccess === 0) {
    return <LoginStackNavigation />;
  } else if (hasAccess === 1) {
    return <BottomTabNavigation />

  }
};

export default function App() {
  const [hasAccess, setHasAccess] = useState(-1); //-1 = init state, 0 = no access, 1 = access
  useEffect(() => { checkTokenValidity(setHasAccess) }, []);
  const queryClient = new QueryClient();
  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <PlayerProvider>
            {renderInitialComponent(hasAccess)}
          </PlayerProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </ModalProvider>
  );
}