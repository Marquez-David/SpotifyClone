import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { contentType } from '../../../utils/strings';
import { handleNavigation, shortenText, parseOwner } from '../../../utils/helpers';
import styles from './styles';

import ConditionalImage from '../../ConditionalImage';

const ContentCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.touchableItem} onPress={() => handleNavigation(item, navigation)}>
      <ConditionalImage image={item.images[0]?.url} size={20} style={item.type === contentType.artist ? styles.artistImage : styles.image} />
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{shortenText(item.name, 35)}</Text>
        <Text style={styles.description}>{parseOwner(item)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ContentCard;