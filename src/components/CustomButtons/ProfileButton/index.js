import React, { useContext } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import { ModalContext } from '../../../context/modal';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../utils/colors';
import styles from './styles';

const ProfileButton = ({ image, name }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={styles.touchableProfile} onPress={() => openModal()}>
      {image ? (
        <Image style={styles.image} source={{ uri: image }} />
      ) : (
        <EvilIcons name='user' size={34} color={colors.spotifyWhite} style={styles.image} />
      )}
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
}

export default ProfileButton;