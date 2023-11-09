import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './styles';

import { carouselStrings } from '../../utils/strings';
import { useFeaturedPlaylists } from '../../hooks/useFeaturedPlaylists';
import { useMessage } from '../../hooks/useMessage';

import BottomPadding from '../../components/BottomPadding';
import ScreenHeader from '../../components/Headers/ScreenHeader';
import HorizontalCarousel from '../../components/HorizontalCarousels/HorizontalCarousel';

const HomeScreen = () => {
  const { message } = useMessage();
  const { featuredPlaylists } = useFeaturedPlaylists();

  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={message} icon={'notifications-outline'} />
      <View style={styles.carouselView}>
        <HorizontalCarousel items={featuredPlaylists} title={carouselStrings.featuredPlaylists} />
      </View>
      <BottomPadding />
    </ScrollView>
  );
};

export default HomeScreen;