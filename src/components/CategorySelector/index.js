import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { categorySelectorStrings, modalStrings } from '../../utils/strings';
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
          <TouchableOpacity style={styles.subcategoryView} onPress={() => openModal(modalStrings.undeDevelopment, modalStrings.ok)}>
            <Text style={styles.subcategoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SubcategorySelector;