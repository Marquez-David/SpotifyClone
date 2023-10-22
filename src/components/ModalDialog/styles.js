import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  /**
   * Modal View style.
   * Represents the style for a modal view with the following properties:
   * - display: 'flex' (flexible display)
   * - flexDirection: 'column' (vertical layout with children)
   * - justifyContent: 'space-between' (space between children)
   * - backgroundColor: colors.spotifyWhite (background color using the 'spotifyWhite' color from the 'colors' object)
   * - borderRadius: 15 (border radius of 15 units)
   * - borderWidth: 1 (border width of 1 unit)
   * - borderColor: colors.spotifyWhite (border color using the 'spotifyWhite' color from the 'colors' object)
   * - position: 'absolute' (absolute positioning)
   * - top: '50%' (positioned at 50% from the top)
   * - left: '25%' (positioned at 25% from the left)
   * - transform: [{ translateX: -50 }, { translateY: -50 }] (centered position)
   * - width: '75%' (width of 75% of the parent container)
   * - height: 'auto' (auto-adjusted height)
   * - padding: 15 (padding of 25 units)
  */
  modalView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.spotifyWhite,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.spotifyWhite,
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: '75%',
    height: 'auto',
    padding: 15,
  },
  /**
   * Text style.
   * Represents the style for text within the modal view with the following properties:
   * - textAlign: 'center' (centered text alignment)
   * - fontSize: 16 (font size of 16 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyBlack (text color using the 'spotifyBlack' color from the 'colors' object)
   * - marginBottom: 20 (bottom margin of 20 units)
  */
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'GothamBold',
    color: colors.spotifyBlack,
    marginBottom: 20,
  },
  /**
   * Button style.
   * Represents the style for a button with the following properties:
   * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
   * - borderRadius: 30 (border radius of 30 units)
   * - padding: 13 (padding of 13 units)
  */
  button: {
    backgroundColor: colors.spotifyGreen,
    borderRadius: 30,
    padding: 13,
  },
  /**
   * TouchableOpacity Text style.
   * Represents the style for text within a TouchableOpacity element with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 16 (font size of 16 units)
   * - textAlign: 'center' (centered text alignment)
  */
  touchableOpacityText: {
    color: colors.spotifyWhite,
    fontFamily: 'GothamBold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;