import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useButton } from '../../../hooks/useButton';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';

const HeartButton = ({ isSaved, onPress }) => {
  const { type } = useButton().type(isSaved, 'heart', 'heart-o');
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={type} size={21} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default HeartButton; 