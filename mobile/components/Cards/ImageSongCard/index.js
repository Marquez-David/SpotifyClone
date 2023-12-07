import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionsButton from '../../CustomButtons/OptionsButton';
import { PlayerContext } from '../../../context/player';

import { extractArtistNames, shortenText } from '../../../utils/helpers';
import { contentType } from '../../../utils/strings';
import colors from '../../../utils/colors';
import styles from './styles';

const ImageSongCard = ({ item }) => {
  const { player, song } = useContext(PlayerContext);
  //Determines the color of the text based on whether the current song's ID matches the ID of the item being rendered and the song position.
  const textColor = player.currentSong.id === item.id && item.pos === player.currentSong.pos ? colors.spotifyGreen : colors.spotifyWhite;
  return (
    <TouchableOpacity style={styles.songTouchableOpacity} onPress={() => song(item)}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.titleView}>
        <Text style={[styles.titleText, { color: textColor }]}>{shortenText(item.name, 37)}</Text>
        <View style={styles.descriptionView}>
          {item.explicit && <MaterialIcons name='explicit' size={15} color={colors.spotifyGray} />}
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