import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useButtonType } from '../../../hooks/useButtonType';
import { useButtonColor } from '../../../hooks/useButtonColor';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const CheckButton = ({ style, isSaved, onPress }) => {
  const { buttonType } = useButtonType(isSaved, 'checkmark-circle', 'add-circle-outline');
  const { buttonColor } = useButtonColor(isSaved, colors.spotifyGreen, colors.spotifyGray);
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={buttonType} size={28} color={buttonColor} />
    </TouchableOpacity>
  )
};

export default CheckButton; 