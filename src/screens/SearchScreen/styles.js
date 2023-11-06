import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

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
  /**
   * Marged Background style.
   * Represents the style for a background with margin at the bottom with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - marginBottom: dimensions.marginPlayerVisible (bottom margin based on 'marginPlayerVisible' from 'dimensions')
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  margedBackground: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: dimensions.marginPlayerVisible,
    backgroundColor: colors.appBackground,
  },
});

export default styles;