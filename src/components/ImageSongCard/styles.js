import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for an individual song TouchableOpacity.
   * Represents the style for a single song TouchableOpacity with the following properties:
   * - height: 50 (fixed height in points)
   * - marginTop: 10 (top margin spacing)
   * - flexDirection: 'row' (horizontal layout direction)
   * - alignItems: 'center' (align items vertically centered)
  */
  songTouchableOpacity: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the song image.
   * Represents the style for the image of a song with the following properties:
   * - width: 48 (fixed width in points)
   * - height: 48 (fixed height in points)
  */
  image: {
    width: 48,
    height: 48,
  },
  /**
   * Style for the title container.
   * Represents the style for the container of the song title with the following properties:
   * - flexDirection: 'column' (vertical layout direction)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  titleView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  /**
   * Style for title text.
   * Represents the text style for the title of a song with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - marginLeft: 10 (left margin spacing)
   * - fontSize: 14 (font size in points)
  */
  titleText: {
    color: colors.spotifyWhite,
    marginLeft: 10,
    fontSize: 14,
  },
  /**
   * Style for the description container.
   * Represents the style for a container holding the song description with the following properties:
   * - flexDirection: 'row' (horizontal layout direction)
   * - marginLeft: 10 (left margin spacing)
  */
  descriptionView: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  /**
   * Style for description text.
   * Represents the text style for the song description with the following properties:
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
   * - fontSize: 12.5 (font size in points)
  */
  descriptionText: {
    color: colors.spotifyGray,
    fontSize: 12.5,
  },
  /**
   * Style for the dots button.
   * Represents the style for a button to access additional options (dots) with the following properties:
   * - flexDirection: 'row' (horizontal layout direction)
   * - position: 'absolute' (positioning as absolute)
   * - right: 1 (right position spacing)
  */
  dotsButton: {
    flexDirection: 'row',
    position: 'absolute',
    right: 1,
  },
});


export default styles;