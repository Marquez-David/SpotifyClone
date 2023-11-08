import React, { useContext } from 'react';
import { View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../utils/colors';
import styles from './styles';

import { useIsAlbumSaved } from '../../hooks/useIsAlbumSaved';
import { saveAlbum, unsaveAlbum } from '../../services/requests';

import { useButtonType } from '../../hooks/useButtonType';
import { useButtonColor } from '../../hooks/useButtonColor';
import { ModalContext } from '../../context/modal';

/**
 * Toggles the save state of an album, updating the relevant UI properties.
 * @param {boolean} isSaved - Indicates whether the album is currently saved.
 * @param {function} setIsSaved - A state setter function to update the saved state.
 * @param {function} setButtonType - A state setter function to update the button type (icon).
 * @param {function} setButtonColor - A state setter function to update the button color.
 * @param {string} id - The ID of the album to toggle the save state for.
 */
const handleAlbumSave = async (isSaved, setButtonType, setButtonColor, id) => {
  if (isSaved) {
    await unsaveAlbum(id);
    setButtonType('hearto');
    setButtonColor(colors.spotifyWhite);
  } else {
    await saveAlbum(id);
    setButtonType('heart');
    setButtonColor(colors.spotifyGreen);
  }
};

const Header = ({ params }) => {
  const { isSaved } = useIsAlbumSaved(params.type, params.id);
  const { buttonType, setButtonType } = useButtonType(isSaved, 'heart', 'hearto');
  const { buttonColor, setButtonColor } = useButtonColor(isSaved, colors.spotifyGreen, colors.spotifyWhite);
  const { openModal } = useContext(ModalContext);

  return (
    <View style={styles.background}>
      <View style={styles.iconView}>
        {params.type === 'album' ? (
          <AntDesign.Button
            name={buttonType}
            size={21}
            color={buttonColor}
            backgroundColor={colors.appBackground}
            onPress={() => handleAlbumSave(isSaved, setButtonType, setButtonColor, params.id)}
          />
        ) : null}
        <Entypo.Button
          name='dots-three-vertical'
          size={21}
          color={colors.spotifyWhite}
          backgroundColor={colors.appBackground}
          onPress={() => openModal()}>
        </Entypo.Button>
      </View>
    </View>
  )
};

export default Header;