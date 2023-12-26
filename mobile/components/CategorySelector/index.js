import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import colors from '../../utils/colors';
import styles from './styles';

const CategorySelector = ({ categories, selected, setSelected }) => {

  const handleSelect = useCallback((category) => {
    setSelected((prevSelected) => (prevSelected === category ? null : category));
  }, [setSelected]);

  return (
    <View style={styles.headers}>
      <FlatList
        data={Object.values(categories)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: [categoryName, categoryId] }) => {
          const backgroundColor = selected === categoryId ? colors.spotifyDarkGreen : colors.appBackground;
          const borderColor = selected === categoryId ? colors.spotifyGreen : colors.spotifyWhite;
          return (
            <TouchableOpacity
              style={[styles.categoryView, { backgroundColor: backgroundColor, borderColor: borderColor }]}
              onPress={() => handleSelect(categoryId)}>
              <Text style={styles.categoryText}>{categoryName}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default CategorySelector;