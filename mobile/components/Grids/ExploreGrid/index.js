import React, { useContext } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

import colors from '../../../utils/colors';
import styles from './styles';
import { fallbackStrings } from '../../../utils/strings';

import { useCategories } from '../../../hooks/useCategories';
import FallbackCard from '../../Cards/FallbackCard';
import { ModalContext } from '../../../context/modal';

const ExploreGrid = () => {
  const { openModal } = useContext(ModalContext);
  const { isLoading, isError, categories, refetch } = useCategories();
  return (
    <>
      {isLoading || isError ?
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && <FallbackCard text={fallbackStrings.error} buttonText={fallbackStrings.tryAgain} onPress={refetch} />}
        </View> :
        <View style={styles.cardContainer}>
          {categories?.map((item) => (
            <TouchableOpacity key={item.id} style={styles.cardView} onPress={() => openModal()}>
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