import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { libraryStrings, verticalSliderStrings, emptyDataStrings } from '../../utils/strings';

import { getUserPlaylists, getSavedAlbums, getFollowingArtists, getSavedPodcasts, getSavedEpisodes } from '../../services/SpotifyRequests';

import VerticalSlider from '../../components/VerticalSlider';
import EmptyDataCard from '../../components/EmptyDataCard';
import SubcategorySelector from '../../components/SubcategorySelector';

/**
 * This custom hook manages the subcategory state based on the category value. 
 * @param {*} headerPressed 
 * @returns 
 */
const useSubcategory = (category) => {
  const [subcategory, setSubcategory] = useState(libraryStrings.playlists);

  useEffect(() => {
    const handleSubcategories = () => {
      if (category === libraryStrings.music) {
        setSubcategory(libraryStrings.playlists);
      } else {
        setSubcategory(libraryStrings.episodes);
      }
    };

    handleSubcategories();
  }, [category]);

  return { subcategory, setSubcategory };
};

/**
 * This custom hook fetches and manages the user's playlists data through an asynchronous API call. 
 * It returns the playlists data and the corresponding function to update the state with the fetched playlists.
 * @returns 
 */
const usePlaylists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchPlaylistsData = async () => {
      try {
        let data = await getUserPlaylists();
        setPlaylists(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPlaylistsData();
  }, []);

  return { playlists, setPlaylists };
};

/**
 * This custom hook fetches and manages the user's favorite artists data through an asynchronous API call. 
 * It returns the favorite artists data and the corresponding function to update the state with the fetched artists.
 * @returns 
 */
const useArtists = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        let data = await getFollowingArtists();
        setArtists(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchArtistsData();
  }, []);

  return { artists, setArtists };
};

/**
 * This custom hook fetches and manages the user's saved albums data through an asynchronous API call. 
 * It returns the saved albums data and the corresponding function to update the state with the fetched albums.
 * @returns 
 */
const useAlbums = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchAlbumsData = async () => {
      try {
        let data = await getSavedAlbums();
        setAlbums(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchAlbumsData();
  }, []);

  return { albums, setAlbums };
};

/**
 * This custom hook fetches and manages the user's saved podcasts data through an asynchronous API call. 
 * It returns the saved podcasts data and the corresponding function to update the state with the fetched podcasts.
 * @returns 
 */
const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState(null);

  useEffect(() => {
    const fetchPodcastData = async () => {
      try {
        let data = await getSavedPodcasts();
        setPodcasts(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPodcastData();
  }, []);

  return { podcasts, setPodcasts };
};

/**
 * This custom hook fetches and manages the user's saved episodes data through an asynchronous API call. 
 * It returns the saved episodes data and the corresponding function to update the state with the fetched episodes.
 * @returns 
 */
const useEpisodes = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      try {
        let data = await getSavedEpisodes();
        setEpisodes(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchEpisodesData();
  }, []);

  return { episodes, setEpisodes };
};

/**
 * Fetches data based on the provided subcategory from different hooks.
 * @param {*} subcategory 
 * @returns 
 */
const parseDataForSubcategory = (subcategory) => {
  const { playlists } = usePlaylists();
  const { artists } = useArtists();
  const { albums } = useAlbums();
  const { podcasts } = usePodcasts();
  const { episodes } = useEpisodes();

  let data;
  if (subcategory === libraryStrings.playlists) {
    data = playlists?.data.items;
  } else if (subcategory === libraryStrings.artists) {
    data = artists?.data.artists.items;
  } else if (subcategory === libraryStrings.albums) {
    data = albums?.data.items;
  } else if (subcategory === libraryStrings.episodes) {
    data = episodes?.data.items;
  } else if (subcategory === libraryStrings.programs) {
    data = podcasts?.data.items;
  }

  return data;
};

const YourLibraryScreen = () => {
  const [category, setCategory] = useState(libraryStrings.music);
  const { subcategory, setSubcategory } = useSubcategory(category);

  data = parseDataForSubcategory(subcategory);
  const isEmptyData = data && data.length < 1;

  return (
    <View style={styles.background}>
      <View style={styles.headers}>
        <Pressable onPress={() => setCategory(libraryStrings.music)}>
          <Text
            style={category === libraryStrings.music ? styles.categoryWhiteText : styles.categoryGrayText}>
            {libraryStrings.music}
          </Text>
        </Pressable>
        <Pressable onPress={() => setCategory(libraryStrings.podcasts)}>
          <Text
            style={category === libraryStrings.podcasts ? styles.categoryWhiteText : styles.categoryGrayText}>
            {libraryStrings.podcasts}
          </Text>
        </Pressable>
      </View>
      <View style={styles.headers}>
        <SubcategorySelector
          category={category}
          subcategory={subcategory}
          setSubcategory={setSubcategory}
        />
      </View>
      {data == undefined ?
        null : !isEmptyData ? (
          <VerticalSlider
            category={category}
            subcategory={subcategory}
            data={data}
          />
        ) : (
          <EmptyDataCard subcategory={subcategory} />
        )}
    </View>
  );
};


export default YourLibraryScreen;