import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../../utils/colors';
import { extractArtistNames, shortenText } from '../../../utils/helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import OptionsButton from '../../CustomButtons/OptionsButton';
import { PlayerContext } from '../../../context/player';

const ImageSongCard = ({ item }) => {
  const { song } = useContext(PlayerContext);
  return (
    <TouchableOpacity style={styles.songTouchableOpacity} onPress={() => song(item)}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{shortenText(item.name, 37)}</Text>
        <View style={styles.descriptionView}>
          {item.explicit ? <MaterialIcons name='explicit' size={15} color={colors.spotifyGray}></MaterialIcons> : null}
          <Text style={styles.descriptionText}>{extractArtistNames(item.artists)}</Text>
        </View>
      </View>
      <View style={styles.dotsButton}>
        <OptionsButton />
      </View>
    </TouchableOpacity>
  )
};

export default ImageSongCard;