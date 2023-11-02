import React, { useState, useContext } from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';

import colors from '../../utils/colors';
import styles from '../SearchScreen/styles';
import { searchStrings, subcategories } from '../../utils/strings';

import { useCategories } from '../../hooks/useCategories';

import FallbackDataCard from '../../components/FallbackDataCard';
import SearchBar from '../../components/SearchBar';

import { PlayerContext } from '../../context/player';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState(null);
  const { isLoading, isError, categories, refetch } = useCategories();
  const { player } = useContext(PlayerContext);

  return (
    <ScrollView style={player.visible ? styles.margedBackground : styles.background}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{searchStrings.search}</Text>
      </View>
      <View style={styles.searchBarView}>
        <SearchBar
          labelText={searchStrings.artistsSongsOrPodcasts}
          valueText={searchText}
          changeText={setSearchText}
        />
      </View>
      {isLoading || isError ?
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && <FallbackDataCard type={subcategories.error} onPressAction={refetch} />}
        </View> :
        <View style={styles.cardContainer}>
          {categories?.map((item) => (
            <View key={item.id} style={styles.cardView}>
              <Image source={{ uri: item.icons[0].url }} style={styles.cardImage} />
              <Text style={styles.categoriesTitleText}>{item.name}</Text>
            </View>
          ))}
        </View>
      }
    </ScrollView>
  );
};

export default SearchScreen;