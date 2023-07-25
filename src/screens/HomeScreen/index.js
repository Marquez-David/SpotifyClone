import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

import styles from './styles';
import colors from '../../utils/Colors';
import { homeStrings, carouselStrings } from '../../utils/Strings';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { getRecentlyPlayedSongs, getUserPlaylists, getArtists, getArtistAlbums, getPodcasts } from '../../services/SpotifyRequests';
import HorizontalCarousel from '../../components/HorizontalCarousel';

/**
 * Stores de carousel strings. Order is important for the Carousel render
 */
const horizontalCarouselStrings = [
  carouselStrings.recentlyPlayed,
  carouselStrings.yourPlaylists,
  carouselStrings.findOutMoreAbout,
  carouselStrings.yourPodcasts,
];

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

/**
 * Iterates through data and creates HorizontalCarousel components with the corresponding data using titles stored, 
 * then returns these components as a list.
 * @param {*} data 
 * @returns 
 */
function renderHorizontalCarousels(data) {
  var components = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i]) {
      components.push(<HorizontalCarousel key={i} items={data[i]} title={horizontalCarouselStrings[i]} />)
    }
  }

  return components;
}

const HomeScreen = () => {
  const [recentlySongs, setRecentlySongs] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [artists, setArtists] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);
  const [podcasts, setPodcasts] = useState(null);

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

  useEffect(() => {
    const fetchPodcastsData = async () => {
      try {
        const podcasts = await getPodcasts();
        setPodcasts(podcasts);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPodcastsData();
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
        {renderHorizontalCarousels([recentlySongs, playlists, artistAlbums, podcasts])}
      </View>
    </ScrollView >
  );
};

export default HomeScreen;