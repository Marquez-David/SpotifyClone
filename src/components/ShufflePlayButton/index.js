import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { shufflePlay } from '../../utils/strings';
import styles from './styles';

import { PlayerContext } from '../../context/player';

const ShufflePlayButton = () => {
  const item = useRoute().params.data;
  const { shuffle } = useContext(PlayerContext);
  return (
    <TouchableOpacity style={styles.shufflePlayTouchableOpacity} onPress={() => shuffle(item)}>
      <Text style={styles.touchableOpacityText}>{shufflePlay}</Text>
    </TouchableOpacity>
  );
}

export default ShufflePlayButton;