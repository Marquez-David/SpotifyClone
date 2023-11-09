import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalContext } from '../../../context/modal';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';

const HeartButton = ({ style }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={style} onPress={() => openModal()}>
      <FontAwesome name={'heart-o'} size={21} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default HeartButton; 