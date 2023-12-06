import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { shortenText, handleNavigation } from '../../../utils/helpers';
import styles from './styles';

const HomeGrid = ({ items }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardView}>
      {items?.map((item) => (
        <TouchableOpacity key={item.track.id} style={styles.touchableCard} onPress={() => handleNavigation(item.track.album, navigation)}>
          <Image source={{ uri: item.track.album.images[0].url }} style={styles.image} />
          <Text style={styles.text}>{shortenText(item.track.name, 30)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default HomeGrid;