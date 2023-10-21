import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { modalDialogStrings, albumStrings } from '../../utils/strings';
import styles from './styles';

import { ModalContext } from '../../context/modal';

const ShufflePlayButton = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity onPress={() => openModal(modalDialogStrings.undeDevelopment)} style={styles.shufflePlayTouchableOpacity}>
      <Text style={styles.touchableOpacityText}>{albumStrings.randomMode}</Text>
    </TouchableOpacity>
  );
}

export default ShufflePlayButton;