import React from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';
import colors from '../../utils/colors';

import { handleScroll } from '../../utils/helpers';
import { libraryStrings } from '../../utils/strings';

import ShufflePlayButton from '../../components/ShufflePlayButton';
import FallbackDataCard from '../../components/FallbackDataCard';
import { usePlaylist } from '../../hooks/usePlaylist';
import ImageSongCard from '../../components/ImageSongCard';

const PlaylistScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, playlist, refetch, fetchNextPage } = usePlaylist(param.id);
  const { fetchNextItems } = handleScroll(fetchNextPage);

  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      <ShufflePlayButton />
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