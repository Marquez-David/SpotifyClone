import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';

import { albumStrings } from '../../utils/strings';

import PlaylistSongCard from '../../components/PlaylistSongCard';
import { getPlaylist } from '../../services/SpotifyRequests';

/**
 * This custom hook fetches and manages data data through an asynchronous API call. 
 * It returns the playlist data and the corresponding function to update the state with the fetched playlist.
 * @returns 
 */
const usePlaylist = (playlistId) => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await getPlaylist(playlistId);
        setPlaylist(response);
      } catch (error) {
        console.log('Error while calling function getPlaylist(): ' + error);
      }
    };

    fetchPlaylist();
  }, []);

  return { playlist, setPlaylist };
};

const PlaylistScreen = () => {
  const param = useRoute().params.data;
  const { playlist } = usePlaylist(param.id);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      <Pressable onPress={() => console.log('random')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{albumStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.songsView}>
        {playlist?.map((item, index) => {
          return (
            <PlaylistSongCard key={index} item={item.track} />
          )
        })}
      </View>
    </ScrollView>
  );
};

export default PlaylistScreen;