import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import { handleNavigation } from '../../utils/helpers';
import { subcategories } from '../../utils/strings';

import ConditionalImage from '../ConditionalImage';

const VerticalSliderItem = ({ data, subcategory, description }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.imageView} onPress={() => handleNavigation(data, navigation)}>
      <ConditionalImage image={data.images[0]?.url} size={20} style={subcategory === subcategories.artists ? styles.verticalArtistsImage : styles.verticalImage} />
      <View style={styles.textView}>
        <Text style={styles.playlistNameText}>{data.name}</Text>
        {(subcategory != subcategories.artists && subcategory != subcategories.podcasts) &&
          <Text style={styles.ownerText}>{description}</Text>}
      </View>
    </TouchableOpacity>
  )
};

export default VerticalSliderItem;