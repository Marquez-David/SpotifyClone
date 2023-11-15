import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AlbumScreen from '../screens/AlbumScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import PodcastScreen from '../screens/PodcastScreen';
import ArtistScreen from '../screens/ArtistScreen';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();
export const HomeStackNavigation = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{ headerShown: false }} />
    <HomeStack.Screen name="Album" component={AlbumScreen} options={() => ({ headerShown: false })} />
    <HomeStack.Screen name="Playlist" component={PlaylistScreen} options={() => ({ headerShown: false })} />
    <HomeStack.Screen name="Podcast" component={PodcastScreen} options={() => ({ headerShown: false })} />
    <HomeStack.Screen name="Artist" component={ArtistScreen} options={() => ({ headerShown: false })} />
  </HomeStack.Navigator>
);