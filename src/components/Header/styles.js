import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
   * - flexDirection: 'row' (horizontal layout direction)
  */
  background: {
    backgroundColor: colors.appBackground,
    flexDirection: 'row',
  },
  /**
   * Style for icon view.
   * Represents the style for icons with the following properties:
   * - marginLeft: 20 (left margin spacing)
  */
  iconView: {
    marginLeft: 20,
  },
});

export default styles;