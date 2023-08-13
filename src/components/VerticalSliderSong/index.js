import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';

import { extractArtistNames } from '../../utils/helpers';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VerticalSliderSong = ({ data }) => (
  <View style={styles.songView}>
    <Text style={styles.titleText}>{data.name}</Text>
    <View style={styles.descriptionView}>
      {data.explicit ? <MaterialIcons name='explicit' size={15} color={colors.spotifyGray}></MaterialIcons> : null}
      <Text style={styles.descriptionText}>{extractArtistNames(data.artists)}</Text>
    </View>
    <Pressable onPress={() => console.log('dots')} style={styles.dotsPressable}>
      <Entypo name='dots-three-vertical' size={21} color={colors.spotifyWhite}></Entypo>
    </Pressable>
    <View>
    </View>
  </View>
);

export default VerticalSliderSong;