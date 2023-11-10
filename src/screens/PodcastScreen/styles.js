import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the background.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - backgroundColor: colors.appBackground (background color using the app background color)
  */
  background: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  /**
   * Style for the content view.
   * Provides the following properties:
   * - marginHorizontal: 10 (horizontal margin of 10 units)
  */
  contentView: {
    marginHorizontal: 10,
  },
  /**
   * Style for the episodes header text.
   * Provides the following properties:
   * - marginTop: 10 (top margin of 10 units)
   * - fontSize: 16 (font size of 16 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (white text color)
  */
  episodesHeaderText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the episodes view.
   * Provides the following properties:
   * - paddingHorizontal: 18 (horizontal padding of 18 units)
   * - paddingVertical: 15 (vertical padding of 15 units)
  */
  episodesView: {
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  /**
   * Style for the fallback view.
   * Provides the following properties:
   * - marginVertical: Dimensions.get('window').height / 10 (vertical margin based on window height)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 10,
  }
});


export default styles;