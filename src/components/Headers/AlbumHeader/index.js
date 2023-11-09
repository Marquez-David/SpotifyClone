import React from 'react';
import { View, Text, Image } from 'react-native';

import { useIsAlbumSaved } from '../../../hooks/useIsAlbumSaved';
import ArrowBackButton from '../../CustomButtons/ArrowBackButton';
import CheckButton from '../../CustomButtons/CheckButton';
import ProfileButton from '../../CustomButtons/ProfileButton';
import DownloadButton from '../../CustomButtons/DownloadButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import PlayButton from '../../CustomButtons/PlayButton';
import ShuffleButton from '../../CustomButtons/ShuffleButton';

import { useRequest } from '../../../hooks/useRequest';
import { saveAlbum, unsaveAlbum } from '../../../services/requests';
import { getYear } from '../../../utils/helpers';
import { albumStrings } from '../../../utils/strings';
import styles from './styles';

const handleAlbumSave = async (isSaved, id, refetch) => {
  isSaved ? await unsaveAlbum(id) : await saveAlbum(id);
  refetch();
};

const AlbumHeader = ({ album }) => {
  const { isSaved, refetch } = useIsAlbumSaved(album.id);
  const { data } = useRequest(album.artists[0].href);
  return (
    <View style={styles.albumHeaderView}>
      <ArrowBackButton />
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: album.images[0].url }} />
      </View>
      <Text style={styles.titleText}>{album.name}</Text>
      <ProfileButton image={data?.images[0].url} name={album.label} />
      <Text style={styles.releaseDateText}>{albumStrings.album + " • " + getYear(album.release_date)}</Text>
      <View style={styles.buttonsView}>
        <View style={styles.leftButtons}>
          <CheckButton style={{ marginRight: 20 }} isSaved={isSaved} onPress={() => handleAlbumSave(isSaved, album.id, refetch)} />
          <DownloadButton style={{ marginRight: 20 }} />
          <OptionsButton />
        </View>
        <View style={styles.rightButtons}>
          <ShuffleButton />
          <PlayButton />
        </View>
      </View>
    </View>
  )
};

export default AlbumHeader;