import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import colors from '../utils/colors';

import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigation from './BottomTabNavigation';
import TracklistScreen from '../screens/TracklistScreen';
import Header from '../components/Header';



const Stack = createNativeStackNavigator();
export function NavigationLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen
          name="Tracklist"
          component={TracklistScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: { backgroundColor: colors.appBackground },
            headerTintColor: colors.spotifyWhite,
            headerTitleAlign: 'center',
            headerRight: () => (<Header params={route.params} />)
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function NavigationHome() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracklist"
          component={TracklistScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: { backgroundColor: colors.appBackground },
            headerTintColor: colors.spotifyWhite,
            headerTitleAlign: 'center',
            headerRight: () => (<Header params={route.params} />)
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}