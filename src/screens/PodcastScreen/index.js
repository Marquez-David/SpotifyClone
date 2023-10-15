import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../utils/colors';
import styles from './styles';

import { podcastStrings } from '../../utils/strings';
import { offsets } from '../../utils/constants';
import { shortenText } from '../../utils/helpers';

import { getPodcastEpisodes } from '../../services/SpotifyRequests';

import EpisodeCard from '../../components/EpisodeCard';

/**
 * A custom hook for fetching and managing podcast episodes based on the provided podcast ID.
 * @param {string} podcastId - The ID of the podcast for which episodes are to be fetched.
 * @returns {Object} An object containing the podcast episodes as its property.
 */
const usePodcastEpisodes = (podcastId, offset, setLoading) => {
  const [podcastEpisodes, setPodcastEpisodes] = useState(null);

  useEffect(() => {
    const fetchPodcastEpisodes = async () => {
      try {
        const response = await getPodcastEpisodes(podcastId, offset);
        offset > 0 ? setPodcastEpisodes(podcastEpisodes.concat(response)) : setPodcastEpisodes(response);
      } catch (error) {
        console.log('Error while calling function fetchPodcastEpisodes(): ' + error);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcastEpisodes();
  }, [offset]);

  return { podcastEpisodes, setPodcastEpisodes };
};

/**
 * A custom hook for managing scroll-based offset and loading more data.
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
      setOffset((prev) => prev + offsets.podcasts)
    }
  };

  return { offset, handleScroll };
};

const PodcastScreen = () => {
  const param = useRoute().params.data;

  const [loading, setLoading] = useState(false);
  const { offset, handleScroll } = useOffset(loading, setLoading);
  const { podcastEpisodes } = usePodcastEpisodes(param.id, offset, setLoading);

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={styles.background} >
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <View style={styles.headerTextView}>
          <Text style={styles.titleText}>{param.name}</Text>
          <Text style={styles.publisherText}>{param.publisher}</Text>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <Pressable style={styles.followButton} onPress={() => console.log('a')}>
          <Text style={styles.followButtonText}>{podcastStrings.follow}</Text>
        </Pressable>
        <Entypo.Button
          name='dots-three-vertical'
          style={{ marginLeft: 9 }}
          size={16}
          backgroundColor={colors.appBackground}
          color={colors.spotifyGray}
          onPress={() => console.log('dots')}>
        </Entypo.Button>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>{shortenText(param.description, 26)}</Text>
      </View>
      <View style={styles.episodesHeaderView}>
        <Text style={styles.episodesHeaderText}>{podcastStrings.allEpisodes}</Text>
      </View>
      <View style={styles.songsView}>
        {podcastEpisodes?.map((item) => (
          <EpisodeCard key={item.id} data={item} podcastTitle={param.type} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PodcastScreen;