import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useButton } from '../../../hooks/useButton';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const CheckButton = ({ isSaved, onPress }) => {
  const { type } = useButton().type(isSaved, 'checkmark-circle', 'add-circle-outline');
  const { color } = useButton().color(isSaved, colors.spotifyGreen, colors.spotifyGray);
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={type} size={28} color={color} />
    </TouchableOpacity>
  )
};

export default CheckButton; 