import React from 'react';
import { View, Pressable } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../utils/colors';
import styles from './styles';

const Header = ({ }) => (
  <View style={styles.background}>
    <Pressable style={styles.iconView} onPress={() => console.log('heart')}>
      <AntDesign name='hearto' size={21} color={colors.spotifyWhite}></AntDesign>
    </Pressable>
    <Pressable style={styles.iconView} onPress={() => console.log('dots')}>
      <Entypo name='dots-three-vertical' size={21} color={colors.spotifyWhite}></Entypo>
    </Pressable>
  </View >
);

export default Header;