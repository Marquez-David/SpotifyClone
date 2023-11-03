import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingLeft: 10 (left padding spacing)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.appBackground,
  },
  /**
   * Marged Background style.
   * Represents the style for a background with margin at the bottom with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingLeft: 10 (left padding spacing)
   * - marginBottom: dimensions.marginPlayerVisible (bottom margin based on 'marginPlayerVisible' from 'dimensions')
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  margedBackground: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: dimensions.marginPlayerVisible,
    backgroundColor: colors.appBackground,
  },
  /**
   * View style for the home header menu.
   * Represents a view for the home header menu with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - flexDirection: 'row' (horizontal layout direction)
   * - alignItems: 'center' (align items to the center of the container)
   * - paddingVertical: 15 (vertical padding spacing)
  */
  homeHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  /**
   * View style for the carousel view.
   * Represents a view for the carousel with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - alignItems: 'center' (align items to the center of the container)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  carouselView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /**
   * Text style for the home header.
   * Represents the text style for the home header with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 27 (font size in points)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - textAlign: 'left' (text alignment to the left)
  */
  homeHeaderText: {
    flex: 1,
    color: colors.spotifyWhite,
    fontSize: 27,
    fontFamily: 'GothamBold',
    textAlign: 'left',
  },
});

export default styles;