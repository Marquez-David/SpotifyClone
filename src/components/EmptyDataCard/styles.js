import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * General component view.
   * Represents a view for an empty data card with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - alignContent: 'center' (align content to the center of the container)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  emptyDataCardView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
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
   * View for the pressable component.
   * Represents a view for a pressable component with the following properties:
   * - paddingHorizontal: 50 (horizontal padding spacing)
   * - marginTop: 30 (top margin spacing)
  */
  pressableView: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
  /**
   * Component title text style.
   * Represents the text style for the component title with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 25 (font size in points)
   * - fontWeight: 'bold' (bold font weight)
   * - textAlign: 'center' (text alignment to the center)
  */
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 25,
    fontWeight: 'bold',
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
   * Component pressable style.
   * Represents the style for the pressable component with the following properties:
   * - borderRadius: 50 (border radius in points to create a circular shape)
   * - height: 45 (height in points)
   * - backgroundColor: colors.spotifyWhite (background color using the 'spotifyWhite' color from the 'colors' object)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  pressable: {
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.spotifyWhite,
    justifyContent: 'center',
  },
  /**
   * Pressable text style.
   * Represents the text style for the pressable text with the following properties:
   * - color: colors.spotifyBlack (text color using the 'spotifyBlack' color from the 'colors' object)
   * - fontSize: 16.5 (font size in points)
   * - fontWeight: 'bold' (bold font weight)
   * - textAlign: 'center' (text alignment to the center)
  */
  buttonText: {
    color: colors.spotifyBlack,
    fontSize: 16.5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;