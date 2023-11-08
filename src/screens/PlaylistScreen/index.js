import React, { useContext } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import styles from './styles';
import colors from '../../utils/colors';
import { handleScroll } from '../../utils/helpers';

import ConditionalImage from '../../components/ConditionalImage';
import ShufflePlayButton from '../../components/ShufflePlayButton';
import FallbackDataCard from '../../components/ErrorCard';
import ImageSongCard from '../../components/ImageSongCard';

import { ModalContext } from '../../context/modal';
import { usePlaylist } from '../../hooks/usePlaylist';

const PlaylistScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, playlist, refetch, fetchNextPage } = usePlaylist(param.id);
  const { fetchNextItems } = handleScroll(fetchNextPage);
  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background}>
      <View style={styles.headerView}>
        <ConditionalImage image={param.images[0]?.url} size={55} style={styles.image} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      {playlist?.length === 0 || isLoading || isError ?
        <View style={styles.fallbackView}>
          {playlist?.length === 0 && <FallbackDataCard onPressAction={() => openModal()} />}
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackDataCard onPressAction={refetch} />}
        </View> :
        <View style={styles.songsView}>
          <ShufflePlayButton />
          {playlist.map((item, index) => {
            const playlist = { ...item.track, image: item.track.album.images[0].url };
            return <ImageSongCard key={index} item={playlist} />
          })}
        </View>
      }
    </ScrollView>
  );
};

export default PlaylistScreen;