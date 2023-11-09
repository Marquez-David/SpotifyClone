import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalContext } from '../../../context/modal';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../utils/colors';

const DeviceButton = ({ style }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={style} onPress={() => openModal()}>
      <MaterialIcons name={'computer'} size={21} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default DeviceButton; 