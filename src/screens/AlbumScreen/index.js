import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { getYear } from '../../utils/helpers';
import { albumStrings, modalDialogStrings } from '../../utils/strings';
import styles from './styles';

import StandardSongCard from '../../components/StandardSongCard';
import { ModalContext } from '../../context/modal';
import { useAlbum } from '../../hooks/useAlbum';

const AlbumScreen = () => {
  const param = useRoute().params.data;
  const { album } = useAlbum(param.id);
  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
        <Text style={styles.descriptionText}>
          {param.artists[0].name + ' • ' + getYear(param.release_date)}
        </Text>
      </View>
      <TouchableOpacity onPress={() => openModal(modalDialogStrings.undeDevelopment)} style={styles.randomTouchableOpacity}>
        <Text style={styles.touchableOpacityText}>{albumStrings.randomMode}</Text>
      </TouchableOpacity>
      <View style={styles.songsView}>
        {album?.map((item) => (
          <StandardSongCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default AlbumScreen;