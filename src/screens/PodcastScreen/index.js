import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../utils/colors';
import styles from './styles';

import { podcastStrings } from '../../utils/strings';
import { offsets } from '../../utils/constants';
import { shortenText } from '../../utils/helpers';

import { usePodcastEpisodes } from '../../hooks/usePodcastEpisodes';
import { useOffset } from '../../hooks/useOffset';

import EpisodeCard from '../../components/EpisodeCard';

const PodcastScreen = () => {
  const param = useRoute().params.data;

  const { offset, setLoading, handleScroll } = useOffset(offsets.podcasts);
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