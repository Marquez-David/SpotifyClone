import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const EmptyDataCard = ({ title, description, buttonText }) => {
  return (
    <View style={styles.emptyDataCardView}>
      <View style={styles.textView}>
        <Text style={styles.titleText}> {title}</Text>
        <Text style={styles.descriptionText}> {description}</Text>
      </View>
      <View style={styles.pressableView}>
        <Pressable style={styles.pressable}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default EmptyDataCard;