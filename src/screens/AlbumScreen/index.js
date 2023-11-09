import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import styles from './styles';
import colors from '../../utils/colors';

import AlbumHeader from '../../components/Headers/AlbumHeader';

import FallbackDataCard from '../../components/ErrorCard';
import StandardSongCard from '../../components/StandardSongCard';
import BottomPadding from '../../components/BottomPadding';
import { useAlbum } from '../../hooks/useAlbum';

const AlbumScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, album, refetch } = useAlbum(param.id);

  return (
    <ScrollView style={styles.background}>
      <AlbumHeader album={param} />
      {isLoading || isError ?
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackDataCard onPressAction={refetch} />}
        </View> :
        <View style={styles.songsView}>
          {album.map((item) => {
            const album = { ...item, image: param.images[0].url };
            return <StandardSongCard key={item.id} item={album} />
          })}
        </View>
      }
      <BottomPadding />
    </ScrollView >
  );
};

export default AlbumScreen;