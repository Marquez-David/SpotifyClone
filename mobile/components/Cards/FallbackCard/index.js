import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const FallbackCard = ({ text, buttonText, onPress }) => (
  <View style={styles.dataCardView}>
    <Text style={styles.text}>{text}</Text>
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <Text style={styles.touchableOpacityText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

export default FallbackCard;