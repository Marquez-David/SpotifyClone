import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Headers style.
   * Represents the style for headers with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
  */
  headers: {
    flexDirection: 'row',
  },
  /**
   * White Text style.
   * Represents the style for white text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 30 (font size of 30 units)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - marginTop: 20 (top margin of 20 units)
  */
  whiteText: {
    color: colors.spotifyWhite,
    fontFamily: 'GothamBold',
    fontSize: 30,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  /**
   * Gray Text style.
   * Represents the style for gray text with the following properties:
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - fontSize: 30 (font size of 30 units)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - marginTop: 20 (top margin of 20 units)
  */
  grayText: {
    color: colors.spotifyGray,
    fontFamily: 'GothamMedium_1',
    fontSize: 30,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default styles;