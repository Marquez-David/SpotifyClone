import React, { useContext } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import styles from './styles';
import colors from '../../utils/colors';
import { handleScroll } from '../../utils/helpers';

import PlaylistHeader from '../../components/Headers/PlaylistHeader';
import BottomPadding from '../../components/BottomPadding';
import FallbackDataCard from '../../components/Cards/ErrorCard';
import ImageSongCard from '../../components/Cards/ImageSongCard';

import { ModalContext } from '../../context/modal';
import { usePlaylist } from '../../hooks/usePlaylist';

const PlaylistScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, playlist, refetch, fetchNextPage } = usePlaylist().playlist(param.id);
  const { fetchNextItems } = handleScroll(fetchNextPage);
  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background}>
      <PlaylistHeader playlist={param} />
      {playlist?.length === 0 || isLoading || isError ?
        <View style={styles.fallbackView}>
          {playlist?.length === 0 && <FallbackDataCard onPressAction={() => openModal()} />}
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackDataCard onPressAction={refetch} />}
        </View> :
        <View style={styles.songsView}>
          {playlist.map((item, index) => {
            const playlist = { ...item.track, image: item.track.album.images[0].url };
            return <ImageSongCard key={index} item={playlist} />
          })}
        </View>
      }
      <BottomPadding />
    </ScrollView>
  );
};

export default PlaylistScreen;