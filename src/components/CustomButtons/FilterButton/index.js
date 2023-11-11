import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../utils/colors';
import { ModalContext } from '../../../context/modal';

const FilterButton = ({ style }) => {
  const { openModal } = useContext(ModalContext)
  return (
    <TouchableOpacity style={style} onPress={() => openModal()}>
      <MaterialCommunityIcons name={'tune-variant'} size={24} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default FilterButton; 