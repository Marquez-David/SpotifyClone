import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import colors from '../../../utils/colors';
import styles from './styles';

import { ModalContext } from '../../../context/modal';

const PlayEpisodeButton = ({ item }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={styles.touchablePlay} onPress={() => openModal()}>
      <Foundation name='play' size={20} color={colors.spotifyBlack} />
    </TouchableOpacity>
  );
}

export default PlayEpisodeButton;