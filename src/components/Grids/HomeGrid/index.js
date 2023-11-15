import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { shortenText } from '../../../utils/helpers';
import styles from './styles';

const HomeGrid = ({ items }) => (
  <View style={styles.cardView}>
    {items?.map((item, index) => (
      <TouchableOpacity key={index} style={styles.touchableCard}>
        <Image source={{ uri: item.track.album.images[0].url }} style={styles.image} />
        <Text style={styles.text}>{shortenText(item.track.album.name, 30)}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default HomeGrid;