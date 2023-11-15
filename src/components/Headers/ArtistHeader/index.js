import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import FollowButton from '../../CustomButtons/FollowButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import PlayQueueButton from '../../CustomButtons/PlayQueueButton';

import { useIsArtistSaved } from '../../../hooks/useIsArtistSaved';
import { useArtistAlbums } from '../../../hooks/useArtistAlbums';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { roundNumber, getRandomItem } from '../../../utils/helpers';
import { unfollowArtist, followArtist } from '../../../services/requests';
import colors from '../../../utils/colors';
import styles from './styles';

const handleFollowArtist = async (isSaved, artistsId, refetch) => {
  isSaved ? await unfollowArtist(artistsId) : await followArtist(artistsId);
  refetch();
}

const ArtistHeader = ({ artist }) => {
  const { isSaved, refetch } = useIsArtistSaved(artist.id);
  const { isLoading, isError, data } = useArtistAlbums(artist.id)
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.artistHeaderView}>
        <Image style={styles.image} source={{ uri: artist.images[0].url }} />
        <TouchableOpacity style={styles.touchableBack} onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={25} color={colors.spotifyWhite} />
        </TouchableOpacity>
        <Text style={styles.title}>{artist.name}</Text>
      </View>
      <Text style={styles.followersText}>{roundNumber(artist.followers.total)}</Text>
      <View style={styles.buttonsView}>
        <View style={styles.leftButtons}>
          <FollowButton isSaved={isSaved} onPress={() => handleFollowArtist(isSaved, artist.id, refetch)} />
          <OptionsButton />
        </View>
        {!(isLoading || isError) && <PlayQueueButton item={getRandomItem(data)} />}
      </View>
    </>
  )
};

export default ArtistHeader;