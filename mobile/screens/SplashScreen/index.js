import React from 'react';
import { View, Dimensions } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../utils/colors';
import styles from './styles';

const SplashScreen = () => (
  <View style={styles.background}>
    <Entypo name={'spotify'} size={Dimensions.get('window').height / 3.5} color={colors.spotifyGreen} />
  </View>
);

export default SplashScreen;