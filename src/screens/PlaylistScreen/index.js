import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';
import colors from '../../utils/colors';

import { handleScroll } from '../../utils/helpers';
import { albumStrings, modalDialogStrings, libraryStrings } from '../../utils/strings';

import FallbackDataCard from '../../components/FallbackDataCard';
import { usePlaylist } from '../../hooks/usePlaylist';
import { ModalContext } from '../../context/modal';
import ImageSongCard from '../../components/ImageSongCard';

const PlaylistScreen = () => {
  const param = useRoute().params.data;
  const { openModal } = useContext(ModalContext);
  const { isLoading, isError, playlist, refetch, fetchNextPage } = usePlaylist(param.id);

  const { fetchNextItems } = handleScroll(fetchNextPage);

  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      <TouchableOpacity onPress={() => openModal(modalDialogStrings.undeDevelopment)} style={styles.randomTouchableOpacity}>
        <Text style={styles.touchableOpacityText}>{albumStrings.randomMode}</Text>
      </TouchableOpacity>
      {playlist ?
        <View style={styles.songsView}>
          {playlist && playlist.map((item, index) => (
            <ImageSongCard key={index} item={item.track} />
          ))}
        </View> :
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackDataCard type={libraryStrings.error} onPressAction={refetch} />}
        </View>
      }
    </ScrollView>
  );
};

export default PlaylistScreen;