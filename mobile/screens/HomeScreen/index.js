import React from 'react';
import { ScrollView, View } from 'react-native';

import { carouselStrings } from '../../utils/strings';
import { usePlaylist } from '../../hooks/usePlaylist';
import { useAlbum } from '../../hooks/useAlbum';
import { useRecentlyPlayed } from '../../hooks/useRecentlyPlayed';
import { useMessage } from '../../hooks/useMessage';

import BottomPadding from '../../components/BottomPadding';
import ScreenHeader from '../../components/Headers/ScreenHeader';
import HomeGrid from '../../components/Grids/HomeGrid';
import HorizontalCarousel from '../../components/HorizontalCarousels/HorizontalCarousel';

import styles from './styles';

const HomeScreen = () => {
  const { message } = useMessage();
  const { featuredPlaylists } = usePlaylist().featured();
  const { recentlyPlayed } = useRecentlyPlayed();
  const { featuredAlbums } = useAlbum().featured();
  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={message} icon={'notifications-outline'} />
      <HomeGrid items={recentlyPlayed} />
      <View style={styles.carouselView}>
        <HorizontalCarousel items={featuredPlaylists} title={carouselStrings.featuredPlaylists} />
        <HorizontalCarousel items={featuredAlbums} title={carouselStrings.featuredAlbums} />
      </View>
      <BottomPadding />
    </ScrollView>
  );
};

export default HomeScreen;