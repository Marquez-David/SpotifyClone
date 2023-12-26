import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { useArtist } from '../../hooks/useArtist';

import ArtistsCarousel from '../../components/HorizontalCarousels/ArtistsCarousel';
import BottomPadding from '../../components/BottomPadding';
import ContentCard from '../../components/Cards/ContentCard';
import FallbackCard from '../../components/Cards/FallbackCard';
import ArtistHeader from '../../components/Headers/ArtistHeader';

import { artistStrings, fallbackStrings } from '../../utils/strings';
import { getYear } from '../../utils/helpers';
import styles from './styles';
import colors from '../../utils/colors';

const ArtistScreen = () => {
  const param = useRoute().params.data;
  const { isLoadingRelated, isErrorRelated, related, refetchRelated } = useArtist().related(param.id);
  const { isLoadingAlbum, isErrorAlbum, albums, refetchAlbums } = useArtist().albums(param.id);
  return (
    <ScrollView style={styles.background}>
      <ArtistHeader artist={param} />
      <View style={styles.contentView}>
        {isLoadingAlbum || isLoadingRelated || isErrorAlbum || isErrorRelated ?
          <View style={styles.fallbackView}>
            {(isLoadingAlbum || isLoadingRelated) && <ActivityIndicator color={colors.spotifyGreen} />}
            {(isErrorAlbum || isErrorRelated) && (
              <FallbackCard text={fallbackStrings.error} buttonText={fallbackStrings.tryAgain} onPress={refetchRelated && refetchAlbums} />
            )}
          </View> :
          <View style={styles.popularSongsView}>
            <Text style={styles.popularSongsTitle}>{artistStrings.popularSongs}</Text>
            {albums.slice(0, 3).map((item) => {
              const album = { ...item, label: getYear(item.release_date) }
              return <ContentCard key={item.id} item={album} />
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