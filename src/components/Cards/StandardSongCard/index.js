import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../../utils/colors';
import { modalStrings } from '../../../utils/strings';
import { extractArtistNames, shortenText } from '../../../utils/helpers';

import { ModalContext } from '../../../context/modal';
import { PlayerContext } from '../../../context/player';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StandardSongCard = ({ item }) => {
  const { openModal } = useContext(ModalContext);
  const { song } = useContext(PlayerContext);
  return (
    <TouchableOpacity style={styles.songTouchableOpacity} onPress={() => song(item)}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{shortenText(item.name, 8)}</Text>
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
          onPress={() => openModal(modalStrings.undeDevelopment)}>
        </Entypo.Button>
      </View>
      <View>
      </View>
    </TouchableOpacity>
  )
};

export default StandardSongCard;