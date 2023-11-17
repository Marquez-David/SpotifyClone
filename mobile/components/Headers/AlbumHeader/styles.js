import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the album header view.
   * Provides the following properties:
   * - marginHorizontal: 10 (horizontal margin of 10 units)
  */
  albumHeaderView: {
    marginHorizontal: 10,
  },
  /**
   * Style for the image container.
   * Provides the following properties:
   * - marginVertical: 10 (vertical margin of 10 units)
   * - justifyContent: 'center' (vertical center alignment of elements)
   * - alignItems: 'center' (horizontal center alignment of elements)
   * - marginTop: -10 (negative top margin of 10 units)
  */
  imageView: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  /**
   * Style for the album image.
   * Provides the following properties:
   * - resizeMode: 'contain' (the image is contained within its bounds)
   * - width: Dimensions.get('window').width (width equal to the window's width)
   * - height: Dimensions.get('window').height / 3.5 (height is one-third of the window's height)
  */
  image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.5,
  },
  /**
   * Style for the album title text.
   * Provides the following properties:
   * - marginVertical: 10 (vertical margin of 10 units)
   * - fontSize: 20 (font size of 20 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (white text color)
  */
  titleText: {
    marginVertical: 10,
    fontSize: 20,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the release date text.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyGray (Spotify gray text color)
  */
  releaseDateText: {
    marginVertical: 5,
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyGray,
  },

  /**
   * Style for the buttons view.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements)
  */
  buttonsView: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the left buttons.
   * Provides the following properties:
   * - width: '30%' (width taking up 30% of the available space)
   * - alignItems: 'center' (center alignment of elements horizontally)
   * - justifyContent: 'space-between' (space between elements)
   * - flexDirection: 'row' (elements arranged in a row)
  */
  leftButtons: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  /**
   * Style for the right buttons.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - alignItems: 'center' (center alignment of elements)
   * - justifyContent: 'flex-end' (alignment of elements at the end of the container)
   * - flexDirection: 'row' (elements arranged in a row)
  */
  rightButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
});

export default styles;