import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import ArrowBackButton from '../../CustomButtons/ArrowBackButton';
import CheckButton from '../../CustomButtons/CheckButton';
import ProfileButton from '../../CustomButtons/ProfileButton';
import DownloadButton from '../../CustomButtons/DownloadButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import PlayQueueButton from '../../CustomButtons/PlayQueueButton';

import { useAlbum } from '../../../hooks/useAlbum';
import { useRequest } from '../../../hooks/useRequest';
import { saveAlbum, unsaveAlbum } from '../../../services/requests';
import { getYear, handleNavigation } from '../../../utils/helpers';
import { albumStrings } from '../../../utils/strings';
import styles from './styles';

const handleAlbumSave = async (isSaved, id, refetch) => {
  isSaved ? await unsaveAlbum(id) : await saveAlbum(id);
  refetch();
};

const AlbumHeader = ({ album }) => {
  const navigation = useNavigation();
  const { data } = useRequest(album.artists[0].href);
  const { isSaved, refetch } = useAlbum().isSaved(album.id);

  return (
    <View style={styles.albumHeaderView}>
      <ArrowBackButton />
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: album.images[0].url }} />
      </View>
      <Text style={styles.titleText}>{album.name}</Text>
      <ProfileButton image={data?.images[0].url} name={album.artists[0].name} onPress={() => handleNavigation(data, navigation)} />
      <Text style={styles.releaseDateText}>{albumStrings.album + " • " + getYear(album.release_date)}</Text>
      <View style={styles.buttonsView}>
        <View style={styles.leftButtons}>
          <CheckButton isSaved={isSaved} onPress={() => handleAlbumSave(isSaved, album.id, refetch)} />
          <DownloadButton />
          <OptionsButton />
        </View>
        <PlayQueueButton item={album} />
      </View>
    </View>
  )
};

export default AlbumHeader;