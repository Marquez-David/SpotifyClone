import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalContext } from '../../../context/modal';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const NotificationButton = ({ style }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={style} onPress={() => openModal()}>
      <Ionicons name={'notifications-outline'} size={26} color={colors.spotifyGray} />
    </TouchableOpacity>
  )
};

export default NotificationButton; 