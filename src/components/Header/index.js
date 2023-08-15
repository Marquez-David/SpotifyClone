import React from 'react';
import { View, Pressable } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../utils/colors';
import styles from './styles';

const Header = ({ }) => (
  <View style={styles.background}>
    <View style={styles.iconView}>
      <AntDesign.Button
        name='hearto'
        size={21}
        color={colors.spotifyWhite}
        backgroundColor={colors.appBackground}
        onPress={() => console.log('heart')}>
      </AntDesign.Button>
      <Entypo.Button
        name='dots-three-vertical'
        size={21}
        color={colors.spotifyWhite}
        backgroundColor={colors.appBackground}
        onPress={() => console.log('dots')}>
      </Entypo.Button>
    </View>
  </View >
);

export default Header;