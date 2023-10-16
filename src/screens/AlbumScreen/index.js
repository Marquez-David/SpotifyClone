import React from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { getYear } from '../../utils/helpers';
import { albumStrings } from '../../utils/strings';
import styles from './styles';

import StandardSongCard from '../../components/StandardSongCard';

import { useAlbum } from '../../hooks/useAlbum';

const AlbumScreen = () => {
  const param = useRoute().params.data;
  const { album } = useAlbum(param.id);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
        <Text style={styles.descriptionText}>
          {param.artists[0].name + ' • ' + getYear(param.release_date)}
        </Text>
      </View>
      <Pressable onPress={() => console.log('random')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{albumStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.songsView}>
        {album?.map((item) => (
          <StandardSongCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default AlbumScreen;