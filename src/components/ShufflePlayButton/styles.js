import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Random TouchableOpacity style.
   * Represents the style for a TouchableOpacity component with random behavior, with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - marginHorizontal: Dimensions.get('window').width / 6 (horizontal margin based on window dimensions)
   * - justifyContent: 'center' (justify content vertically centered)
   * - borderRadius: 50 (border radius in points to create a circular shape)
   * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
  */
  shufflePlayTouchableOpacity: {
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
});

export default styles;