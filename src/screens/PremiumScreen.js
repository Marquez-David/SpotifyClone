import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

const PremiumScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>
        {'Premium Screen'}
      </Text>
    </View>
  );
};

export default PremiumScreen;