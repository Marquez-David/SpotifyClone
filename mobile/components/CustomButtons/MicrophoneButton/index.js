import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalContext } from '../../../context/modal';

import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../../../utils/colors';

const MicrophoneButton = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity onPress={() => openModal()}>
      <Fontisto name={'mic'} size={22} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default MicrophoneButton; 