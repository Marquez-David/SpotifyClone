import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the background.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - alignItems: 'center' (center alignment of elements horizontally)
   * - justifyContent: 'center' (center alignment of elements vertically)
   * - backgroundColor: colors.appBackground (background color using the app background color)
  */
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBackground,
  }
});


export default styles;