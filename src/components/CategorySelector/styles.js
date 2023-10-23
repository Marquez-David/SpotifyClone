import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * View style for the headers menu in your library.
   * Represents a view for the headers menu with the following properties:
   * - flexDirection: 'row' (horizontal layout direction)
  */
  headers: {
    flexDirection: 'row',
  },
  /**
   * Screen header text style.
   * Represents the text style for the categories header with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 30 (font size in points)
   * - marginLeft: 20 (left margin spacing)
   * - marginTop: 20 (top margin spacing)
  */
  whiteText: {
    color: colors.spotifyWhite,
    fontFamily: 'GothamBold',
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
  },
  /**
   * Screen header text style.
   * Represents the text style for the categories header with the following properties:
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - fontSize: 30 (font size in points)
   * - marginLeft: 20 (left margin spacing)
   * - marginTop: 20 (top margin spacing)
  */
  grayText: {
    color: colors.spotifyGray,
    fontFamily: 'GothamMedium_1',
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
  },
});

export default styles;