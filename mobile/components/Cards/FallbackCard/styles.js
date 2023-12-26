import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the data card view.
   * Provides the following properties:
   * - alignContent: 'center' (center alignment of content along the cross-axis)
   * - justifyContent: 'center' (center alignment of content along the main-axis)
   * - alignItems: 'center' (center alignment of items within the container)
  */
  dataCardView: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  /**
   * Style for the title text.
   * Provides the following properties:
   * - color: colors.spotifyGray (text color using the Spotify gray color)
   * - fontSize: 12 (font size of 12 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - textAlign: 'center' (center alignment of text)
  */
  text: {
    color: colors.spotifyGray,
    fontSize: 12,
    fontFamily: 'GothamMedium',
    textAlign: 'center',
  },
  /**
   * Style for the touchable opacity.
   * Provides the following properties:
   * - marginTop: 20 (top margin of 20 units)
   * - borderRadius: 50 (border radius of 50 units)
   * - justifyContent: 'center' (center alignment of content along the main-axis)
   * - backgroundColor: colors.spotifyWhite (background color using the Spotify white color)
  */
  touchableOpacity: {
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: colors.spotifyWhite,
  },
  /**
   * Style for the touchable opacity text.
   * Provides the following properties:
   * - fontSize: 16 (font size of 16 units)
   * - padding: 14 (padding of 14 units for all sides)
   * - paddingHorizontal: 24 (horizontal padding of 24 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - textAlign: 'center' (center alignment of text)
   * - color: colors.spotifyBlack (text color using the Spotify black color)
  */
  touchableOpacityText: {
    fontSize: 16,
    padding: 14,
    paddingHorizontal: 24,
    fontFamily: 'GothamBold',
    textAlign: 'center',
    color: colors.spotifyBlack,
  }
});

export default styles;