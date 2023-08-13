import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';
import { homeStrings, carouselStrings } from '../../utils/strings';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { getRecentlyPlayedSongs, getUserPlaylists, getArtists, getArtistAlbums, getPodcasts } from '../../services/SpotifyRequests';
import HorizontalCarousel from '../../components/HorizontalCarousel';

/**
 * This custom hook fetches and manages data for recently played songs through an asynchronous API call. 
 * It returns the recently played songs data as part of the state.
 * @returns 
 */
const useRecentlySongs = () => {
  const [recentlySongs, setRecentlySongs] = useState(null);

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

  return { recentlySongs };
};

/**
 * This custom hook fetches and manages data for user playlists through an asynchronous API call. 
 * It returns the playlists data as part of the state.
 * @returns 
 */
const usePlaylists = () => {
  const [playlists, setPlaylists] = useState(null);

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

  return { playlists };
};

/**
 * This custom hook fetches and manages data for artists and their albums through asynchronous API calls. 
 * It returns the fetched "artists" list as part of the state.
 * @returns 
 */
const useArtistsAlbums = () => {
  const [artists, setArtists] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);

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

  return { artistAlbums };
};

/**
 * This custom hook fetches and manages podcasts data through an asynchronous API call.
 * It returns the fetched podcasts data as part of the state.
 * @returns 
 */
const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState(null);

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

  return { podcasts };
};

/**
 * This custom hook determines the appropriate greeting message based on the current time and returns it as part of the state. 
 * The message is updated whenever message changes.
 * @returns 
 */
const useMessage = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const timerMessage = () => {
      const currentTime = new Date().getHours();
      var message = homeStrings.goodEvening;
      if (currentTime > 6 && currentTime < 12) {
        message = homeStrings.goodMorning;
      } else if (currentTime >= 12 && currentTime < 19) {
        message = homeStrings.goodAfternoon;
      }
      setMessage(message);
    };

    timerMessage();
  }, [message]);

  return { message };
};

/**
 * Iterates through data and creates HorizontalCarousel components with the corresponding data using titles stored, 
 * then returns these components as a list.
 * @param {*} data 
 * @returns 
 */
const renderHorizontalCarousels = (data) => {
  var components = [];
  const horizontalCarouselStrings = [carouselStrings.recentlyPlayed, carouselStrings.yourPlaylists, carouselStrings.findOutMoreAbout, carouselStrings.yourPodcasts];
  for (var i = 0; i < data.length; i++) {
    if (data[i]) {
      components.push(<HorizontalCarousel key={i} items={data[i]} title={horizontalCarouselStrings[i]} />)
    }
  }

  return components;
};

const HomeScreen = () => {
  const { recentlySongs } = useRecentlySongs();
  const { playlists } = usePlaylists();
  const { artistAlbums } = useArtistsAlbums();
  const { podcasts } = usePodcasts();
  const { message } = useMessage();

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