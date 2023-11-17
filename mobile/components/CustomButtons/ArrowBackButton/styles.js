import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /**
   * Style for the touchable back button.
   * Provides the following properties:
   * - padding: 7 (padding of 7 units)
   * - borderRadius: 100 (border radius of 100 for a circular shape)
   * - top: 10 (positioned 10 units from the top)
   * - position: 'relative' (relative positioning)
   * - alignSelf: 'flex-start' (aligns the element to the start of its container)
   * - backgroundColor: 'transparent' (transparent background)
  */
  touchableBack: {
    padding: 7,
    borderRadius: 100,
    top: 10,
    position: 'relative',
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
  }
});

export default styles;