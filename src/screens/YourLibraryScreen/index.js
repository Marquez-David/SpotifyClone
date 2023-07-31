import React, { useState, useEffect } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { libraryStrings, verticalSliderStrings, emptyDataStrings } from '../../utils/Strings';
import { getUserPlaylists, getSavedAlbums, getFollowingArtists } from '../../services/SpotifyRequests';

import VerticalSlider from '../../components/VerticalSlider';
import EmptyDataCard from '../../components/EmptyDataCard';

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

/**
 * Renders a green bar under the categories header, but only if a category is selected.
 * @returns 
 */
function renderPressedBar() {
  return <View style={styles.isPressedBar}></View>;
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

  const onPressPressable = async (pressed) => {
    var data;
    setPressed(pressed);
  
    try {
      if (pressed === libraryStrings.playlists) {
        data = await getUserPlaylists();
        setPlaylists(data);
      } else if (pressed === libraryStrings.artists) {
        data = await getFollowingArtists();
        setArtists(data);
      } else if (pressed === libraryStrings.albums) {
        data = await getSavedAlbums();
        setAlbums(data);
      }
    } catch (error) {
      console.log('Error while calling API: ' + error);
    }
  }

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
          onPress={() => onPressPressable(libraryStrings.playlists)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.playlists}</Text>
          {pressed === libraryStrings.playlists && renderPressedBar()}
        </Pressable>
        <Pressable
          style={styles.categoriesPressables}
          onPress={() => onPressPressable(libraryStrings.artists)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.artists}</Text>
          {pressed === libraryStrings.artists && renderPressedBar()}
        </Pressable>
        <Pressable
          style={styles.categoriesPressables}
          onPress={() => onPressPressable(libraryStrings.albums)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.albums}</Text>
          {pressed === libraryStrings.albums && renderPressedBar()}
        </Pressable>
      </View>
      {renderVerticalSlider([playlists, artists, albums], pressed)}
    </View>
  );
};

export default YourLibraryScreen;