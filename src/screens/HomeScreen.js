import React from 'react';
import { ScrollView, SafeAreaView , View, Image, Text } from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.text}>
        {'Home Screen'}
      </Text>
    </ScrollView >
  );
};

export default HomeScreen;