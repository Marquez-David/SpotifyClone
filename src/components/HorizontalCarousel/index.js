import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { spotifyImage } from '../../utils/constants';
import { carouselStrings, modalDialogStrings } from '../../utils/strings';
import { parseCarouselData, handleNavigation } from '../../utils/helpers';
import styles from './styles';

import { ModalContext } from '../../context/modal';


const HorizontalCarousel = ({ items, title }) => {
  const navigation = useNavigation();
  const { openModal } = useContext(ModalContext);
  //title === carouselStrings.relatedArtists ? null : handleNavigation(parseCarouselData(item, title).data, navigation)
  return (
    <View style={styles.carouseView}>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={title === carouselStrings.relatedArtists ? styles.artistImageView : styles.imageView}
            onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
            <Image style={title === carouselStrings.relatedArtists ? styles.artistImage : styles.image} source={{ uri: parseCarouselData(item, title).image || spotifyImage }} />
            <Text style={title === carouselStrings.relatedArtists ? styles.artistDescriptionText : styles.descriptionText}>{parseCarouselData(item, title).description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HorizontalCarousel;