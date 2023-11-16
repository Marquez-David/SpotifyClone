import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { artistStrings } from '../../utils/strings';
import styles from './styles';
import colors from '../../utils/colors';

import { useArtist } from '../../hooks/useArtist';

import ArtistsCarousel from '../../components/HorizontalCarousels/ArtistsCarousel';

import BottomPadding from '../../components/BottomPadding';
import ImageSongCard from '../../components/Cards/ImageSongCard';
import FallbackDataCard from '../../components/Cards/ErrorCard';
import ArtistHeader from '../../components/Headers/ArtistHeader';

const ArtistScreen = () => {
  const param = useRoute().params.data;
  const { isLoadingRelated, isErrorRelated, related, refetchRelated } = useArtist().related(param.id);
  const { isLoadingTopTracks, isErrorTopTracks, topTracks, refetchTopTracks } = useArtist().topTracks(param.id);
  return (
    <ScrollView style={styles.background}>
      <ArtistHeader artist={param} />
      <View style={styles.contentView}>
        {isLoadingTopTracks || isLoadingRelated || isErrorTopTracks || isErrorRelated ?
          <View style={styles.fallbackView}>
            {(isLoadingTopTracks || isLoadingRelated) && <ActivityIndicator color={colors.spotifyGreen} />}
            {(isErrorTopTracks || isErrorRelated) && (
              <FallbackDataCard onPressAction={refetchTopTracks && refetchRelated} />
            )}
          </View> :
          <View style={styles.popularSongsView}>
            <Text style={styles.popularSongsTitle}>{artistStrings.popularSongs}</Text>
            {topTracks.slice(0, 5).map((item) => {
              const topTrack = { ...item.album, image: item.album.images[0].url, preview_url: item.preview_url }
              return <ImageSongCard key={item.id} item={topTrack} />
            })}
            <Text style={styles.relatedArtistTitle}>{artistStrings.relatedArtists}</Text>
            <ArtistsCarousel artists={related.slice(0, 5)} />
          </View>
        }
        <BottomPadding />
      </View>
    </ScrollView>
  );
};


export default ArtistScreen;