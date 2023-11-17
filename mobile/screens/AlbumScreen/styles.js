import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the background style for a component with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  /**
   * Songs view style
   * Represents the style for the view containing the vertical song list.
   * - paddingHorizontal: 5 (horizontal padding spacing)
   */
  songsView: {
    paddingHorizontal: 5,
  },
  /**
   * Fallback View style.
   * Represents the style for a fallback view with the following properties:
   * - marginVertical: Dimensions.get('window').height / 10 (vertical margin based on window dimensions)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 10,
  },
});


export default styles;