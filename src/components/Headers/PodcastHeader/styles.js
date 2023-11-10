import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the podcast header view.
   * Provides the following properties:
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
  */
  podcastHeaderView: {
    paddingHorizontal: 10,
  },
  /**
   * Style for the image view.
   * Provides the following properties:
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignContent: 'center' (center alignment of elements vertically)
  */
  imageView: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  /**
   * Style for the podcast image.
   * Provides the following properties:
   * - marginRight: 10 (right margin of 10 units)
   * - marginVertical: 20 (vertical margin of 20 units)
   * - borderRadius: 10 (border radius of 10 units)
   * - width: 140 (width of 140 units)
   * - height: 140 (height of 140 units)
  */
  image: {
    marginRight: 10,
    marginVertical: 20,
    borderRadius: 10,
    width: 140,
    height: 140,
  },
  /**
   * Style for the title view.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - alignSelf: 'center' (center alignment within the parent container)
   * - justifyContent: 'center' (center alignment of elements vertically)
  */
  titleView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  /**
   * Style for the podcast name.
   * Provides the following properties:
   * - paddingBottom: 10 (bottom padding of 10 units)
   * - fontSize: 32 (font size of 32 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (white text color)
  */
  name: {
    paddingBottom: 10,
    fontSize: 32,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the podcast publisher.
   * Provides the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (white text color)
  */
  publisher: {
    fontSize: 14,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the buttons view.
   * Provides the following properties:
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements)
   * - width: '55%' (width taking up 55% of the available space)
   * - justifyContent: 'space-between' (space between elements)
  */
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
    justifyContent: 'space-between',
  }
});

export default styles;