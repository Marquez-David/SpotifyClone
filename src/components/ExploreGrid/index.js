import React, { useContext } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

import colors from '../../utils/colors';
import styles from './styles';
import { modalStrings } from '../../utils/strings';

import { useCategories } from '../../hooks/useCategories';
import FallbackDataCard from '../ErrorCard';
import { ModalContext } from '../../context/modal';

const ExploreGrid = () => {
  const { openModal } = useContext(ModalContext);
  const { isLoading, isError, categories, refetch } = useCategories();
  return (
    <>
      {isLoading || isError ?
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && <FallbackDataCard onPressAction={refetch} />}
        </View> :
        <View style={styles.cardContainer}>
          {categories?.map((item) => (
            <TouchableOpacity key={item.id} style={styles.cardView} onPress={() => openModal(modalStrings.undeDevelopment, modalStrings.ok)}>
              <Image source={{ uri: item.icons[0].url }} style={styles.cardImage} />
              <Text style={styles.categoriesTitleText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      }
    </>
  );
};

export default ExploreGrid;