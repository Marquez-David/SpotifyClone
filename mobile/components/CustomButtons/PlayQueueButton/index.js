import React, { useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { useButton } from '../../../hooks/useButton';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import colors from '../../../utils/colors';
import styles from './styles';

import { PlayerContext } from '../../../context/player';

const PlayQueueButton = ({ item }) => {
  const [shuffle, setShuffle] = useState(true);
  const { type } = useButton().type(shuffle, 'shuffle', 'shuffle-disabled');
  const { color } = useButton().color(shuffle, colors.spotifyGreen, colors.spotifyGray);
  const { playQueue } = useContext(PlayerContext);
  return (
    <View style={styles.touchableView}>
      <TouchableOpacity style={styles.touchableShuffle} onPress={() => setShuffle(!shuffle)}>
        <MaterialCommunityIcons name={type} size={28} color={color} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchablePlay} onPress={() => playQueue(shuffle, item)}>
        <Foundation name='play' size={26} color={colors.spotifyBlack} />
      </TouchableOpacity>
    </View>
  );
}

export default PlayQueueButton;