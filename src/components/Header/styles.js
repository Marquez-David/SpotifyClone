import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    backgroundColor: colors.appBackground,
  },
  /**
   * Style for icon view.
   * Represents the style for icons with the following properties:
   * - flexDirection: 'row' (horizontal layout direction)
   * - left: 15 (left position spacing)
  */
  iconView: {
    flexDirection: 'row',
    left: 15,
  },
});

export default styles;