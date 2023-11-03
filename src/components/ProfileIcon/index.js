import React, { useContext } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { modalDialogStrings } from '../../utils/strings';
import colors from '../../utils/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

import { ModalContext } from '../../context/modal';

const ProfileIcon = ({ image }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={styles.profileIconView} onPress={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)}>
      {image ? (
        <Image style={styles.profileIcon} source={{ uri: image }} />
      ) : (
        <EvilIcons name='user' size={36} color={colors.spotifyWhite} style={styles.profileIcon} />
      )}
    </TouchableOpacity>
  );
};

export default ProfileIcon;