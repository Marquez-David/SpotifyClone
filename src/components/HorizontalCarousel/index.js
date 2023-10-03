import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

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
          <Pressable style={title === carouselStrings.relatedArtists ? styles.artistImageView : styles.imageView}
            onPress={() => title === carouselStrings.relatedArtists ? null : handleNavigation(parseCarouselData(item, title).data, navigation)}>
            <Image style={title === carouselStrings.relatedArtists ? styles.carouselArtistImage : styles.carouselImage} source={{ uri: parseCarouselData(item, title).data.images[0].url }} />
            <Text style={title === carouselStrings.relatedArtists ? styles.artistDescriptionText : styles.descriptionText}>{parseCarouselData(item, title).description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default HorizontalCarousel;