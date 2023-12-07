import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the card view.
   * Provides the following properties:
   * - flexDirection: 'row' (elements arranged in a row)
   * - flexWrap: 'wrap' (items are allowed to wrap to the next line)
   * - justifyContent: 'space-between' (space between elements)
  */
  cardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  /**
   * Style for the touchable card.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - borderRadius: 5 (border radius of 5 units)
   * - height: 50 (height of 50 units)
   * - alignItems: 'center' (center alignment of elements horizontally)
   * - width: Dimensions.get('window').width / 2.15 (width based on window width)
   * - flexDirection: 'row' (elements arranged in a row)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the Spotify super dark gray color)
  */
  touchableCard: {
    marginVertical: 5,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.15,
    flexDirection: 'row',
    backgroundColor: colors.spotifySuperDarkGray
  },
  /**
   * Style for the card image.
   * Provides the following properties:
   * - borderRadius: 5 (border radius of 5 units)
   * - height: 50 (height of 50 units)
   * - width: 50 (width of 50 units)
  */
  image: {
    borderRadius: 5,
    height: 50,
    width: 50,
  },
  /**
   * Style for the card text.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - marginHorizontal: 10 (horizontal margin of 10 units)
   * - fontSize: 12 (font size of 12 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (white text color)
  */
  text: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  }
});

export default styles;