import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useButton } from '../../../hooks/useButton';

import { followButtonStrings } from '../../../utils/strings';
import styles from './styles';

const FollowButton = ({ isSaved, onPress }) => {
  const { text } = useButton().text(isSaved, followButtonStrings.following, followButtonStrings.follow);
  return (
    <TouchableOpacity style={styles.touchableButton} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
};

export default FollowButton;