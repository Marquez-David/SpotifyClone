import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';

import { albumStrings } from '../../utils/strings';

import VerticalSliderSong from '../../components/VerticalSliderSong';
import { getYear } from '../../utils/helpers';
import { getAlbum } from '../../services/SpotifyRequests';

/**
 * This custom hook fetches and manages data data through an asynchronous API call. 
 * It returns the album data and the corresponding function to update the state with the fetched album.
 * @returns 
 */
const useAlbum = (albumId) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await getAlbum(albumId);
        setAlbum(response);
      } catch (error) {
        console.log('Error while calling function getAlbum(): ' + error);
      }
    };

    fetchAlbumData();
  }, []);

  return { album, setAlbum };
};

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
        {album?.map((item, index) => {
          return (
            <VerticalSliderSong key={index} item={item} type={param.type} />
          )
        })}
      </View>
    </ScrollView>
  );
};

export default AlbumScreen;