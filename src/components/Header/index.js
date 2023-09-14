import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../utils/colors';
import styles from './styles';

import { areAlbumsSaved, saveAlbum, unsaveAlbum } from '../../services/SpotifyRequests';

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
          setIsSaved(data?.[0]);
        }
      } catch (error) {
        console.log('Error while calling API: ' + error);
      }
    };

    fetchIsAlbumSaved();
  }, []);

  return { isSaved, setIsSaved };
};

/**
 * Custom hook for managing button properties such as type (icon) and color based on whether an album is saved.
 * @param {boolean} isSaved - A boolean indicating whether the album is saved or not.
 * @returns {Object} - An object containing button properties including type, color, setButtonType, and setButtonColor.
 */
const useButtonProps = (isSaved) => {
  const [buttonType, setButtonType] = useState(isSaved ? 'heart' : 'hearto');
  const [buttonColor, setButtonColor] = useState(isSaved ? colors.spotifyGreen : colors.spotifyWhite);

  useEffect(() => {
    setButtonType(isSaved ? 'heart' : 'hearto');
    setButtonColor(isSaved ? colors.spotifyGreen : colors.spotifyWhite);
  }, [isSaved]);

  return { buttonType, buttonColor, setButtonType, setButtonColor };
};

/**
 * Toggles the save state of an album, updating the relevant UI properties.
 * @param {boolean} isSaved - Indicates whether the album is currently saved.
 * @param {function} setIsSaved - A state setter function to update the saved state.
 * @param {function} setButtonType - A state setter function to update the button type (icon).
 * @param {function} setButtonColor - A state setter function to update the button color.
 * @param {string} id - The ID of the album to toggle the save state for.
 */
const handleAlbumSave = async (isSaved, setIsSaved, setButtonType, setButtonColor, id) => {
  if (isSaved) {
    await unsaveAlbum(id);
    setIsSaved(false);
    setButtonType('hearto');
    setButtonColor(colors.spotifyWhite);
  } else {
    await saveAlbum(id);
    setIsSaved(true);
    setButtonType('heart');
    setButtonColor(colors.spotifyGreen);
  }
};

const Header = ({ params }) => {
  const { isSaved, setIsSaved } = useIsAlbumSaved(params.type, params.id);
  const { buttonType, buttonColor, setButtonType, setButtonColor } = useButtonProps(isSaved);

  return (
    <View style={styles.background}>
      <View style={styles.iconView}>
        {params.type === 'album' ? (
          <AntDesign.Button
            name={buttonType}
            size={21}
            color={buttonColor}
            backgroundColor={colors.appBackground}
            onPress={() => handleAlbumSave(isSaved, setIsSaved, setButtonType, setButtonColor, params.id)}
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