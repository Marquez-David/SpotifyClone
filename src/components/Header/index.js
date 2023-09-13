import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../utils/colors';
import styles from './styles';

import { areAlbumsSaved } from '../../services/SpotifyRequests';

/**
 * Custom hook that checks whether a list of album IDs is saved in the user's Spotify library.
 * * @param {string[]} type - Type of the data.
 * @param {string[]} id - An array of album IDs to check.
 * @returns {Object} - An object containing the state of saved albums and a function to update the state.
 */
const useIsAlbumSaved = (type, id) => {
  const [isSaved, setIsSaved] = useState(null);

  useEffect(() => {
    const fetchIsAlbumSaved = async () => {
      try {
        if (type === 'album') {
          let data = await areAlbumsSaved(id);
          setIsSaved(data);
        }
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchIsAlbumSaved();
  }, []);

  return { isSaved, setIsSaved };
};

const Header = ({ params }) => {
  const { isSaved } = useIsAlbumSaved(params.data.type, params.data.id);

  return (
    <View style={styles.background}>
      <View style={styles.iconView}>
        {params.data.type === 'album' ? (
          <AntDesign.Button
            name={isSaved?.[0] ? 'heart' : 'hearto'}
            size={21}
            color={colors.spotifyWhite}
            backgroundColor={colors.appBackground}
            onPress={() => console.log('heart')}
          />
        ) : null}
        <Entypo.Button
          name='dots-three-vertical'
          size={21}
          color={colors.spotifyWhite}
          backgroundColor={colors.appBackground}
          onPress={() => console.log('dots')}>
        </Entypo.Button>
      </View>
    </View >
  )
};

export default Header;