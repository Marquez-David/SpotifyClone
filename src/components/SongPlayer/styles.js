import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  /**
   * Custom Component style.
   * Represents the style for a custom component with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - width: '100%' (width of 100% to span the entire width)
   * - bottom: 49 (positioned 49 units from the bottom)
   * - justifyContent: 'space-between' (space between children)
   * - flexDirection: 'row' (horizontal layout with children)
   * - backgroundColor: colors.bottomTabBackground (background color using the 'bottomTabBackground' color from the 'colors' object)
  */
  customComponent: {
    position: 'absolute',
    width: '100%',
    bottom: 49,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.bottomTabBackground,
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - width: 55 (width of 55 units)
   * - height: 60 (height of 60 units)
  */
  image: {
    width: 55,
    height: 60,
  },
  /**
   * Title View style.
   * Represents the style for a view containing the title with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - marginLeft: 10 (left margin of 10 units)
   * - justifyContent: 'center' (centered vertical alignment of children)
   * - flexDirection: 'column' (vertical layout with children)
  */
  titleView: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  /**
   * Title Text style.
   * Represents the style for the title text with the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  titleText: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyWhite,
  },
  /**
   * Description Text style.
   * Represents the style for the description text with the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
  */
  descriptionText: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyGray,
  },
  /**
   * Play Button style.
   * Represents the style for a play button with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - alignSelf: 'center' (centered horizontal alignment)
   * - justifyContent: 'center' (centered vertical alignment)
  */
  playButton: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;