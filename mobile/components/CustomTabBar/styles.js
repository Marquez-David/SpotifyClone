import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Bottom Tab Gradient style.
   * Represents the style for a bottom tab gradient with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - height: 40 (height of 40 units)
   * - alignItems: 'center' (centered alignment of children)
   * - position: 'absolute' (absolute positioning)
   * - bottom: 0 (positioned at the bottom)
   * - width: '100%' (width of 100% relative to the parent)
   * - zIndex: 1 (z-index for layering)
  */
  bottomTabGradient: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  /**
   * Touchable Icon style.
   * Represents the style for a touchable icon with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - alignItems: 'center' (centered alignment of children)
  */
  touchableIcon: {
    flex: 1,
    alignItems: 'center',
  },
  /**
   * Label Text style.
   * Represents the style for label text with the following properties:
   * - fontSize: 10 (font size of 10 units)
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  labelText: {
    fontSize: 10,
    color: colors.spotifyWhite,
  },
  /**
   * Circle Icon style.
   * Represents the style for a circular icon with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - top: 4.5 (top position of 4.5 units)
   * - paddingRight: 3 (right padding of 3 units)
   * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
  */
  circleIcon: {
    position: 'absolute',
    top: 4.5,
    paddingRight: 3,
    color: colors.spotifyWhite,
  }
});

export default styles;