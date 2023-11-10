import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import colors from '../../utils/colors';
import styles from './styles';

import { podcastStrings } from '../../utils/strings';
import { handleScroll } from '../../utils/helpers';

import PodcastHeader from '../../components/Headers/PodcastHeader';
import BottomPadding from '../../components/BottomPadding';
import FallbackDataCard from '../../components/ErrorCard';
import { usePodcastEpisodes } from '../../hooks/usePodcastEpisodes';
import EpisodeCard from '../../components/EpisodeCard';

const PodcastScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, podcastEpisodes, refetch, fetchNextPage } = usePodcastEpisodes(param.id);
  const { fetchNextItems } = handleScroll(fetchNextPage);
  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background} >
      <PodcastHeader podcast={param} />
      <View style={styles.contentView}>
        <Text style={styles.episodesHeaderText}>{podcastStrings.allEpisodes}</Text>
        {isLoading || isError ?
          <View style={styles.fallbackView}>
            {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
            {isError && <FallbackDataCard onPressAction={refetch} />}
          </View> :
          <>
            {podcastEpisodes.map((item) => (
              <EpisodeCard key={item.id} data={item} podcastTitle={param.type} />
            ))}
          </>
        }
      </View>
      <BottomPadding />
    </ScrollView>
  );
};

export default PodcastScreen;