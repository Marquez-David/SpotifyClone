import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { getYear } from '../../utils/helpers';
import styles from './styles';
import colors from '../../utils/colors';

import ShufflePlayButton from '../../components/ShufflePlayButton';
import FallbackDataCard from '../../components/ErrorCard';
import StandardSongCard from '../../components/StandardSongCard';
import { useAlbum } from '../../hooks/useAlbum';
import { PlayerContext } from '../../context/player';

const AlbumScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, album, refetch } = useAlbum(param.id);
  const { player } = useContext(PlayerContext);

  return (
    <ScrollView style={player.visible ? styles.margedBackground : styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
        <Text style={styles.descriptionText}>
          {param.artists[0].name + ' • ' + getYear(param.release_date)}
        </Text>
      </View>
      <ShufflePlayButton />
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
    </ScrollView >
  );
};

export default AlbumScreen;