import React from 'react';
import { TouchableOpacity, Share } from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../../utils/colors';

/**
 * Asynchronous function that shares the Spotify URL of an item.
 * @param {object} item - An object containing the external_urls property with the Spotify URL to be shared.
 * @returns {void}
 */
const onShare = async (item) => {
  try {
    await Share.share({ message: item.external_urls.spotify });
  } catch (error) {
    console.log("Error sharing the content: " + error.message);
  }
};

const ShareButton = ({ item }) => (
  <TouchableOpacity onPress={() => onShare(item)}>
    <Octicons name='share-android' size={18} color={colors.spotifyGray} />
  </TouchableOpacity>
)

export default ShareButton;