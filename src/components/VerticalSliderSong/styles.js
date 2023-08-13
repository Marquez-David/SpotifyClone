import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for an individual song view.
   * Represents the style for a single song view with the following properties:
   * - height: 50 (fixed height in points)
   * - marginTop: 10 (top margin spacing)
   * - marginLeft: 15 (left margin spacing)
   * - justifyContent: 'center' (justify content vertically centered)
  */
  songView: {
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center',
  },
  /**
   * Style for title text.
   * Represents the text style for the title of a song with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 16 (font size in points)
  */
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 16,
  },
  /**
   * Style for the description container.
   * Represents the style for a container holding the song description with the following properties:
   * - flexDirection: 'row' (horizontal layout direction)
  */
  descriptionView: {
    flexDirection: 'row'
  },
  /**
   * Style for description text.
   * Represents the text style for the song description with the following properties:
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
   * - fontSize: 12 (font size in points)
   * - marginLeft: 3 (left margin spacing)
  */
  descriptionText: {
    color: colors.spotifyGray,
    fontSize: 12,
    marginLeft: 3,
  },
  /**
   * Style for the dots pressable.
   * Represents the style for a pressable to access additional options (dots) with the following properties:
   * - flexDirection: 'row' (horizontal layout direction)
   * - position: 'absolute' (positioning as absolute)
   * - right: 15 (right position spacing)
  */
  dotsPressable: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
  }, 
});

export default styles;