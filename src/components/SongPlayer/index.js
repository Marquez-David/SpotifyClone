import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { PlayerContext } from '../../context/player';
import { ModalContext } from '../../context/modal';

import { extractArtistNames } from '../../utils/helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import styles from './styles';


const SongPlayer = ({ visible, state, item }) => {
  const { play, pause } = useContext(PlayerContext);
  const { openModal } = useContext(ModalContext);

  return (
    <>
      {visible &&
        <TouchableOpacity style={[styles.playerView, { backgroundColor: 'green' }]} onPress={() => openModal()} >
          {<Image style={styles.image} source={{ uri: item.artwork }} />}
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{extractArtistNames(item.artist)}</Text>
          </View>
          <TouchableOpacity style={styles.touchablePlay} onPress={() => openModal()}>
            <MaterialIcons name={'computer'} size={21} color={colors.spotifyWhite} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchablePlay} onPress={() => openModal()}>
            <FontAwesome name={'heart-o'} size={21} color={colors.spotifyWhite} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchablePlay} onPress={() => state === 'pause' ? pause() : play()}>
            <Ionicons name={state} size={22} color={colors.spotifyWhite} />
          </TouchableOpacity>
        </TouchableOpacity>
      }
    </>
  );
};

export default SongPlayer;