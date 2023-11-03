import React, { useContext } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { modalDialogStrings } from '../../utils/strings';
import styles from './styles';

import { ModalContext } from '../../context/modal';

const ProfileIcon = ({ image }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={styles.profileIconView} onPress={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)}>
      <Image style={styles.profileIcon} source={{ uri: image }} />
    </TouchableOpacity>
  );
};

export default ProfileIcon;