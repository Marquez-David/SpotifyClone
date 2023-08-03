import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { libraryStrings } from '../../utils/Strings';
import styles from './styles';

/**
 * Renders a green bar under the categories header, but only if a category is selected.
 * @returns 
 */
const renderPressedBar = () => (
  <View style={styles.isPressedBar}></View>
);

/**
 * Generates subcategory selector components based on the category and their pressed state.
 * @param {*} category 
 * @returns 
 */
const renderSubcategorySelector = (category, subcategory, setSubcategory) => {
  const components = [];

  if (category === libraryStrings.music) {
    const musicTexts = [libraryStrings.playlists, libraryStrings.artists, libraryStrings.albums];
    for (let i = 0; i < musicTexts.length; i++) {
      components.push(
        <Pressable style={styles.subcategoryPressables} onPress={() => setSubcategory(musicTexts[i])}>
          <Text style={subcategory === musicTexts[i] ? styles.subcategoryHeaderWhiteText : styles.subcategoryHeaderGrayText}>{musicTexts[i]}</Text>
          {subcategory === musicTexts[i] && renderPressedBar()}
        </Pressable>
      );
    }
  } else {
    const podcastsTexts = [libraryStrings.episodes, libraryStrings.downloads, libraryStrings.programs];
    for (let i = 0; i < podcastsTexts.length; i++) {
      components.push(
        <Pressable style={styles.subcategoryPressables} onPress={() => setSubcategory(podcastsTexts[i])}>
          <Text style={subcategory === podcastsTexts[i] ? styles.subcategoryHeaderWhiteText : styles.subcategoryHeaderGrayText}>{podcastsTexts[i]}</Text>
          {subcategory === podcastsTexts[i] && renderPressedBar()}
        </Pressable>
      );
    }
  }

  return components;
};

const SubcategorySelector = ({ category, subcategory, setSubcategory }) => {
  return (
    <>
      {renderSubcategorySelector(category, subcategory, setSubcategory)}
    </>
  );
};

export default SubcategorySelector;