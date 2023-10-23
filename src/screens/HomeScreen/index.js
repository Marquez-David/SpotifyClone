import React, { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';
import { parseTitle } from '../../utils/helpers';

import { carouselStrings, modalDialogStrings } from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSavedPlaylists } from '../../hooks/useSavedPlaylists';
import { useArtistsAlbums } from '../../hooks/useArtistsAlbums';
import { useSavedPodcasts } from '../../hooks/useSavedPodcasts';
import { useMessage } from '../../hooks/useMessage';

import HorizontalCarousel from '../../components/HorizontalCarousel';

import { ModalContext } from '../../context/modal';

const HomeScreen = () => {
  const { openModal } = useContext(ModalContext);
  const { playlists } = useSavedPlaylists();
  const { artistAlbums } = useArtistsAlbums();
  const { podcasts } = useSavedPodcasts();
  const { message } = useMessage();

  const horizontalCarouselStrings = [carouselStrings.yourPlaylists, carouselStrings.findOutMoreAbout, carouselStrings.yourPodcasts];
  const data = [playlists, artistAlbums, podcasts];

  return (
    <ScrollView style={styles.background}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeHeaderText}>{message}</Text>
        <Ionicons.Button
          name='notifications-outline'
          size={27} backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
        </Ionicons.Button>
        <Ionicons.Button
          name='time-outline'
          size={27}
          backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
        </Ionicons.Button>
        <Ionicons.Button
          name='settings-outline'
          size={27}
          backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
        </Ionicons.Button>
      </View>
      <View style={styles.flatListContainer}>
        {data?.map((items, index) => (
          <View style={styles.carouselView} key={index}>
            <Text style={styles.titleText}>{parseTitle(items, horizontalCarouselStrings[index])}</Text>
            <HorizontalCarousel items={items} title={horizontalCarouselStrings[index]} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;