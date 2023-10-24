import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from '../utils/colors';

import AlbumScreen from '../screens/AlbumScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import PodcastScreen from '../screens/PodcastScreen';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';

import { PlayerProvider } from '../context/player';

const HomeStack = createNativeStackNavigator();
export const HomeStackNavigation = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{ headerShown: false }} />
    <HomeStack.Screen
      name="Album"
      component={AlbumScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerStyle: { backgroundColor: colors.appBackground },
        headerTintColor: colors.spotifyWhite,
        headerTitleAlign: 'center',
        headerRight: () => (<Header params={route.params.data} />)
      })}
    />
    <HomeStack.Screen
      name="Playlist"
      component={PlaylistScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerStyle: { backgroundColor: colors.appBackground },
        headerTintColor: colors.spotifyWhite,
        headerTitleAlign: 'center',
        headerRight: () => (<Header params={route.params.data} />)
      })}
    />
    <HomeStack.Screen
      name="Podcast"
      component={PodcastScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerStyle: { backgroundColor: colors.appBackground },
        headerTintColor: colors.spotifyWhite,
        headerTitleAlign: 'center',
        headerRight: () => (<Header params={route.params.data} />)
      })}
    />
  </HomeStack.Navigator>
);