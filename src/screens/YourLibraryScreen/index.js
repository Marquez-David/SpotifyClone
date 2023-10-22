import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { contentTypeStrings, modalDialogStrings } from '../../utils/strings';

import { useSavedPlaylists } from '../../hooks/useSavedPlaylists';
import { useSavedArtists } from '../../hooks/useSavedArtists';
import { useSavedPodcasts } from '../../hooks/useSavedPodcasts';
import { useSavedAlbums } from '../../hooks/useSavedAlbums';
import { useSavedEpisodes } from '../../hooks/userSavedEpisodes';
import { useSubcategory } from '../../hooks/useSubcategory';
import { ModalContext } from '../../context/modal';

import VerticalSlider from '../../components/VerticalSlider';
import FallbackDataCard from '../../components/FallbackDataCard';
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
  if (subcategory === contentTypeStrings.playlists) {
    data = playlists;
  } else if (subcategory === contentTypeStrings.artists) {
    data = artists;
  } else if (subcategory === contentTypeStrings.albums) {
    data = albums;
  } else if (subcategory === contentTypeStrings.episodes) {
    data = episodes;
  } else if (subcategory === contentTypeStrings.programs) {
    data = podcasts;
  }

  return data;
};

const YourLibraryScreen = () => {
  const [category, setCategory] = useState(contentTypeStrings.music);
  const { subcategory, setSubcategory } = useSubcategory(category);
  const { openModal } = useContext(ModalContext);

  const data = parseDataForSubcategory(subcategory);
  const isEmptyData = data?.length < 1;

  return (
    <View style={styles.background}>
      <View style={styles.headers}>
        <TouchableOpacity onPress={() => setCategory(contentTypeStrings.music)}>
          <Text
            style={category === contentTypeStrings.music ? styles.categoryWhiteText : styles.categoryGrayText}>
            {contentTypeStrings.music}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory(contentTypeStrings.podcasts)}>
          <Text
            style={category === contentTypeStrings.podcasts ? styles.categoryWhiteText : styles.categoryGrayText}>
            {contentTypeStrings.podcasts}
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
        <FallbackDataCard type={subcategory} onPressAction={() => openModal(modalDialogStrings.undeDevelopment)} />
      )}
    </View>
  );
};


export default YourLibraryScreen;