import React from 'react';
import { ScrollView, SafeAreaView, View, Image, Text, Button } from 'react-native';

import styles from './Styles';
import colors from '../utils/Colors';
import { homeStrings } from '../utils/Strings';

import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Selects a greeting message based on the current time.
 * @returns message
 */
function timerMessage() {
  const currentTime = new Date().getHours();
  var message = homeStrings.goodEvening;
  if (currentTime > 6 && currentTime < 12) {
    message = homeStrings.goodMorning;
  } else if (currentTime > 12 && currentTime < 19) {
    message = homeStrings.goodAfternoon;
  }
  return message;
}

const HomeScreen = () => {
  const message = timerMessage();
  return (
    <ScrollView style={styles.background}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeHeaderText}>{message}</Text>
        <Ionicons.Button
          name='notifications-outline'
          size={27} backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('Notificacion')}>
        </Ionicons.Button>
        <Ionicons.Button
          name='time-outline'
          size={27}
          backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('Timer')}>
        </Ionicons.Button>
        <Ionicons.Button
          name='settings-outline'
          size={27}
          backgroundColor={colors.appBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('Settings')}>
        </Ionicons.Button>
      </View>
    </ScrollView >
  );
};

export default HomeScreen;