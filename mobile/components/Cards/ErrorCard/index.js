import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { errorCardStrings } from '../../../utils/strings';
import styles from './styles';

const ErrorCard = ({ onPressAction }) => {
  return (
    <View style={styles.errorCardView}>
      <View style={styles.textView}>
        <Text style={styles.titleText}>{errorCardStrings.errorTitle}</Text>
        <Text style={styles.descriptionText}>{errorCardStrings.errorDescription}</Text>
      </View>
      <View style={styles.touchableOpacityView}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={onPressAction}>
          <Text style={styles.touchableOpacityText}>{errorCardStrings.tryAgain}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ErrorCard;