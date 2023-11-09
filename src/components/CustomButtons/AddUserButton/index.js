import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';
import { ModalContext } from '../../../context/modal';

const AddUserButton = ({ style }) => {
  const { openModal } = useContext(ModalContext)
  return (
    <TouchableOpacity style={style} onPress={() => openModal()}>
      <Ionicons name={'person-add-outline'} size={23} color={colors.spotifyGray} />
    </TouchableOpacity>
  )
};

export default AddUserButton; 