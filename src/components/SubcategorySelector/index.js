import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { getSubcategories } from '../../utils/helpers';
import styles from './styles';

const SubcategorySelector = ({ category, selected, setSelected }) => {
  const subcategories = getSubcategories(category);
  return (
    <View style={styles.headers}>
      {subcategories.map((subcategory, index) => (
        <TouchableOpacity key={index} style={styles.subcategoryTouchableOpacity} onPress={() => setSelected(subcategory)}>
          <Text style={selected === subcategory ? styles.whiteText : styles.grayText}>{subcategory}</Text>
          {subcategory === selected && <View style={styles.isPressedBar}></View>}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SubcategorySelector;