import { StyleSheet } from 'react-native';
import colors from '../utils/colors.js';

const styles = StyleSheet.create({
  /**
   * Style for the entire bottom navigation container.
   * Represents the style for the bottom navigation container with the following properties:
   * - backgroundColor: colors.bottomTabBackground (background color using the 'bottomTabBackground' color from the 'colors' object)
  */
  bottomContainer: {
    backgroundColor: colors.bottomTabBackground,
  },
  /**
   * Style icons in the bottom navigation bar.
   * Represents the style for the icons in the bottom navigation bar with the following properties:
   * - fontSize: 24 (font size in points)
   * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
  */
  icon: {
    fontSize: 24,
    position: 'absolute',
    color: colors.spotifyWhite,
  },
  /**
   * Circle Icon style.
   * Represents the style for a circular icon with the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - position: 'absolute' (absolute positioning)
   * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
  */
  circleIcon: {
    fontSize: 14,
    position: 'absolute',
    color: colors.spotifyWhite,
  }
});

export default styles;