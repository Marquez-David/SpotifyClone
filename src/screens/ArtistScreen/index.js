import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { roundNumber } from '../../utils/helpers';
import { artistStrings, carouselStrings, modalDialogStrings, libraryStrings } from '../../utils/strings';
import styles from './styles';
import colors from '../../utils/colors';

import { useRelatedArtists } from '../../hooks/useRelatedArtists';
import { useArtistTopTracks } from '../../hooks/useArtistTopTracks';
import { ModalContext } from '../../context/modal';

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

  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageView}>
        <ArtistHeader artist={param} />
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.title}>{param.name}</Text>
        <Text style={styles.followers}>{roundNumber(param.followers.total)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => openModal(modalDialogStrings.undeDevelopment)}
        style={styles.randomTouchableOpacity}
      >
        <Text style={styles.touchableOpacityText}>{artistStrings.randomMode}</Text>
      </TouchableOpacity>
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
            <FallbackDataCard type={libraryStrings.error} onPressAction={refetchTopTracks && refetchRelatedArtists} />
          )}
        </View>
      }
    </ScrollView>
  );
};


export default ArtistScreen;