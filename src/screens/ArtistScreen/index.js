import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import { useRoute } from "@react-navigation/native";

import ArtistHeader from '../../components/ArtistHeader';

import { getArtistTopTracks, getRelatedArtists } from '../../services/SpotifyRequests';

import { roundNumber } from '../../utils/helpers';
import { artistStrings, carouselStrings } from '../../utils/strings';
import styles from './styles';

import ImageSongCard from '../../components/ImageSongCard';
import HorizontalCarousel from '../../components/HorizontalCarousel';

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

/**
 * A custom hook for fetching and managing related artists based on the provided artist ID.
 * @param {string} artistId - The ID of the artist for which related artists are to be fetched.
 * @returns {Object} An object containing information about related artists.
 */
const useRelatedArtist = (artistId) => {
  const [relatedArtist, setRelatedArtist] = useState(null);

  useEffect(() => {
    const fetchRelatedArtist = async () => {
      try {
        let data = await getRelatedArtists(artistId);
        setRelatedArtist(data);
      } catch (error) {
        console.log('Error while calling function useRelatedArtist(): ' + error);
      }
    };

    fetchRelatedArtist();
  }, []);

  return { relatedArtist };
};

const ArtistScreen = () => {
  const param = useRoute().params.data;
  const { topTracks } = useTopTracks(param.id);
  const { relatedArtist } = useRelatedArtist(param.id);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageView}>
        <ArtistHeader artist={param} />
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.title}>{param.name}</Text>
        <Text style={styles.followers}>{roundNumber(param.followers.total)}</Text>
      </View>
      <Pressable onPress={() => console.log('random mode')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{artistStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.popularSongsView}>
        <Text style={styles.popularSongsTitle}>{artistStrings.popularSongs}</Text>
        {topTracks?.slice(0, 5).map((track, index) => {
          return <ImageSongCard item={track} key={index} />
        })}
      </View>
      <View style={styles.relatedArtistView}>
        <Text style={styles.relatedArtistTitle}>{artistStrings.relatedArtists}</Text>
        <HorizontalCarousel items={relatedArtist?.slice(0, 5)} title={carouselStrings.relatedArtists} />
      </View>
    </ScrollView>
  )
};

export default ArtistScreen;