import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import FollowButton from '../../CustomButtons/FollowButton';
import OptionsButton from '../../CustomButtons/OptionsButton';
import ShuffleButton from '../../CustomButtons/ShuffleButton';
import PlayButton from '../../CustomButtons/PlayButton';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { roundNumber } from '../../../utils/helpers';
import colors from '../../../utils/colors';
import styles from './styles';

const ArtistHeader = ({ artist }) => {
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
          <FollowButton artistId={artist.id} />
          <OptionsButton style={{ marginLeft: 26 }} />
        </View>
        <View style={styles.rightButtons}>
          <ShuffleButton />
          <PlayButton item={artist} />
        </View>
      </View>
    </>
  )
};

export default ArtistHeader;