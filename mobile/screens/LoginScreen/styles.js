import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  /**
   * Styling for the Spotify logo view.
   * Represents a view for the Spotify logo with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - height: 200 (height in points)
   * - paddingTop: 90 (top padding spacing)
   * - alignItems: 'center' (align items to the center of the container)
  */
  logoView: {
    flex: 1,
    height: 200,
    paddingTop: 90,
    alignItems: 'center',
  },
  /**
   * Styling for the Spotify TouchableOpacities.
   * Represents a view for TouchableOpacities with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingBottom: 40 (bottom padding spacing)
   * - justifyContent: 'flex-end' (justify content to the bottom of the container)
  */
  touchableOpacityView: {
    flex: 1,
    paddingBottom: 40,
    justifyContent: 'flex-end',
  },
  /**
   * Style for generic TouchableOpacities.
   * Represents the style for generic TouchableOpacities components with the following properties:
   * - borderRadius: 50 (border radius in points to create a circular shape)
   * - marginHorizontal: 25 (horizontal margin spacing)
   * - padding: 17 (padding in points)
   * - alignItems: 'center' (align items to the center of the container)
   * - alignContent: 'center' (align content to the center of the container)
   * - flexDirection: 'row' (horizontal layout direction)
  */
  genericTouchableOpacity: {
    borderRadius: 50,
    marginHorizontal: 25,
    padding: 17,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  /**
   * Text under logo custom style.
   * Represents the text style for the text under the logo with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 30 (font size in points)
   * - fontFamily: 'GothamBold' (custom family font)
   * - textAlign: 'center' (text alignment to the center)
  */
  logoText: {
    color: colors.spotifyWhite,
    fontSize: 30,
    fontFamily: 'GothamBold',
    textAlign: 'center',
  },
  /**
   * Text style for all TouchableOpacities.
   * Represents the text style for all TouchableOpacities with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 20 (font size in points)
   * - fontFamily: 'GothamBold' (custom family font)
   * - textAlign: 'center' (text alignment to the center)
   * - flex: 1 (flexible size to fit available space)
  */
  touchableOpacityText: {
    color: colors.spotifyWhite,
    fontSize: 20,
    fontFamily: 'GothamBold',
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;