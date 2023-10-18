import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
import { modalDialogStrings } from '../../utils/strings';
import { extractArtistNames } from '../../utils/helpers';

import { ModalContext } from '../../context/modal';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StandardSongCard = ({ item }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <View style={styles.songView}>
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
    </View>
  )
};

export default StandardSongCard;