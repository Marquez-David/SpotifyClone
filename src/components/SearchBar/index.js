import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

import colors from '../../utils/Colors';

import Entypo from 'react-native-vector-icons/Entypo';

/**
 * This functional component renders a custom search bar. 
 * @param {*} labelText 
 * @param {*} category 
 * @returns 
 */
const SearchBar = ({ labelText, valueText, changeText }) => (
  <View style={styles.searchBarView}>
    <Entypo name='magnifying-glass' size={16} color={colors.spotifyWhite} style={{ marginLeft: 10 }} />
    <TextInput
      placeholder={labelText}
      value={valueText}
      onChangeText={changeText}
      placeholderTextColor={colors.spotifyWhite}
      style={styles.searchBarText}></TextInput>
  </View>
);

export default SearchBar;