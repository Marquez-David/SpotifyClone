import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import styles from '../SearchScreen/styles';
import { searchStrings } from '../../utils/strings';

import { useCategories } from '../../hooks/useCategories';

import SearchBar from '../../components/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState(null);
  const { categories } = useCategories();

  return (
    <ScrollView style={styles.background}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          {searchStrings.search}
        </Text>
      </View>
      <View style={styles.searchBarView}>
        <SearchBar
          labelText={searchStrings.artistsSongsOrPodcasts}
          valueText={searchText}
          changeText={setSearchText}
        />
        <Text style={styles.exploreText}>{searchStrings.exploreAll}</Text>
      </View>
      <View style={styles.cardContainer}>
        {categories?.map((item, index) => (
          <View key={item.id} style={styles.cardView}>
            <Image source={{ uri: item.icons[0].url }} style={styles.cardImage} />
            <Text style={styles.categoriesTitleText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;