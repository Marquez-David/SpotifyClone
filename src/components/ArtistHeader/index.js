import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { podcastStrings } from '../../utils/strings';
import colors from '../../utils/colors';
import styles from './styles';


const ArtistHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.artistHeaderView}>
      <AntDesign.Button
        name='arrowleft'
        size={23}
        backgroundColor={'transparent'}
        color={colors.spotifyWhite}
        style={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.goBack()}>
      </AntDesign.Button>
      <View style={styles.rightButtonsView}>
        <Pressable style={styles.followButton} onPress={() => console.log('follow')}>
          <Text style={styles.followButtonText}>{podcastStrings.follow}</Text>
        </Pressable>
        <Entypo.Button
          name='dots-three-vertical'
          size={19}
          backgroundColor={'transparent'}
          color={colors.spotifyWhite}
          style={{ marginLeft: 10 }}
          onPress={() => console.log('dots')}>
        </Entypo.Button>
      </View>
    </View>
  )
};

export default ArtistHeader;