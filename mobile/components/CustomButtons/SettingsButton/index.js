import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

import { ModalContext } from '../../../context/modal';

const SettingsButton = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <TouchableOpacity onPress={() => openModal()}>
      <Ionicons name='settings-outline' size={27} color={colors.spotifyGray} />
    </TouchableOpacity>
  )
};

export default SettingsButton;