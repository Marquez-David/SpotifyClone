import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { artistStrings } from '../../utils/strings';
import styles from './styles';
import colors from '../../utils/colors';

import { useRelatedArtists } from '../../hooks/useRelatedArtists';
import { useArtistTopTracks } from '../../hooks/useArtistTopTracks';

import ArtistsCarousel from '../../components/HorizontalCarousels/ArtistsCarousel';

import BottomPadding from '../../components/BottomPadding';
import ImageSongCard from '../../components/ImageSongCard';
import FallbackDataCard from '../../components/ErrorCard';
import ArtistHeader from '../../components/Headers/ArtistHeader';

const ArtistScreen = () => {
  const param = useRoute().params.data;
  //const { openModal } = useContext(ModalContext);


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
      <ArtistHeader artist={param} />
      <View style={styles.contentView}>
        {isLoadingTopTracks || isLoadingRelatedArtists || isErrorTopTracks || isErrorRelatedArtists ?
          <View style={styles.fallbackView}>
            {(isLoadingTopTracks || isLoadingRelatedArtists) && <ActivityIndicator color={colors.spotifyGreen} />}
            {(isErrorTopTracks || isErrorRelatedArtists) && (
              <FallbackDataCard onPressAction={refetchTopTracks && refetchRelatedArtists} />
            )}
          </View> :
          <View style={styles.popularSongsView}>
            <Text style={styles.popularSongsTitle}>{artistStrings.popularSongs}</Text>
            {topTracks.slice(0, 5).map((item) => {
              const topTrack = { ...item.album, image: item.album.images[0].url }
              return <ImageSongCard key={item.id} item={topTrack} />
            })}
            <Text style={styles.relatedArtistTitle}>{artistStrings.relatedArtists}</Text>
            <ArtistsCarousel artists={relatedArtists.slice(0, 5)} />
          </View>
        }
        <BottomPadding />
      </View>
    </ScrollView>
  );
};


export default ArtistScreen;