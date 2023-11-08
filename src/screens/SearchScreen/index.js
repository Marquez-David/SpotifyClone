import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';
import { exploreStrings } from '../../utils/strings';

import ScreenHeader from '../../components/ScreenHeader';
import ExploreGrid from '../../components/ExploreGrid';
import SearchBar from '../../components/SearchBar';

import { PlayerContext } from '../../context/player';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState(null);
  const { player } = useContext(PlayerContext);
  return (
    <ScrollView style={player.visible ? styles.margedBackground : styles.background}>
      <ScreenHeader title={exploreStrings.explore} icon={'camera-outline'} />
      <SearchBar valueText={searchText} changeText={setSearchText} />
      <ExploreGrid />
    </ScrollView>
  );
};

export default SearchScreen;