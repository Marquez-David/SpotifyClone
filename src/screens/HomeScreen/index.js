import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';

import styles from './styles';

import { carouselStrings } from '../../utils/strings';
import { useFeaturedPlaylists } from '../../hooks/useFeaturedPlaylists';
import { useMessage } from '../../hooks/useMessage';

import ScreenHeader from '../../components/ScreenHeader';
import HorizontalCarousel from '../../components/HorizontalCarousel';
import { PlayerContext } from '../../context/player';

const HomeScreen = () => {
  const { player } = useContext(PlayerContext);

  const { message } = useMessage();
  const { featuredPlaylists } = useFeaturedPlaylists();

  return (
    <ScrollView style={player.visible ? styles.margedBackground : styles.background}>
      <ScreenHeader title={message} icon={'notifications-outline'} />
      <View style={styles.carouselView}>
        <HorizontalCarousel items={featuredPlaylists} title={carouselStrings.featuredPlaylists} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;