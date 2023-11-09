import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ConditionalImage from '../../ConditionalImage';

import { handleNavigation } from '../../../utils/helpers';
import styles from './styles';

const ArtistsCarousel = ({ artists }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.carouseView}>
      <FlatList
        data={artists}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(artist) => (
          <TouchableOpacity style={styles.imageView} onPress={() => handleNavigation(artist.item, navigation)}>
            <ConditionalImage image={artist.item.images[0]?.url} size={40} style={styles.image} />
            <Text style={styles.descriptionText}>{artist.item.name}</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
};

export default ArtistsCarousel;