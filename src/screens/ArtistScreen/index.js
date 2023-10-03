import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import { useRoute } from "@react-navigation/native";

import ArtistHeader from '../../components/ArtistHeader';

import { getArtistTopTracks } from '../../services/SpotifyRequests';

import { roundNumber } from '../../utils/helpers';
import { artistStrings } from '../../utils/strings';
import styles from './styles';
import PlaylistSongCard from '../../components/PlaylistSongCard';

/**
 * A custom hook for fetching and managing an artist's top tracks based on the provided artist ID.
 * @param {string} artistId - The ID of the artist for which top tracks are to be fetched.
 * @returns {Object} An object containing the artist's top tracks as its property.
 */
const useTopTracks = (artistId) => {
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        let data = await getArtistTopTracks(artistId);
        setTopTracks(data);
      } catch (error) {
        console.log('Error while calling function useArtist(): ' + error);
      }
    };

    fetchTopTracks();
  }, []);

  return { topTracks };
};

const ArtistScreen = () => {
  const param = useRoute().params.data;

  const { topTracks } = useTopTracks(param.id);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageView}>
        <ArtistHeader />
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.title}>{param.name}</Text>
        <Text style={styles.followers}>{roundNumber(param.followers.total)}</Text>
      </View>
      <Pressable onPress={() => console.log('random mode')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{artistStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.popularSongsView}>
        <Text style={styles.popularSongsText}>{artistStrings.popularSongs}</Text>
        {topTracks?.slice(0, 5).map((track, index) => {
          return <PlaylistSongCard item={track} key={index} />
        })}
      </View>
    </ScrollView>
  )
};

export default ArtistScreen;