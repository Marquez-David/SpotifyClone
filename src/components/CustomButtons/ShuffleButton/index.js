import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../utils/colors';
import styles from './styles';

import { ModalContext } from '../../../context/modal';

const ShuffleButton = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={styles.touchableShuffle} onPress={() => openModal()}>
      <Entypo name='shuffle' size={23} color={colors.spotifyGray} />
    </TouchableOpacity>
  );
}

export default ShuffleButton;