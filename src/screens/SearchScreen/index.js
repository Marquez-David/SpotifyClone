import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from '../SearchScreen/styles';
import { searchStrings } from '../../utils/strings';
import SearchBar from '../../components/SearchBar';
import { getBrowseCategories } from '../../services/SpotifyRequests'

/**
 * Custom hook for managing categories state and fetching data.
 * Returns an object with categories and a setter function.
 * @returns 
 */
const useCategories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let data = await getBrowseCategories();
        setCategories(data);
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchCategories();
  }, []);

  return { categories, setCategories };
};

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