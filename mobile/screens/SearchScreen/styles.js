import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the style for a background with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.appBackground,
  },
});

export default styles;