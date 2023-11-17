import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the touchable play button.
   * Provides the following properties:
   * - paddingVertical: 6 (vertical padding of 6 units)
   * - paddingHorizontal: 11 (horizontal padding of 11 units)
   * - borderRadius: 100 (border radius of 100 units, creating a circular shape)
   * - backgroundColor: colors.spotifyWhite (background color using the Spotify white color)
  */
  touchablePlay: {
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 100,
    backgroundColor: colors.spotifyWhite
  }
});

export default styles;