import React, { useContext } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import styles from './styles';
import colors from '../../utils/colors';
import { fallbackStrings } from '../../utils/strings';
import { handleScroll } from '../../utils/helpers';

import PlaylistHeader from '../../components/Headers/PlaylistHeader';
import BottomPadding from '../../components/BottomPadding';
import FallbackCard from '../../components/Cards/FallbackCard';
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
          {playlist?.length === 0 && <FallbackCard text={fallbackStrings.emptyPlaylist} buttonText={fallbackStrings.add} onPress={() => openModal()} />}
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackCard text={fallbackStrings.error} buttonText={fallbackStrings.tryAgain} onPress={refetch} />}
        </View> :
        <View style={styles.songsView}>
          {playlist.map((item, index) => {
            const playlist = { ...item.track, pos: index, image: item.track.album.images[0].url };
            return <ImageSongCard key={index} item={playlist} />
          })}
        </View>
      }
      <BottomPadding />
    </ScrollView>
  );
};

export default PlaylistScreen;