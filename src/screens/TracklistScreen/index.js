import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';

import { albumStrings } from '../../utils/strings';

import VerticalSliderSong from '../../components/VerticalSliderSong';
import { getYear } from '../../utils/helpers';
import { getAlbum } from '../../services/SpotifyRequests';

/**
 * This custom hook fetches and manages album data through an asynchronous API call. 
 * It returns the album data and the corresponding function to update the state with the fetched album.
 * @returns 
 */
const useAlbum = (albumId) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await getAlbum(albumId);
        setAlbum(response);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchAlbum();
  }, []);

  return { album, setAlbum };
};

const TracklistScreen = () => {
  const data = useRoute().params.data;
  const { album } = useAlbum(data.id);
  
  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: data.images[0].url }} />
        <Text style={styles.titleText}>{data.name}</Text>
        <Text style={styles.descriptionText}>
          {data.artists[0].name + ' • ' + getYear(data.release_date)}
        </Text>
      </View>
      <Pressable onPress={() => console.log('random')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{albumStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.songsView}>
        {album && album.data.tracks.items.map((item, index) => {
          return (
            <VerticalSliderSong key={index} data={item} />
          )
        })}
      </View>
    </ScrollView>
  );
};

export default TracklistScreen;