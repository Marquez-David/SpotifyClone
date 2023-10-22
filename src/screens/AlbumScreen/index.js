import React from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { getYear } from '../../utils/helpers';
import { contentTypeStrings } from '../../utils/strings';
import styles from './styles';
import colors from '../../utils/colors';

import ShufflePlayButton from '../../components/ShufflePlayButton';
import FallbackDataCard from '../../components/FallbackDataCard';
import StandardSongCard from '../../components/StandardSongCard';
import { useAlbum } from '../../hooks/useAlbum';

const AlbumScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, album, refetch } = useAlbum(param.id);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
        <Text style={styles.descriptionText}>
          {param.artists[0].name + ' • ' + getYear(param.release_date)}
        </Text>
      </View>
      <ShufflePlayButton />
      {album ?
        <View style={styles.songsView}>
          {album.map((item) => (
            <StandardSongCard key={item.id} item={item} />
          ))}
        </View> :
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackDataCard type={contentTypeStrings.error} onPressAction={refetch} />}
        </View>
      }
    </ScrollView>
  );
};

export default AlbumScreen;