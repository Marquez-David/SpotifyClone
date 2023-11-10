import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useButtonText } from '../../../hooks/useButtonText';

import { followButtonStrings } from '../../../utils/strings';
import styles from './styles';

const FollowButton = ({ isSaved, onPress }) => {
  const { buttonText, setButtonText } = useButtonText(isSaved, followButtonStrings.following, followButtonStrings.follow);
  return (
    <TouchableOpacity style={styles.touchableButton} onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  )
};

export default FollowButton;