import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { parseFallbackData } from '../../utils/helpers';

const FallbackDataCard = ({ type, onPressAction }) => {
  const { title, description, buttonText } = parseFallbackData(type);

  return (
    <View style={styles.fallbackDataView}>
      <View style={styles.textView}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.touchableOpacityView}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={onPressAction}>
          <Text style={styles.touchableOpacityText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FallbackDataCard;