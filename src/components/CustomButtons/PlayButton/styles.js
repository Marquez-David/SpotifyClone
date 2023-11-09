import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the touchable play button.
   * Provides the following properties:
   * - paddingVertical: 9 (vertical padding of 9 units)
   * - paddingHorizontal: 14 (horizontal padding of 14 units)
   * - borderRadius: 100 (border radius of 100 units, creating a circular shape)
   * - backgroundColor: colors.spotifyGreen (background color using the Spotify green color)
  */
  touchablePlay: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 100,
    backgroundColor: colors.spotifyGreen,
  }
});

export default styles;