import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Error Card View style.
   * Represents the style for an error card view with the following properties:
   * - alignContent: 'center' (centered content alignment)
   * - justifyContent: 'center' (centered content justification)
   * - borderRadius: 20 (border radius of 20 units)
   * - paddingVertical: 15 (vertical padding of 15 units)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
  */
  errorCardView: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    backgroundColor: colors.spotifySuperDarkGray,
  },
  /**
   * View for the title and description.
   * Represents a view with the following properties:
   * - paddingHorizontal: 25 (horizontal padding spacing)
  */
  textView: {
    paddingHorizontal: 25,
  },
  /**
   * View for the TouchableOpacity component.
   * Represents a view for a TouchableOpacity component with the following properties:
   * - paddingHorizontal: 50 (horizontal padding spacing)
   * - marginTop: 30 (top margin spacing)
  */
  touchableOpacityView: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
  /**
   * Component title text style.
   * Represents the text style for the component title with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 25 (font size in points)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - textAlign: 'center' (text alignment to the center)
  */
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 25,
    fontFamily: 'GothamBold',
    textAlign: 'center',
  },
  /**
   * Component description text style.
   * Represents the text style for the component description with the following properties:
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
   * - marginTop: 10 (top margin spacing)
   * - fontSize: 15 (font size in points)
   * - textAlign: 'center' (text alignment to the center)
  */
  descriptionText: {
    color: colors.spotifyGray,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  /**
   * Component touchableOpacity style.
   * Represents the style for the touchableOpacity component with the following properties:
   * - borderRadius: 50 (border radius in points to create a circular shape)
   * - height: 45 (height in points)
   * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  touchableOpacity: {
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.spotifyGreen,
    justifyContent: 'center',
  },
  /**
   * TouchableOpacity text style.
   * Represents the text style for the TouchableOpacity text with the following properties:
   * - color: colors.spotifyBlack (text color using the 'spotifyBlack' color from the 'colors' object)
   * - fontSize: 16.5 (font size in points)
   * fontFamily
   * - textAlign: 'center' (text alignment to the center)
  */
  touchableOpacityText: {
    color: colors.spotifyBlack,
    fontSize: 16.5,
    fontFamily: 'GothamBold',
    textAlign: 'center',
  },
});

export default styles;