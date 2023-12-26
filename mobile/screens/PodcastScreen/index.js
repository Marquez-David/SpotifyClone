import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { usePodcast } from '../../hooks/usePodcast';
import PodcastHeader from '../../components/Headers/PodcastHeader';
import BottomPadding from '../../components/BottomPadding';
import FilterButton from '../../components/CustomButtons/FilterButton';
import FallbackCard from '../../components/Cards/FallbackCard';
import EpisodeCard from '../../components/Cards/EpisodeCard';

import { podcastStrings, fallbackStrings } from '../../utils/strings';
import { handleScroll } from '../../utils/helpers';
import colors from '../../utils/colors';
import styles from './styles';

const PodcastScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, episodes, refetch, fetchNextPage } = usePodcast().episodes(param.id);
  const { fetchNextItems } = handleScroll(fetchNextPage);
  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background} >
      <PodcastHeader podcast={param} />

      <View style={styles.contentView}>
        <View style={styles.filterView}>
          <FilterButton />
          <Text style={styles.episodesHeaderText}>{podcastStrings.allEpisodes}</Text>
        </View>
        {isLoading || isError ?
          <View style={styles.fallbackView}>
            {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
            {isError && <FallbackCard text={fallbackStrings.error} buttonText={fallbackStrings.tryAgain} onPress={refetch} />}
          </View> :
          <>
            {episodes.map((item) => {
              const episode = { ...item, image: item.images[0].url, publisher: [{ name: param.publisher }] };
              return (
                <EpisodeCard key={episode.id} data={episode} />
              )
            })}
          </>
        }
      </View>
      <BottomPadding />
    </ScrollView>
  );
};

export default PodcastScreen;