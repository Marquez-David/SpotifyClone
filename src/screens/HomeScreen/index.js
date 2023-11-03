import React, { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';

import { carouselStrings, modalDialogStrings } from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useUser } from '../../hooks/useUser';
import { useSavedPlaylists } from '../../hooks/useSavedPlaylists';
import { useArtistsAlbums } from '../../hooks/useArtistsAlbums';
import { useSavedPodcasts } from '../../hooks/useSavedPodcasts';
import { useMessage } from '../../hooks/useMessage';

import HorizontalCarousel from '../../components/HorizontalCarousel';
import ProfileIcon from '../../components/ProfileIcon';

import { ModalContext } from '../../context/modal';
import { PlayerContext } from '../../context/player';

const HomeScreen = () => {
  const { openModal } = useContext(ModalContext);
  const { player } = useContext(PlayerContext);

  const { message } = useMessage();
  const { isLoadingUser, image } = useUser();

  const { playlists } = useSavedPlaylists();
  const { artistAlbums } = useArtistsAlbums();
  const { podcasts } = useSavedPodcasts();

  return (
    <ScrollView style={player.visible ? styles.margedBackground : styles.background}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeHeaderText}>{message}</Text>
        <Ionicons.Button
          name='notifications-outline'
          size={27} backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)}>
        </Ionicons.Button>
        {!isLoadingUser && <ProfileIcon image={image} />}
      </View>
      <View style={styles.carouselView}>
        <HorizontalCarousel items={playlists} title={carouselStrings.yourPlaylists} />
        <HorizontalCarousel items={artistAlbums} title={carouselStrings.findOutMoreAbout} />
        <HorizontalCarousel items={podcasts} title={carouselStrings.yourPodcasts} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;