import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the background.
   * Provides the following properties:
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    backgroundColor: colors.appBackground,
  },
  /**
   * Style for the content view.
   * Provides the following property:
   * - marginHorizontal: 10 (horizontal margin of 10 units)
  */
  contentView: {
    marginHorizontal: 10,
  },
  /**
   * Style for the fallback view.
   * Provides the following property:
   * - marginVertical: Dimensions.get('window').height / 10 (vertical margin based on the device window height)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 10,
  },
  /**
   * Style for the popular songs view.
   * Provides the following property:
   * - flexDirection: 'column' (elements laid out in a column)
  */
  popularSongsView: {
    flexDirection: 'column',
  },
  /**
   * Style for the popular songs title.
   * Provides the following properties:
   * - color: colors.spotifyWhite (text color using 'spotifyWhite' from the 'colors' object)
   * - textAlign: 'left' (text alignment to the left)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 16 (font size of 16 units)
   * - marginVertical: 10 (vertical margin of 10 units)
  */
  popularSongsTitle: {
    color: colors.spotifyWhite,
    textAlign: 'left',
    fontFamily: 'GothamBold',
    fontSize: 16,
    marginVertical: 10,
  },
  /**
   * Style for the related artist view.
   * Provides the following property:
   * - flexDirection: 'column' (elements laid out in a column)
  */
  relatedArtistView: {
    flexDirection: 'column',
  },
  /**
   * Style for the related artist title.
   * Provides the following properties:
   * - color: colors.spotifyWhite (text color using 'spotifyWhite' from the 'colors' object)
   * - textAlign: 'left' (text alignment to the left)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 16 (font size of 16 units)
   * - marginTop: 10 (top margin of 10 units)
  */
  relatedArtistTitle: {
    color: colors.spotifyWhite,
    textAlign: 'left',
    fontFamily: 'GothamBold',
    fontSize: 16,
    marginTop: 10,
  }
});

export default styles;