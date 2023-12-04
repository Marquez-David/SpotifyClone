import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { ModalContext } from '../../context/modal';

import DeviceButton from '../CustomButtons/DeviceButton';
import HeartButton from '../CustomButtons/HeartButton';
import ReproduceButton from '../CustomButtons/ReproduceButton';

import { extractArtistNames, shortenText } from '../../utils/helpers';
import colors from '../../utils/colors';
import styles from './styles';


const SongPlayer = ({ progress, state, item }) => {
  const { openModal } = useContext(ModalContext);
  const { position, duration } = progress;
  return (
    <>
      {Object.values(item).length != 0 &&
        <TouchableOpacity style={[styles.playerView, { backgroundColor: '#700000' }]} onPress={() => openModal()} >
          {<Image style={styles.image} source={{ uri: item.artwork }} />}
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{shortenText(item.title, 20)}</Text>
            <Text style={styles.descriptionText}>{extractArtistNames(item.artist)}</Text>
          </View>
          <View style={styles.buttonsView}>
            <DeviceButton />
            <HeartButton />
            <ReproduceButton state={state} />
          </View>
          <View style={styles.progressBarView}>
            <ProgressBar progress={position / duration} color={colors.spotifyWhite} style={styles.progressBar} />
          </View>
        </TouchableOpacity>
      }

    </>
  );
};

export default SongPlayer;