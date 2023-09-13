import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';

import { extractArtistNames } from '../../utils/helpers';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VerticalSliderSong = ({ item, type }) => {
  const data = type === 'album' ? item : item.track;

  return (
    <View style={styles.songView}>
      {type === 'playlist' && <Image style={styles.image} source={{ uri: data.album.images[0].url }} />}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{data.name}</Text>
        <View style={styles.descriptionView}>
          {data.explicit ? <MaterialIcons name='explicit' size={15} color={colors.spotifyGray}></MaterialIcons> : null}
          <Text style={styles.descriptionText}>{extractArtistNames(data.artists)}</Text>
        </View>
      </View>
      <View style={styles.dotsPressable}>
        <Entypo.Button
          name='dots-three-vertical'
          size={15}
          backgroundColor={colors.appBackground}
          color={colors.spotifyGray}
          onPress={() => console.log('dots')}>
        </Entypo.Button>
      </View>
      <View>
      </View>
    </View>
  )
};

export default VerticalSliderSong;