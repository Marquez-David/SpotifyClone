import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { useRequest } from '../../../hooks/useRequest';
import { ModalContext } from '../../../context/modal';

import ArrowBackButton from '../../CustomButtons/ArrowBackButton';
import ProfileButton from '../../CustomButtons/ProfileButton';
import DownloadButton from '../../CustomButtons/DownloadButton';
import AddUserButton from '../../CustomButtons/AddUserButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import PlayQueueButton from '../../CustomButtons/PlayQueueButton';
import ShareButton from '../../CustomButtons/ShareButton';
import ConditionalImage from '../../ConditionalImage';

import styles from './styles';

const PlaylistHeader = ({ playlist }) => {
  const { data } = useRequest(playlist.owner.href);
  const { openModal } = useContext(ModalContext);
  return (
    <View style={styles.playlistHeaderView}>
      <ArrowBackButton />
      <View style={styles.imageView}>
        <ConditionalImage image={playlist.images[0]?.url} size={55} style={styles.image} />
      </View>
      <Text style={styles.titleText}>{playlist.name}</Text>
      {playlist.description.length > 0 && <Text style={styles.descriptionText}>{playlist.description}</Text>}
      <ProfileButton image={data?.images[0].url} name={data?.display_name} onPress={() => openModal()} />
      <View style={styles.buttonsView} >
        <View style={styles.leftButtons}>
          <DownloadButton />
          <AddUserButton />
          <ShareButton item={playlist} />
          <OptionsButton />
        </View>
        {playlist.tracks.total > 0 && <PlayQueueButton item={playlist} />}
      </View>
    </View>
  )
};

export default PlaylistHeader;