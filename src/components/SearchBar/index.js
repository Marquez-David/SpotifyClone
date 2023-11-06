import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { searchBarStrings } from '../../utils/strings';
import colors from '../../utils/colors';

import Entypo from 'react-native-vector-icons/Entypo';

const SearchBar = ({ valueText, changeText }) => (
  <View style={styles.searchBarView}>
    <Entypo name='magnifying-glass' size={16} color={colors.spotifyWhite} style={{ marginLeft: 10 }} />
    <TextInput
      placeholder={searchBarStrings.artistsSongsOrPodcasts}
      value={valueText}
      onChangeText={changeText}
      placeholderTextColor={colors.spotifyWhite}
      style={styles.searchBarText}></TextInput>
  </View>
);

export default SearchBar;