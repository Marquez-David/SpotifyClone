import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the touchable view.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - alignItems: 'center' (horizontal center alignment of elements)
   * - justifyContent: 'flex-end' (alignment of elements at the end of the container)
   * - flexDirection: 'row' (elements arranged in a row)
  */
  touchableView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
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
  },
  /**
   * Style for the touchable shuffle button.
   * Provides the following properties:
   * - paddingVertical: 9 (vertical padding of 9 units)
   * - paddingHorizontal: 14 (horizontal padding of 14 units)
   * - borderRadius: 100 (border radius of 100 units, creating a circular shape)
  */
  touchableShuffle: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 100,
  }
});

export default styles;