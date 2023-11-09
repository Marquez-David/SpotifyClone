import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YourLibraryScreen from '../screens/YourLibraryScreen';
import AlbumScreen from '../screens/AlbumScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import PodcastScreen from '../screens/PodcastScreen';
import ArtistScreen from '../screens/ArtistScreen';

const LibraryStack = createNativeStackNavigator();
export const LibraryStackNavigation = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen name="LibraryStack" component={YourLibraryScreen} options={{ headerShown: false }} />
    <LibraryStack.Screen name="Playlist" component={PlaylistScreen} options={{ headerShown: false }} />
    <LibraryStack.Screen name="Album" component={AlbumScreen} options={() => ({ headerShown: false })} />
    <LibraryStack.Screen name="Podcast" component={PodcastScreen} options={() => ({ headerShown: false })} />
    <LibraryStack.Screen name="Artist" component={ArtistScreen} options={() => ({ headerShown: false })} />
  </LibraryStack.Navigator>
);