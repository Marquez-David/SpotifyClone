import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { contentTypeStrings } from '../../utils/strings';
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

  if (category === contentTypeStrings.music) {
    const musicTexts = [contentTypeStrings.playlists, contentTypeStrings.artists, contentTypeStrings.albums];
    for (let i = 0; i < musicTexts.length; i++) {
      components.push(
        <TouchableOpacity key={i} style={styles.subcategoryTouchableOpacity} onPress={() => setSubcategory(musicTexts[i])}>
          <Text style={subcategory === musicTexts[i] ? styles.subcategoryHeaderWhiteText : styles.subcategoryHeaderGrayText}>{musicTexts[i]}</Text>
          {subcategory === musicTexts[i] && renderPressedBar()}
        </TouchableOpacity>
      );
    }
  } else {
    const podcastsTexts = [contentTypeStrings.episodes, contentTypeStrings.downloads, contentTypeStrings.programs];
    for (let i = 0; i < podcastsTexts.length; i++) {
      components.push(
        <TouchableOpacity key={i} style={styles.subcategoryTouchableOpacity} onPress={() => setSubcategory(podcastsTexts[i])}>
          <Text style={subcategory === podcastsTexts[i] ? styles.subcategoryHeaderWhiteText : styles.subcategoryHeaderGrayText}>{podcastsTexts[i]}</Text>
          {subcategory === podcastsTexts[i] && renderPressedBar()}
        </TouchableOpacity>
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