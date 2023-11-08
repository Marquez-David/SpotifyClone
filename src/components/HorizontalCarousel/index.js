import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ModalContext } from '../../context/modal';
import ConditionalImage from '../ConditionalImage';

import { contentType, modalStrings } from '../../utils/strings';
import { handleNavigation } from '../../utils/helpers';
import styles from './styles';

const HorizontalCarousel = ({ items, title }) => {
  const navigation = useNavigation();
  const { openModal } = useContext(ModalContext);
  return (
    <View style={styles.carouseView}>
      {items && <Text style={styles.titleText}>{title}</Text>}
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={item.type === contentType.artist ? styles.artistImageView : styles.imageView}
              onPress={() => openModal(modalStrings.undeDevelopment, modalStrings.ok)}>
              <ConditionalImage image={item.images[0]?.url} size={40} style={item.type === contentType.artist ? styles.artistImage : styles.image} />
              <Text style={styles.descriptionText}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default HorizontalCarousel;