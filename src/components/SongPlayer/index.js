import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { ModalContext } from '../../context/modal';

import { modalDialogStrings } from '../../utils/strings';
import { extractArtistNames } from '../../utils/helpers';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import styles from './styles';

const SongPlayer = ({ visible, item }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      {visible &&
        <View style={styles.customComponent}>
          {/*<Image style={styles.image} source={{ uri: item.album.images[0].url }} />*/}
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{'item.name'}</Text>
            <Text style={styles.descriptionText}>{'extractArtistNames(item.artists)'}</Text>
          </View>
          <FontAwesome.Button
            name='play'
            size={16}
            style={styles.playButton}
            backgroundColor={colors.bottomTabBackground}
            color={colors.spotifyWhite}
            onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
          </FontAwesome.Button>
        </View>
      }
    </>
  );
};

export default SongPlayer;