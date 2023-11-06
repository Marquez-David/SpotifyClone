import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingLeft: 10 (left padding spacing)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.appBackground,
  },
  /**
   * Marged Background style.
   * Represents the style for a background with margin at the bottom with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingLeft: 10 (left padding spacing)
   * - marginBottom: dimensions.marginPlayerVisible (bottom margin based on 'marginPlayerVisible' from 'dimensions')
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  margedBackground: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: dimensions.marginPlayerVisible,
    backgroundColor: colors.appBackground,
  },
  /**
   * View style for the carousel view.
   * Represents a view for the carousel with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - alignItems: 'center' (align items to the center of the container)
   * - justifyContent: 'center' (justify content to the center of the container)
  */
  carouselView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;