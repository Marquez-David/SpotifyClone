import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import colors from '../../../utils/colors';
import styles from './styles';

import { PlayerContext } from '../../../context/player';

const PlayEpisodeButton = ({ item }) => {
  const { episode } = useContext(PlayerContext);
  return (
    <TouchableOpacity style={styles.touchablePlay} onPress={() => episode(item)}>
      <Foundation name='play' size={20} color={colors.spotifyBlack} />
    </TouchableOpacity>
  );
}

export default PlayEpisodeButton;