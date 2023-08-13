import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

import { parseLibraryData } from '../../utils/helpers';

import { libraryStrings } from '../../utils/strings';

/**
 * This component renders an image and its related text data based on the provided "item" object and "subcategory." 
 * @param {*} param0 
 * @returns 
 */
const VerticalSliderItem = ({ data, subcategory }) => {
  const navigation = useNavigation();
  const { description, url, name, id } = parseLibraryData(data, subcategory);
  
  return (
    <Pressable key={id} style={styles.imageView} onPress={() => navigation.navigate("Tracklist", { title: data.name, data: data.album })}>
      <Image
        style={subcategory !== libraryStrings.artists ? styles.carouselImage : styles.carouselArtistsImage}
        source={{ uri: url }}
      />
      <View style={styles.textView}>
        <Text style={styles.playlistNameText}>{name}</Text>
        {(subcategory != libraryStrings.artists && subcategory != libraryStrings.programs) &&
          <Text style={styles.ownerText}>{description}</Text>
        }
      </View>
    </Pressable>
  )
};

export default VerticalSliderItem;