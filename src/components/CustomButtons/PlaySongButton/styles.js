import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the touchable play button.
   * Provides the following properties:
   * - paddingVertical: 10 (vertical padding of 10 units)
   * - paddingHorizontal: 17 (horizontal padding of 17 units)
   * - borderRadius: 100 (border radius of 100 units, creating a circular shape)
   * - backgroundColor: colors.spotifyGreen (background color using the Spotify green color)
  */
  touchablePlay: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 100,
    backgroundColor: colors.spotifyGreen
  }
});

export default styles;