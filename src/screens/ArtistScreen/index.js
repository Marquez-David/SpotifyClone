import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { roundNumber } from '../../utils/helpers';
import { artistStrings, carouselStrings, modalDialogStrings } from '../../utils/strings';
import styles from './styles';

import { useRelatedArtist } from '../../hooks/useRelatedArtists';
import { useArtistTopTracks } from '../../hooks/useArtistTopTracks';
import { ModalContext } from '../../context/modal';

import ImageSongCard from '../../components/ImageSongCard';
import HorizontalCarousel from '../../components/HorizontalCarousel';
import ArtistHeader from '../../components/ArtistHeader';

const ArtistScreen = () => {
  const param = useRoute().params.data;
  const { topTracks } = useArtistTopTracks(param.id);
  const { relatedArtist } = useRelatedArtist(param.id);
  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageView}>
        <ArtistHeader artist={param} />
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.title}>{param.name}</Text>
        <Text style={styles.followers}>{roundNumber(param.followers.total)}</Text>
      </View>
      <Pressable onPress={() => openModal(modalDialogStrings.undeDevelopment)} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{artistStrings.randomMode}</Text>
      </Pressable>
      <View style={styles.popularSongsView}>
        <Text style={styles.popularSongsTitle}>{artistStrings.popularSongs}</Text>
        {topTracks?.slice(0, 5).map((item) => (
          <ImageSongCard key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.relatedArtistView}>
        <Text style={styles.relatedArtistTitle}>{artistStrings.relatedArtists}</Text>
        <HorizontalCarousel items={relatedArtist?.slice(0, 5)} title={carouselStrings.relatedArtists} />
      </View>
    </ScrollView>
  )
};

export default ArtistScreen;