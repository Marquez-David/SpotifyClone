import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import ConditionalImage from '../ConditionalImage';

import { contentType } from '../../utils/strings';
import { parseCarouselData, handleNavigation } from '../../utils/helpers';
import styles from './styles';

const HorizontalCarousel = ({ items, title, isLoading }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.carouseView}>
      {items && <Text style={styles.titleText}>{title}</Text>}
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const { data, type, image, description } = parseCarouselData(item, title);
          return (
            <TouchableOpacity
              style={type === contentType.artist ? styles.artistImageView : styles.imageView}
              onPress={() => handleNavigation(data, navigation)}>
              <ConditionalImage image={image} size={40} style={type === contentType.artist ? styles.artistImage : styles.image} />
              <Text style={styles.descriptionText}>{description}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default HorizontalCarousel;