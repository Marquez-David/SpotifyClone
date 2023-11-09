import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../utils/colors';

import { ModalContext } from '../../../context/modal';

const OptionsButton = ({ style }) => {
  const { openModal } = useContext(ModalContext)
  return (
    <TouchableOpacity style={style} onPress={() => openModal()}>
      <Entypo name='dots-three-vertical' size={17} color={colors.spotifyGray} />
    </TouchableOpacity>
  )
};

export default OptionsButton;