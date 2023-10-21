import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the background style for a component with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  /**
   * Header information view style.
   * Represents the style for a view containing header information with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - height: Dimensions.get('window').height / 2.5 (height based on window dimensions)
   * - justifyContent: 'center' (justify content vertically centered)
   * - alignItems: 'center' (align items horizontally centered)
  */
  headerView: {
    flex: 1,
    height: Dimensions.get('window').height / 2.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - width: 175 (fixed width in points)
   * - height: 175 (fixed height in points)
  */
  image: {
    width: 175,
    height: 175,
  },
  /**
   * Title text style.
   * Represents the text style for a title with the following properties:
   * - marginTop: 10 (top margin spacing)
   * - fontSize: 20 (font size in points)
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
  */
  titleText: {
    marginTop: 10,
    fontSize: 20,
    color: colors.spotifyWhite,
    fontFamily: 'GothamBold',
  },
  /**
   * Description text style.
   * Represents the text style for a description with the following properties:
   * - fontSize: 15 (font size in points)
   * - marginTop: 3 (top margin spacing)
   * - color: colors.spotifyGray (text color using the 'spotifyDarkGray' color from the 'colors' object)
  */
  descriptionText: {
    fontSize: 15,
    marginTop: 3,
    color: colors.spotifyGray,
  },
  /**
   * Random TouchableOpacity style.
   * Represents the style for a TouchableOpacity component with random behavior, with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - marginHorizontal: Dimensions.get('window').width / 6 (horizontal margin based on window dimensions)
   * - justifyContent: 'center' (justify content vertically centered)
   * - borderRadius: 50 (border radius in points to create a circular shape)
   * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
  */
  randomTouchableOpacity: {
    flex: 1,
    marginHorizontal: Dimensions.get('window').width / 6,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.spotifyGreen,
  },
  /**
   * TouchableOpacity text style.
   * Represents the text style for text within a TouchableOpacity component with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 19 (font size in points)
   * - paddingVertical: 10 (vertical padding spacing)
   * - textAlign: 'center' (text alignment to the center)
   * - fontFamily: 'GothamMedium' (custom font family)
  */
  touchableOpacityText: {
    color: colors.spotifyWhite,
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center',
    fontFamily: 'GothamMedium',
  },
  /**
   * Songs view style
   * Represents the style for the view containing the vertical song list.
   * - marginTop: 10 (top margin spacing)
  */
  songsView: {
    marginTop: 10,
  },
  /**
   * Fallback View style.
   * Represents the style for a fallback view with the following properties:
   * - marginVertical: Dimensions.get('window').height / 10 (vertical margin based on window dimensions)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 10,
  },
});

export default styles;