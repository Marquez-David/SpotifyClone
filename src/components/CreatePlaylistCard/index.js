import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { modalDialogStrings, createPlaylist } from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import styles from './styles';

import { ModalContext } from '../../context/modal';

const CreatePlaylistCard = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity style={styles.imageView} onPress={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)}>
      <View style={styles.iconView}>
        <Ionicons name='add' size={30} color={colors.spotifyWhite} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.playlistNameText}>{createPlaylist}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default CreatePlaylistCard;