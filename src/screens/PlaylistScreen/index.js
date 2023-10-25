import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import styles from './styles';
import colors from '../../utils/colors';
import { handleScroll } from '../../utils/helpers';
import { spotifyImage } from '../../utils/constants';
import { subcategories, modalDialogStrings } from '../../utils/strings';

import ShufflePlayButton from '../../components/ShufflePlayButton';
import FallbackDataCard from '../../components/FallbackDataCard';
import ImageSongCard from '../../components/ImageSongCard';

import { ModalContext } from '../../context/modal';
import { usePlaylist } from '../../hooks/usePlaylist';

const PlaylistScreen = () => {
  const param = useRoute().params.data;
  const { isLoading, isError, playlist, refetch, fetchNextPage } = usePlaylist(param.id);
  const { fetchNextItems } = handleScroll(fetchNextPage);
  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView onScroll={fetchNextItems} style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0]?.url || spotifyImage }} />
        <Text style={styles.titleText}>{param.name}</Text>
      </View>
      {playlist?.length === 0 || isLoading || isError ?
        <View style={styles.fallbackView}>
          {playlist?.length === 0 && <FallbackDataCard type={subcategories.empty} onPressAction={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)} />}
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && !isLoading && <FallbackDataCard type={subcategories.error} onPressAction={refetch} />}
        </View> :
        <View style={styles.songsView}>
          <ShufflePlayButton />
          {playlist.map((item, index) => (
            <ImageSongCard key={index} item={item.track} />
          ))}
        </View>
      }
    </ScrollView>
  );
};

export default PlaylistScreen;