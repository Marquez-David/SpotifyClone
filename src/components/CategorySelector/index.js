import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import colors from '../../utils/colors';
import styles from './styles';

const CategorySelector = ({ categories, selected, setSelected }) => {

  const handleSelect = useCallback((category) => {
    setSelected((prevSelected) => (prevSelected === category ? '' : category));
  }, [setSelected]);

  return (
    <View style={styles.headers}>
      <FlatList
        data={Object.values(categories)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: [categoryName, categoryId] }) => {
          const backgroundColor = selected === categoryId ? colors.spotifyGreen : colors.spotifySuperDarkGray;
          const textColor = selected === categoryId ? colors.spotifySuperDarkGray : colors.spotifyWhite;
          return (
            <TouchableOpacity
              style={[styles.categoryView, { backgroundColor: backgroundColor }]}
              onPress={() => handleSelect(categoryId)}>
              <Text style={[styles.categoryText, { color: textColor }]}>{categoryName}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default CategorySelector;