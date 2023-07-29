import React, { useState, useEffect } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { libraryStrings } from '../../utils/Strings';
import { getUserPlaylists, getSavedAlbums, getFollowingArtists } from '../../services/SpotifyRequests';
import VerticalSlider from '../../components/VerticalSlider';

/**
 * Render the VerticalSlider component with the corresponding data
 * @param {*} playlists 
 * @returns 
 */
function renderVerticalSlider(data, pressed) {
  var component;
  if (pressed === libraryStrings.playlists && data[0]) {
    component = <VerticalSlider items={data[0]} category={pressed} />
  } else if (pressed === libraryStrings.artists && data[1]) {
    component = <VerticalSlider items={data[1]} category={pressed} />
  } else if (pressed === libraryStrings.albums && data[2]) {
    component = <VerticalSlider items={data[2]} category={pressed} />
  }
  return component;
}

/**
 * Renders a green bar under the categories header, but only if a category is selected.
 * @returns 
 */
function renderPressedBar() {
  return <View style={styles.isPressedBar}></View>;
}

/**
 * Set the pressable state when user press the category
 * @param {*} pressable 
 * @param {*} setPressed 
 */
const onPressPressable = async (pressed, setPressed, setData) => {
  var data;
  setPressed(pressed);

  try {
    if (pressed === libraryStrings.playlists) {
      data = await getUserPlaylists();
    } else if (pressed === libraryStrings.artists) {
      data = await getFollowingArtists();
    } else if (pressed === libraryStrings.albums) {
      data = await getSavedAlbums();
    }
    setData(data);
  } catch (error) {
    console.log('Error while calling API: ' + error);
  }
}

const YourLibraryScreen = () => {
  const [pressed, setPressed] = useState(libraryStrings.playlists);

  const [playlists, setPlaylists] = useState(null);
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);

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

  return (
    <View style={styles.background}>
      <View style={styles.headers}>
        <Pressable onPress={() => console.log('Musica')}>
          <Text style={styles.screenHeaderText}>{libraryStrings.music}</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Podcasts')}>
          <Text style={styles.screenHeaderText}>{libraryStrings.podcasts}</Text>
        </Pressable>
      </View>
      <View style={styles.headers}>
        <Pressable
          style={styles.categoriesPressables}
          onPress={() => onPressPressable(libraryStrings.playlists, setPressed, setPlaylists)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.playlists}</Text>
          {pressed === libraryStrings.playlists && renderPressedBar()}
        </Pressable>
        <Pressable
          style={styles.categoriesPressables}
          onPress={() => onPressPressable(libraryStrings.artists, setPressed, setArtists)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.artists}</Text>
          {pressed === libraryStrings.artists && renderPressedBar()}
        </Pressable>
        <Pressable
          style={styles.categoriesPressables}
          onPress={() => onPressPressable(libraryStrings.albums, setPressed, setAlbums)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.albums}</Text>
          {pressed === libraryStrings.albums && renderPressedBar()}
        </Pressable>
      </View>
      {renderVerticalSlider([playlists, artists, albums], pressed)}
    </View>
  );
};

export default YourLibraryScreen;