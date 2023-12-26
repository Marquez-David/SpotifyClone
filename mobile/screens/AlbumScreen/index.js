import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import AlbumHeader from '../../components/Headers/AlbumHeader';
import FallbackCard from '../../components/Cards/FallbackCard';
import StandardSongCard from '../../components/Cards/StandardSongCard';
import BottomPadding from '../../components/BottomPadding';
import { useRequest } from '../../hooks/useRequest';

import styles from './styles';
import colors from '../../utils/colors';
import { fallbackStrings } from '../../utils/strings';

const AlbumScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, data, refetch } = useRequest(param.href);

  return (
    <ScrollView style={styles.background}>
      <AlbumHeader album={param} />
      {isLoading || isError ?
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackCard text={fallbackStrings.error} buttonText={fallbackStrings.tryAgain} onPress={refetch} />}
        </View> :
        <View style={styles.songsView}>
          {data.tracks.items.map((item) => {
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