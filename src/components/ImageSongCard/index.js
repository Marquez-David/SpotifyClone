import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { handleNavigation } from '../../utils/helpers';
import styles from './styles';
import colors from '../../utils/colors';

import { modalDialogStrings } from '../../utils/strings';
import { extractArtistNames } from '../../utils/helpers';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { ModalContext } from '../../context/modal';

const ImageSongCard = ({ item }) => {
  const { openModal } = useContext(ModalContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.songTouchableOpacity} onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
      <Image style={styles.image} source={{ uri: item.album.images[0].url }} />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{item.name}</Text>
        <View style={styles.descriptionView}>
          {item.explicit ? <MaterialIcons name='explicit' size={15} color={colors.spotifyGray}></MaterialIcons> : null}
          <Text style={styles.descriptionText}>{extractArtistNames(item.artists)}</Text>
        </View>
      </View>
      <View style={styles.dotsButton}>
        <Entypo.Button
          name='dots-three-vertical'
          size={15}
          backgroundColor={colors.appBackground}
          color={colors.spotifyGray}
          onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
        </Entypo.Button>
      </View>
      <View>
      </View>
    </TouchableOpacity>
  )
};

export default ImageSongCard;