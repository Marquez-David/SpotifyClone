import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

import styles from './Styles';
import colors from '../utils/Colors';
import { homeStrings, carouselStrings } from '../utils/Strings';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { getRecentlyPlayedSongs, getUserPlaylists, getArtists, getArtistAlbums } from '../services/SpotifyRequests';
import HorizontalCarousel from '../components/HorizontalCarousel';

/**
 * Selects a greeting message based on the current time.
 * @returns message
 */
function timerMessage(setMessage) {
  const currentTime = new Date().getHours();
  var message = homeStrings.goodEvening;
  if (currentTime > 6 && currentTime < 12) {
    message = homeStrings.goodMorning;
  } else if (currentTime >= 12 && currentTime < 19) {
    message = homeStrings.goodAfternoon;
  }
  setMessage(message);
}

function renderComponent(data, title) {
  if (data) {
    return <HorizontalCarousel items={data} title={title} />
  }
}

const HomeScreen = () => {
  const [recentlySongs, setRecentlySongs] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [artists, setArtists] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);

  useEffect(() => {
    const fetchSongsData = async () => {
      try {
        const recentlyPlayedSongs = await getRecentlyPlayedSongs();
        setRecentlySongs(recentlyPlayedSongs);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchSongsData();
  }, []);

  useEffect(() => {
    const fetchPlaylistsData = async () => {
      try {
        const playlists = await getUserPlaylists();
        setPlaylists(playlists);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPlaylistsData();
  }, []);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        const artists = await getArtists();
        setArtists(artists);

        const artistAlbums = await getArtistAlbums(artists.data.items[0].id);
        setArtistAlbums(artistAlbums);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchArtistsData();
  }, []);

  const [message, setMessage] = useState(null);
  useEffect(() => { timerMessage(setMessage) }, [message]);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeHeaderText}>{message}</Text>
        <Ionicons.Button
          name='notifications-outline'
          size={27} backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('Notificacion')}>
        </Ionicons.Button>
        <Ionicons.Button
          name='time-outline'
          size={27}
          backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('Timer')}>
        </Ionicons.Button>
        <Ionicons.Button
          name='settings-outline'
          size={27}
          backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('Settings')}>
        </Ionicons.Button>
      </View>
      <View style={styles.flatListContainer}>
        {renderComponent(recentlySongs, carouselStrings.recentlyPlayed)}
        {renderComponent(playlists, carouselStrings.yourPlaylists)}
        {renderComponent(artistAlbums, carouselStrings.findOutMoreAbout)}
      </View>
    </ScrollView >
  );
};

export default HomeScreen;