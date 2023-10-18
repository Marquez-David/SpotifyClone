import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

import { handleNavigation } from '../../utils/helpers';

import { libraryStrings } from '../../utils/strings';

/**
 * This component renders an image and its related text data based on the provided "item" object and "subcategory." 
 * @param {*} param0 
 * @returns 
 */
const VerticalSliderItem = ({ data, subcategory, description }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.imageView} onPress={() => handleNavigation(data, navigation)}>
      <Image
        style={subcategory !== libraryStrings.artists ? styles.carouselImage : styles.carouselArtistsImage}
        source={{ uri: data.images[0].url }}
      />
      <View style={styles.textView}>
        <Text style={styles.playlistNameText}>{data.name}</Text>
        {(subcategory != libraryStrings.artists && subcategory != libraryStrings.programs) &&
          <Text style={styles.ownerText}>{description}</Text>
        }
      </View>
    </TouchableOpacity>
  )
};

export default VerticalSliderItem;