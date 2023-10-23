import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { roundNumber } from '../../utils/helpers';
import { artistStrings, carouselStrings, subcategories } from '../../utils/strings';
import styles from './styles';
import colors from '../../utils/colors';

import { useRelatedArtists } from '../../hooks/useRelatedArtists';
import { useArtistTopTracks } from '../../hooks/useArtistTopTracks';

import ShufflePlayButton from '../../components/ShufflePlayButton';
import ImageSongCard from '../../components/ImageSongCard';
import FallbackDataCard from '../../components/FallbackDataCard';
import HorizontalCarousel from '../../components/HorizontalCarousel';
import ArtistHeader from '../../components/ArtistHeader';

const ArtistScreen = () => {
  const param = useRoute().params.data;
  const {
    isLoadingTopTracks,
    isErrorTopTracks,
    topTracks,
    refetchTopTracks,
  } = useArtistTopTracks(param.id);

  const {
    isLoadingRelatedArtists,
    isErrorRelatedArtists,
    relatedArtists,
    refetchRelatedArtists,
  } = useRelatedArtists(param.id);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageView}>
        <ArtistHeader artist={param} />
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.title}>{param.name}</Text>
        <Text style={styles.followers}>{roundNumber(param.followers.total)}</Text>
      </View>
      <ShufflePlayButton />
      {topTracks && relatedArtists ?
        <>
          <View style={styles.popularSongsView}>
            <Text style={styles.popularSongsTitle}>{artistStrings.popularSongs}</Text>
            {topTracks.slice(0, 5).map((item) => (
              <ImageSongCard key={item.id} item={item} />
            ))}
          </View>
          <View style={styles.relatedArtistView}>
            <Text style={styles.relatedArtistTitle}>{artistStrings.relatedArtists}</Text>
            <HorizontalCarousel items={relatedArtists.slice(0, 5)} title={carouselStrings.relatedArtists} />
          </View>
        </> :
        <View style={styles.fallbackView}>
          {(isLoadingTopTracks || isLoadingRelatedArtists) && <ActivityIndicator color={colors.spotifyGreen} />}
          {(isErrorTopTracks || isErrorRelatedArtists) && (
            <FallbackDataCard type={subcategories.error} onPressAction={refetchTopTracks && refetchRelatedArtists} />
          )}
        </View>
      }
    </ScrollView>
  );
};


export default ArtistScreen;