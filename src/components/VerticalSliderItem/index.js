import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import { libraryStrings } from '../../utils/Strings';

/**
 * This component renders an image and its related text data based on the provided "item" object and "subcategory." 
 * @param {*} param0 
 * @returns 
 */
const VerticalSliderItem = ({ data, subcategory }) => (
  <View key={data.id} style={styles.imageView}>
    <Image
      style={subcategory !== libraryStrings.artists ? styles.carouselImage : styles.carouselArtistsImage}
      source={{ uri: data.uri }}
    />
    <View style={styles.textView}>
      <Text style={styles.playlistNameText}>{data.name}</Text>
      {(subcategory != libraryStrings.artists && subcategory != libraryStrings.programs) &&
        <Text style={styles.ownerText}>{data.description}</Text>
      }
    </View>
  </View>
);

export default VerticalSliderItem;