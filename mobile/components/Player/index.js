import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { ModalContext } from '../../context/modal';
import { useTrack } from '../../hooks/useTrack';

import DeviceButton from '../CustomButtons/DeviceButton';
import HeartButton from '../CustomButtons/HeartButton';
import MicrophoneButton from '../CustomButtons/MicrophoneButton';
import ReproduceButton from '../CustomButtons/ReproduceButton';

import { saveTrack, unsaveTrack } from '../../services/requests';
import { extractArtistNames, shortenText } from '../../utils/helpers';
import colors from '../../utils/colors';
import styles from './styles';

const handleSongSave = async (isSaved, id, refetch) => {
  isSaved ? await unsaveTrack(id) : await saveTrack(id);
  refetch();
};

const Player = ({ progress, state, item }) => {
  const { openModal } = useContext(ModalContext);
  //const { isSaved, refetch } = useTrack().isSaved(item.id);
  const { position, duration } = progress;
  return (
    Object.values(item).length !== 0 &&
    <TouchableOpacity style={styles.playerView} onPress={openModal}>
      <Image style={styles.imageCover} source={{ uri: item.artwork }} blurRadius={300} />
      <Image style={styles.image} source={{ uri: item.artwork }} />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{shortenText(item.title, 20)}</Text>
        <Text style={styles.descriptionText}>{extractArtistNames(item.artist)}</Text>
      </View>
      <View style={styles.buttonsView}>
        <DeviceButton />
        <MicrophoneButton />
        {/*<HeartButton isSaved={isSaved} onPress={() => handleSongSave(isSaved, item.id, refetch)} />*/}
        <ReproduceButton state={state} />
      </View>
      <View style={styles.progressBarView}>
        <ProgressBar progress={position / duration} color={colors.spotifyWhite} style={styles.progressBar} />
      </View>
    </TouchableOpacity>
  );
};

export default Player;