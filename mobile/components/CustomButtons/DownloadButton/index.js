import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';
import { ModalContext } from '../../../context/modal';

const DownloadButton = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <TouchableOpacity onPress={() => openModal()}>
      < Ionicons name={'arrow-down-circle-outline'} size={28} color={colors.spotifyGray} />
    </TouchableOpacity >
  )
};

export default DownloadButton; 