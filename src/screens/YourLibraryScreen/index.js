import React, { useState, useEffect } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { libraryStrings, verticalSliderStrings, emptyDataStrings } from '../../utils/Strings';
import { getUserPlaylists, getSavedAlbums, getFollowingArtists } from '../../services/SpotifyRequests';

import VerticalSlider from '../../components/VerticalSlider';
import EmptyDataCard from '../../components/EmptyDataCard';
import SubcategorySelector from '../../components/SubcategorySelector';

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
        const response = await getUserPlaylists();
        setPlaylists(response);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchPlaylistsData();
  }, []);

  return { playlists };
};

/**
 * This custom hook fetches and manages the user's following artists data through an asynchronous API call. 
 * It returns the following artists data and the corresponding function to update the state with the fetched artists.
 * @returns 
 */
const useArtists = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        const response = await getFollowingArtists();
        setArtists(response);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchArtistsData();
  }, []);

  return { artists };
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
        const response = await getSavedAlbums();
        setAlbums(response);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchAlbumsData();
  }, []);

  return { albums };
};

const useSubcategory = (headerPressed) => {
  const [subcategory, setSubcategory] = useState(libraryStrings.playlists);

  useEffect(() => {
    const handleSubcategories = () => {
      if (headerPressed === libraryStrings.music) {
        setSubcategory(libraryStrings.playlists);
      } else {
        setSubcategory(libraryStrings.episodes);
      }
    };

    handleSubcategories();
  }, [headerPressed]);

  return { subcategory, setSubcategory };
}

/**
 * Render the VerticalSlider component with the corresponding data
 * @param {*} playlists 
 * @returns 
 */
function renderVerticalSlider(data, pressed) {
  var component;
  if (pressed === libraryStrings.playlists && data[0]) {
    component = data[0].data.items.length > 0 ?
      <VerticalSlider items={data[0].data.items} category={pressed} searchLabel={verticalSliderStrings.searchForPlayLists} /> :
      <EmptyDataCard
        title={emptyDataStrings.playlistsTitle}
        description={emptyDataStrings.playlistsDescription}
        buttonText={emptyDataStrings.browseMusic}
      />
  } else if (pressed === libraryStrings.artists && data[1]) {
    component = data[1].data.artists.items.length > 0 ?
      <VerticalSlider items={data[1].data.artists.items} category={pressed} searchLabel={verticalSliderStrings.searchForArtists} /> :
      <EmptyDataCard
        title={emptyDataStrings.artistsTitle}
        description={emptyDataStrings.artistsDescription}
        buttonText={emptyDataStrings.browseMusic}
      />
  } else if (pressed === libraryStrings.albums && data[2]) {
    component = data[2].data.items.length > 0 ?
      <VerticalSlider items={data[2].data.items} category={pressed} searchLabel={verticalSliderStrings.searchForAlbums} /> :
      <EmptyDataCard
        title={emptyDataStrings.albumsTitle}
        description={emptyDataStrings.albumsDescription}
        buttonText={emptyDataStrings.browseMusic}
      />
  }
  return component;
}


const YourLibraryScreen = () => {
  const { playlists } = usePlaylists();
  const { artists } = useArtists();
  const { albums } = useAlbums();

  const [category, setCategory] = useState(libraryStrings.music);
  const { subcategory, setSubcategory } = useSubcategory(category);

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
        <SubcategorySelector category={category} subcategory={subcategory} setSubcategory={setSubcategory} />
      </View>
    </View>
  );
};

export default YourLibraryScreen;