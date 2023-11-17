import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';
import { exploreStrings } from '../../utils/strings';

import BottomPadding from '../../components/BottomPadding';
import ScreenHeader from '../../components/Headers/ScreenHeader';
import ExploreGrid from '../../components/Grids/ExploreGrid';
import SearchBar from '../../components/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState(null);
  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={exploreStrings.explore} icon={'camera-outline'} />
      <SearchBar valueText={searchText} changeText={setSearchText} />
      <ExploreGrid />
      <BottomPadding />
    </ScrollView>
  );
};

export default SearchScreen;