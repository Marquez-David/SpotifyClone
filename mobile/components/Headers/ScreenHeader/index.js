import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../../utils/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import { useUser } from '../../../hooks/useUser';

import { ModalContext } from '../../../context/modal';

const ScreenHeader = ({ title, icon }) => {
  const { image } = useUser();
  const { openModal } = useContext(ModalContext);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.profileIconView} onPress={() => openModal()}>
        {image ? (<Image style={styles.profileIcon} source={{ uri: image }} />
        ) : (<EvilIcons name='user' size={36} color={colors.spotifyWhite} style={styles.profileIcon} />
        )}
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity style={styles.touchableIcon} onPress={() => openModal()}>
        <Ionicons name={icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;