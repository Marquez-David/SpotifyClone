import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { followArtist, unfollowArtist } from '../../../services/requests';

import { useUserFollowsArtist } from '../../../hooks/useUserFollowsArtist';
import { useButtonText } from '../../../hooks/useButtonText';

import { followButtonStrings } from '../../../utils/strings';
import styles from './styles';

const handleFollowArtist = async (artistsId, useFollowsArtist, setButtonText) => {
  if (useFollowsArtist) {
    await unfollowArtist(artistsId);
    setButtonText(followButtonStrings.follow);
  } else {
    await followArtist(artistsId);
    setButtonText(followButtonStrings.following);
  }
};

const FollowButton = ({ artistId }) => {
  const { userFollowsArtist } = useUserFollowsArtist(artistId);
  const { buttonText, setButtonText } = useButtonText(userFollowsArtist, followButtonStrings.following, followButtonStrings.follow);
  return (
    <TouchableOpacity style={styles.touchableButton} onPress={() => handleFollowArtist(artistId, userFollowsArtist, setButtonText)}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  )
};

export default FollowButton;