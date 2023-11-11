import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';

import { libraryStrings } from '../../utils/strings';
import styles from './styles';

import { useSearchText } from '../../hooks/useSearchText';
import { useLibraryContent } from '../../hooks/useLibraryContent';

import ContentCard from '../../components/Cards/ContentCard';
import ScreenHeader from '../../components/Headers/ScreenHeader';
import SearchBar from '../../components/SearchBar';
import ErrorCard from '../../components/Cards/ErrorCard';
import CategorySelector from '../../components/CategorySelector';
import colors from '../../utils/colors';

const YourLibraryScreen = () => {
  const { searchText, setSearchText } = useSearchText('');
  const { isLoading, isError, data, refetch } = useLibraryContent();

  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={libraryStrings.library} icon={"add"} />
      <SearchBar valueText={searchText} changeText={setSearchText} />
      <CategorySelector />
      {isLoading && <View style={styles.fallbackView}><ActivityIndicator color={colors.spotifyGreen} /></View>}
      {isError && <View style={styles.fallbackView}><ErrorCard onPressAction={refetch} /></View>}
      {!isLoading && !isError && data.map((item) => (<ContentCard key={item.id} item={item} />))}
    </ScrollView>
  );
};

export default YourLibraryScreen;