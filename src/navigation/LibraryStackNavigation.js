import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from '../utils/colors';

import YourLibraryScreen from '../screens/YourLibraryScreen';
import AlbumScreen from '../screens/AlbumScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import PodcastScreen from '../screens/PodcastScreen';
import ArtistScreen from '../screens/ArtistScreen';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import { PlayerProvider } from '../context/player';

const LibraryStack = createNativeStackNavigator();
export const LibraryStackNavigation = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen name="LibraryStack" component={YourLibraryScreen} options={{ headerShown: false }} />
    <LibraryStack.Screen
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
    <LibraryStack.Screen
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
    <LibraryStack.Screen
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
    <LibraryStack.Screen name="Artist" component={ArtistScreen} options={() => ({ headerShown: false })} />
  </LibraryStack.Navigator>
);