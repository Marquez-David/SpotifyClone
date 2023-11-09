import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ModalContext } from '../../context/modal';

import DeviceButton from '../CustomButtons/DeviceButton';
import HeartButton from '../CustomButtons/HeartButton';
import ReproduceButton from '../CustomButtons/ReproduceButton';

import { extractArtistNames } from '../../utils/helpers';
import styles from './styles';


const SongPlayer = ({ visible, state, item }) => {
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
          <View style={styles.buttonsView}>
            <DeviceButton style={{ marginRight: 15 }} />
            <HeartButton style={{ marginRight: 15 }} />
            <ReproduceButton state={state} />
          </View>
        </TouchableOpacity>
      }
    </>
  );
};

export default SongPlayer;