import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the touchable profile button.
   * Provides the following properties:
   * - marginVertical: 10 (vertical margin of 10 units)
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements)
  */
  touchableProfile: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the profile image.
   * Provides the following properties:
   * - height: 34 (height of 34 units)
   * - width: 34 (width of 34 units)
   * - borderRadius: 50 (border radius of 50 units, creating a circular shape)
  */
  image: {
    height: 34,
    width: 34,
    borderRadius: 50,
  },
  /**
   * Style for the profile name text.
   * Provides the following properties:
   * - marginLeft: 8 (left margin of 8 units)
   * - fontSize: 13 (font size of 13 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyWhite (white text color)
  */
  nameText: {
    marginLeft: 8,
    fontSize: 13,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyWhite
  }
});

export default styles;