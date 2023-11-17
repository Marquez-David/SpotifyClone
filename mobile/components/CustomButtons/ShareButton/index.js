import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../../utils/colors';

import { ModalContext } from '../../../context/modal';

const ShareButton = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <TouchableOpacity onPress={() => openModal()}>
      <Octicons name='share-android' size={17} color={colors.spotifyGray} />
    </TouchableOpacity>
  )
};

export default ShareButton;