import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the touchable button.
   * Provides the following properties:
   * - backgroundColor: 'transparent' (a transparent background)
   * - borderRadius: 6 (rounded corners with a radius of 6 pixels)
   * - borderWidth: 2 (a 2-pixel wide border)
   * - alignSelf: 'flex-start' (aligned to the top-left within the container)
   * - borderColor: colors.spotifyWhite (white border color)
  */
  touchableButton: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderWidth: 2,
    alignSelf: 'flex-start',
    borderColor: colors.spotifyWhite,
  },
  /**
   * Style for the text within the touchable button.
   * Provides the following properties:
   * - padding: 7 (7-pixel padding around the text)
   * - fontSize: 12 (font size of 12 pixels)
   * - fontFamily: 'GothamBook' (the 'GothamBook' font)
   * - color: colors.spotifyWhite (white text color)
  */
  text: {
    padding: 7,
    fontSize: 12,
    fontFamily: 'GothamBook',
    color: colors.spotifyWhite,
  }
});

export default styles;