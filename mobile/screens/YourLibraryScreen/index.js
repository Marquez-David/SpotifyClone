import React, { useState } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';

import { libraryStrings, categorySelectorStrings } from '../../utils/strings';
import styles from './styles';

import { useSearchText } from '../../hooks/useSearchText';
import { useLibraryContent } from '../../hooks/useLibraryContent';

import ContentCard from '../../components/Cards/ContentCard';
import ScreenHeader from '../../components/Headers/ScreenHeader';
import SearchBar from '../../components/SearchBar';
import ErrorCard from '../../components/Cards/FallbackCard';
import CategorySelector from '../../components/CategorySelector';
import colors from '../../utils/colors';
import BottomPadding from '../../components/BottomPadding';

/**
 * Filters an array of items based on a search text and a category filter.
 * @param {Array} data - The array of items to be filtered.
 * @param {string} category - Category filter to narrow down results by type.
 * @param {string} searchText - The search text used to filter items by name.
 * @returns {Array} - The filtered array of items based on the search text and category filter.
 */
const filterData = (data, category, searchText) => {
  // Filter items based on search text
  const textFiltered = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

  // Filter items based on category
  const categoryFiltered = category ? textFiltered.filter(item => item.type === category) : textFiltered;

  return categoryFiltered;
};

const YourLibraryScreen = () => {
  const [category, setCategory] = useState(null);
  const { searchText, setSearchText } = useSearchText('');
  const { isLoading, isError, data, refetch } = useLibraryContent();

  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={libraryStrings.library} icon={"add"} />
      <SearchBar valueText={searchText} changeText={setSearchText} />
      <CategorySelector categories={categorySelectorStrings} selected={category} setSelected={setCategory} />
      {isLoading && <View style={styles.fallbackView}><ActivityIndicator color={colors.spotifyGreen} /></View>}
      {isError && <View style={styles.fallbackView}><ErrorCard onPressAction={refetch} /></View>}
      {!isLoading && !isError && filterData(data, category, searchText).map((item) => (<ContentCard key={item.id} item={item} />))}
      <BottomPadding />
    </ScrollView>
  );
};

export default YourLibraryScreen;