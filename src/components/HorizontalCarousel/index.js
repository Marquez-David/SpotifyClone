import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { spotifyImage } from '../../utils/constants';
import { carouselStrings } from '../../utils/strings';
import styles from './styles';

import { parseCarouselData, handleNavigation } from '../../utils/helpers';

const HorizontalCarousel = ({ items, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.carouseView}>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={title === carouselStrings.relatedArtists ? styles.artistImageView : styles.imageView}
            onPress={() => title === carouselStrings.relatedArtists ? null : handleNavigation(parseCarouselData(item, title).data, navigation)}>
            <Image style={title === carouselStrings.relatedArtists ? styles.carouselArtistImage : styles.carouselImage} source={{ uri: parseCarouselData(item, title).image || spotifyImage }} />
            <Text style={title === carouselStrings.relatedArtists ? styles.artistDescriptionText : styles.descriptionText}>{parseCarouselData(item, title).description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HorizontalCarousel;