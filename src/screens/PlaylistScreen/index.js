import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from './styles';

import { albumStrings } from '../../utils/strings';
import { offsets } from '../../utils/constants';

import ImageSongCard from '../../components/ImageSongCard';
import { getPlaylist } from '../../services/SpotifyRequests';

/**
 * This custom hook fetches and manages data data through an asynchronous API call. 
 * It returns the playlist data and the corresponding function to update the state with the fetched playlist.
 * @returns 
 */
const usePlaylist = (playlistId, offset, setLoading) => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await getPlaylist(playlistId, offset);
        offset > 0 ? setPlaylist(playlist.concat(response)) : setPlaylist(response);
      } catch (error) {
        console.log('Error while calling function getPlaylist(): ' + error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [offset]);

  return { playlist };
};

/**
 * A custom hook for managing scroll-based offset and loading more songs.
 * @param {boolean} loading - A boolean indicating whether data is currently being loaded.
 * @param {function} setLoading - A function to update the loading status.
 * @returns {Object} An object containing the current offset and a function to handle scrolling events.
 */
const useOffset = (loading, setLoading) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = (event) => {
    if (loading) return;
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const maxScroll = Math.round(contentSize.height - layoutMeasurement.height);
    const currentScroll = Math.round(contentOffset.y);
    if (currentScroll >= maxScroll - currentScroll) {
      setLoading(true);
      setOffset((prev) => prev + offsets.playlists);
    }
  };

  return { offset, handleScroll };
};

const PlaylistScreen = () => {
  const param = useRoute().params.data;

  const [loading, setLoading] = useState(false);
  const { offset, handleScroll } = useOffset(loading, setLoading);
  const { playlist } = usePlaylist(param.id, offset, setLoading);

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      <Pressable onPress={() => console.log('random')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{albumStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.songsView}>
        {playlist?.map((item, index) => (
          <ImageSongCard key={index} item={item.track} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PlaylistScreen;