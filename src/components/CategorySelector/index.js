import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { categories } from '../../utils/strings';
import styles from './styles';

const CategorySelector = ({ selected, setSelected }) => (
  <View style={styles.headers}>
    <TouchableOpacity onPress={() => setSelected(categories.music)}>
      <Text style={selected === categories.music ? styles.whiteText : styles.grayText}>{categories.music}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelected(categories.podcasts)}>
      <Text style={selected === categories.podcasts ? styles.whiteText : styles.grayText}>{categories.podcasts}</Text>
    </TouchableOpacity>
  </View>
);

export default CategorySelector;