import React from 'react';
import { View, Text } from 'react-native';

import { useRequest } from '../../../hooks/useRequest';

import ArrowBackButton from '../../CustomButtons/ArrowBackButton';
import ProfileButton from '../../CustomButtons/ProfileButton';
import DownloadButton from '../../CustomButtons/DownloadButton';
import AddUserButton from '../../CustomButtons/AddUserButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import ShuffleButton from '../../CustomButtons/ShuffleButton';
import PlayButton from '../../CustomButtons/PlayButton';

import ConditionalImage from '../../ConditionalImage';

import styles from './styles';

const PlaylistHeader = ({ playlist }) => {
  const { data } = useRequest(playlist.owner.href);
  return (
    <View style={styles.playlistHeaderView}>
      <ArrowBackButton />
      <View style={styles.imageView}>
        <ConditionalImage image={playlist.images[0]?.url} size={55} style={styles.image} />
      </View>
      <Text style={styles.titleText}>{playlist.name}</Text>
      {playlist.description.length > 0 && <Text style={styles.descriptionText}>{playlist.description}</Text>}
      <ProfileButton image={data?.images[0].url} name={data?.display_name} />
      <View style={styles.buttonsView} >
        <View style={styles.leftButtons}>
          <DownloadButton style={{ marginRight: 20 }} />
          <AddUserButton style={{ marginRight: 20 }} />
          <OptionsButton />
        </View>
        <View style={styles.rightButtons}>
          <ShuffleButton style={{ marginRight: 20 }} />
          <PlayButton style={{ marginRight: 20 }} />
        </View>
      </View>
    </View>
  )
};

export default PlaylistHeader;