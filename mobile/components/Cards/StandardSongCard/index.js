import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../../utils/colors';
import { extractArtistNames, shortenText } from '../../../utils/helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import OptionsButton from '../../CustomButtons/OptionsButton';
import { PlayerContext } from '../../../context/player';

const StandardSongCard = ({ item }) => {
  const { song } = useContext(PlayerContext);
  return (
    <TouchableOpacity style={styles.songTouchableOpacity} onPress={() => song(item)}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{shortenText(item.name, 50)}</Text>
        <View style={styles.descriptionView}>
          {item.explicit ? <MaterialIcons name='explicit' size={15} color={colors.spotifyGray}></MaterialIcons> : null}
          <Text style={styles.descriptionText}>{extractArtistNames(item.artists)}</Text>
        </View>
      </View>
      <View style={styles.optionsView}>
        <OptionsButton />
      </View>
    </TouchableOpacity>
  )
};

export default StandardSongCard;