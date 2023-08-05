import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

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
   * View style for the home header menu.
   * Represents a view for the home header menu with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - flexDirection: 'row' (horizontal layout direction)
   * - paddingVertical: 25 (vertical padding spacing)
   * - paddingLeft: 5 (left padding spacing)
  */
  homeHeader: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 25,
    paddingLeft: 5,
  },
  /**
   * View style for the flat list container.
   * Represents a view for the flat list container with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - alignItems: 'center' (align items to the center of the container)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  flatListContainer: {
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
   * - fontWeight: 'bold' (bold font weight)
   * - textAlign: 'left' (text alignment to the left)
   * - marginLeft: 7 (left margin spacing)
  */
  homeHeaderText: {
    flex: 1,
    color: colors.spotifyWhite,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 7,
  },
});

export default styles;