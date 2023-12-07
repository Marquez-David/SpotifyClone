import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for an individual song TouchableOpacity.
   * Represents the style for a single song TouchableOpacity with the following properties:
   * - height: 50 (fixed height in points)
   * - marginTop: 10 (top margin spacing)
   * - flexDirection: 'row' (horizontal layout direction)
  */
  songTouchableOpacity: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
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
   * - marginLeft: 10 (left margin spacing)
   * - fontSize: 14 (font size in points)
  */
  titleText: {
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
   * - marginLeft: 5 (left margin spacing)
   * - fontSize: 12.5 (font size in points)
  */
  descriptionText: {
    color: colors.spotifyGray,
    marginLeft: 5,
    fontSize: 12.5,
  },
  /**
   * Style for the options view.
   * Provides the following properties:
   * - padding: 5 (padding of 5 units for all sides)
   * - right: 15 (positioned 15 units from the right)
   * - flexDirection: 'row' (elements arranged in a row)
   * - position: 'absolute' (absolute positioning)
   * - alignSelf: 'center' (center alignment within the parent container)
  */
  optionsView: {
    padding: 5,
    right: 15,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center'
  },
});


export default styles;