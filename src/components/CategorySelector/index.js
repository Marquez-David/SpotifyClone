import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { categorySelectorStrings } from '../../utils/strings';
import styles from './styles';

import { ModalContext } from '../../context/modal';

const SubcategorySelector = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <View style={styles.headers}>
      <FlatList
        data={Object.values(categorySelectorStrings)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.subcategoryView} onPress={() => openModal()}>
            <Text style={styles.subcategoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SubcategorySelector;