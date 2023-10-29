import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';

import { modalDialogStrings } from '../../utils/strings';
import { extractArtistNames, shortenText } from '../../utils/helpers';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { PlayerContext } from '../../context/player';
import { ModalContext } from '../../context/modal';

const ImageSongCard = ({ item }) => {
  const { openModal } = useContext(ModalContext);
  const { playSong } = useContext(PlayerContext);

  return (
    <TouchableOpacity style={styles.songTouchableOpacity} onPress={() => playSong(item)}>
      <Image style={styles.image} source={{ uri: item.album.images[0].url }} />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{shortenText(item.name, 7)}</Text>
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
          onPress={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)}>
        </Entypo.Button>
      </View>
      <View>
      </View>
    </TouchableOpacity>
  )
};

export default ImageSongCard;