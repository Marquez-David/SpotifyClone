import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { searchBarStrings } from '../../utils/strings';
import colors from '../../utils/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ valueText, changeText }) => (
  <View style={styles.searchBarView}>
    <Ionicons name='search-outline' size={20} color={colors.spotifySuperDarkGray} style={{ marginLeft: 10 }} />
    <TextInput
      placeholder={searchBarStrings.artistsSongsOrPodcasts}
      value={valueText}
      onChangeText={changeText}
      placeholderTextColor={colors.spotifySuperDarkGray}
      style={styles.searchBarText}></TextInput>
  </View>
);

export default SearchBar;