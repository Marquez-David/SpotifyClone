import React, { useContext } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';

import { offsets } from '../../utils/constants';
import { albumStrings, modalDialogStrings } from '../../utils/strings';

import { usePlaylist } from '../../hooks/usePlaylist';
import { useOffset } from '../../hooks/useOffset';
import { ModalContext } from '../../context/modal';
import ImageSongCard from '../../components/ImageSongCard';

const PlaylistScreen = () => {
  const param = useRoute().params.data;

  const { openModal } = useContext(ModalContext);
  const { offset, setLoading, handleScroll } = useOffset(offsets.playlists);
  const { playlist } = usePlaylist(param.id, offset, setLoading);

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      <Pressable onPress={() => openModal(modalDialogStrings.undeDevelopment)} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{albumStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.songsView}>
        {playlist?.map((item, index) => (
          <ImageSongCard key={index} item={item.track} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PlaylistScreen;