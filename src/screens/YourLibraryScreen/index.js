import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { libraryStrings } from '../../utils/strings';

import { useSavedPlaylists } from '../../hooks/useSavedPlaylists';
import { useSavedArtists } from '../../hooks/useSavedArtists';
import { useSavedPodcasts } from '../../hooks/useSavedPodcasts';
import { useSavedAlbums } from '../../hooks/useSavedAlbums';
import { useSavedEpisodes } from '../../hooks/userSavedEpisodes';
import { useSubcategory } from '../../hooks/useSubcategory';

import VerticalSlider from '../../components/VerticalSlider';
import EmptyDataCard from '../../components/EmptyDataCard';
import SubcategorySelector from '../../components/SubcategorySelector';

/**
 * Fetches data based on the provided subcategory from different hooks.
 * @param {*} subcategory 
 * @returns 
 */
const parseDataForSubcategory = (subcategory) => {
  const { playlists } = useSavedPlaylists();
  const { artists } = useSavedArtists();
  const { podcasts } = useSavedPodcasts();
  const { albums } = useSavedAlbums();
  const { episodes } = useSavedEpisodes();

  let data;
  if (subcategory === libraryStrings.playlists) {
    data = playlists;
  } else if (subcategory === libraryStrings.artists) {
    data = artists;
  } else if (subcategory === libraryStrings.albums) {
    data = albums;
  } else if (subcategory === libraryStrings.episodes) {
    data = episodes;
  } else if (subcategory === libraryStrings.programs) {
    data = podcasts;
  }

  return data;
};

const YourLibraryScreen = () => {
  const [category, setCategory] = useState(libraryStrings.music);
  const { subcategory, setSubcategory } = useSubcategory(category);

  const data = parseDataForSubcategory(subcategory);
  const isEmptyData = data?.length < 1;

  return (
    <View style={styles.background}>
      <View style={styles.headers}>
        <TouchableOpacity onPress={() => setCategory(libraryStrings.music)}>
          <Text
            style={category === libraryStrings.music ? styles.categoryWhiteText : styles.categoryGrayText}>
            {libraryStrings.music}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory(libraryStrings.podcasts)}>
          <Text
            style={category === libraryStrings.podcasts ? styles.categoryWhiteText : styles.categoryGrayText}>
            {libraryStrings.podcasts}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headers}>
        <SubcategorySelector
          category={category}
          subcategory={subcategory}
          setSubcategory={setSubcategory}
        />
      </View>
      {data && !isEmptyData ? (
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