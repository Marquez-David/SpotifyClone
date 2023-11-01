import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { PlayerContext } from '../../context/player';

import { extractArtistNames } from '../../utils/helpers';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import styles from './styles';

const SongPlayer = ({ visible, state, item }) => {
  const { play, pause } = useContext(PlayerContext);
  return (
    <>
      {visible &&
        <View style={styles.playerView}>
          {<Image style={styles.image} source={{ uri: item.artwork }} />}
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{extractArtistNames(item.artist)}</Text>
          </View>
          <FontAwesome.Button
            name={state}
            size={16}
            style={styles.playButton}
            backgroundColor={colors.bottomTabBackground}
            color={colors.spotifyWhite}
            onPress={() => state === 'pause' ? pause() : play()}>
          </FontAwesome.Button>
        </View>
      }
    </>
  );
};

export default SongPlayer;