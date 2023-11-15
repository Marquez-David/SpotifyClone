import React, { useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { useButtonType } from '../../../hooks/useButtonType';
import { useButtonColor } from '../../../hooks/useButtonColor';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import colors from '../../../utils/colors';
import styles from './styles';

import { PlayerContext } from '../../../context/player';

const PlayQueueButton = ({ item }) => {
  const [shuffle, setShuffle] = useState(true);
  const { buttonType } = useButtonType(shuffle, 'shuffle', 'shuffle-disabled');
  const { buttonColor } = useButtonColor(shuffle, colors.spotifyGreen, colors.spotifyGray);
  const { playQueue } = useContext(PlayerContext);
  return (
    <View style={styles.touchableView}>
      <TouchableOpacity style={styles.touchableShuffle} onPress={() => setShuffle(!shuffle)}>
        <MaterialCommunityIcons name={buttonType} size={28} color={buttonColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchablePlay} onPress={() => playQueue(shuffle, item)}>
        <Foundation name='play' size={26} color={colors.spotifyBlack} />
      </TouchableOpacity>
    </View>
  );
}

export default PlayQueueButton;