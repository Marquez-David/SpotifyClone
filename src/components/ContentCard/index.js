import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { contentType } from '../../utils/strings';
import { handleNavigation } from '../../utils/helpers';
import styles from './styles';

import ConditionalImage from '../../components/ConditionalImage';

const ContentCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.touchableItem} onPress={() => handleNavigation(item, navigation)}>
      <ConditionalImage image={item.images[0]?.url} size={20} style={item.type === contentType.artist ? styles.artistImage : styles.image} />
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{item.name}</Text>
        {/*<Text style={styles.description}>{''}</Text>*/}
      </View>
    </TouchableOpacity>
  );
}

export default ContentCard;