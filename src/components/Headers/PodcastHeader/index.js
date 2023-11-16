import React from 'react';
import { View, Text, Image } from 'react-native';

import { usePodcast } from '../../../hooks/usePodcast';

import ArrowBackButton from '../../CustomButtons/ArrowBackButton';
import FollowButton from '../../CustomButtons/FollowButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import NotificationButton from '../../CustomButtons/NotificationButton';
import SettingsButton from '../../CustomButtons/SettingsButton';

import { followPodcast, unfollowPodcast } from '../../../services/requests';
import styles from './styles';

const handleFollowPodcast = async (isSaved, podcastId, refetch) => {
  isSaved ? await unfollowPodcast(podcastId) : await followPodcast(podcastId);
  refetch();
}

const PodcastHeader = ({ podcast }) => {
  const { isSaved, refetch } = usePodcast().isSaved(podcast.id);
  return (
    <View style={styles.podcastHeaderView}>
      <ArrowBackButton />
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: podcast.images[0].url }} />
        <View style={styles.titleView}>
          <Text style={styles.name}>{podcast.name}</Text>
          <Text style={styles.publisher}>{podcast.publisher}</Text>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <FollowButton isSaved={isSaved} onPress={() => handleFollowPodcast(isSaved, podcast.id, refetch)} />
        <NotificationButton />
        <SettingsButton />
        <OptionsButton />
      </View>
    </View>
  )
};

export default PodcastHeader;