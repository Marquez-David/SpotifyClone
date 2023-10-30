import { StyleSheet } from 'react-native';
import colors from '../utils/colors.js';

const styles = StyleSheet.create({
  /**
   * Style for the entire bottom navigation container.
   * Represents the style for the bottom navigation container with the following properties:
   * - backgroundColor: colors.bottomTabBackground (background color using the 'bottomTabBackground' color from the 'colors' object)
  */
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.bottomTabBackground,
  },
  /**
   * Style for focused icons in the bottom navigation bar.
   * Represents the style for the focused icons in the bottom navigation bar with the following properties:
   * - fontSize: 24 (font size in points)
   * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
  */
  focusedIconStyle: {
    fontSize: 24,
    color: colors.spotifyWhite,
  },
  /**
   * Style for unfocused icons in the bottom navigation bar.
   * Represents the style for the unfocused icons in the bottom navigation bar with the following properties:
   * - fontSize: 21 (font size in points)
   * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
  */
  unfocusedIconStyle: {
    fontSize: 21,
    color: colors.spotifyWhite,
  },
});

export default styles;