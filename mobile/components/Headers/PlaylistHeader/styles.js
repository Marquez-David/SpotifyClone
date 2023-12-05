import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the playlist header view.
   * Provides the following properties:
   * - marginHorizontal: 10 (horizontal margin of 10 units)
  */
  playlistHeaderView: {
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
   * Style for the playlist image.
   * Provides the following properties:
   * - width: 200 (width of 200 units)
   * - height: 200 (height of 200 units)
   * - alignItems: 'center' (horizontal center alignment of elements)
   * - justifyContent: 'center' (vertical center alignment of elements)
   * - resizeMode: 'contain' (image is contained within its bounds)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the Spotify super dark gray color)
  */
  image: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: colors.spotifySuperDarkGray,
  },
  /**
   * Style for the playlist title text.
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
   * Style for the owner's name text.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyWhite (white text color)
  */
  ownerNameText: {
    marginVertical: 5,
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the playlist description text.
   * Provides the following properties:
   * - fontSize: 12 (font size of 12 units)
   * - opacity: 0.7 (text opacity of 0.7)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyGray (Spotify gray text color)
  */
  descriptionText: {
    fontSize: 12,
    opacity: 0.7,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyGray,
  },
  /**
   * Style for the owner's icon.
   * Provides the following properties:
   * - height: 30 (height of 30 units)
   * - width: 30 (width of 30 units)
   * - borderRadius: 100 (border radius of 100 units, creating a circular shape)
  */
  ownerIcon: {
    height: 30,
    width: 30,
    borderRadius: 100,
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
   * - width: '45%' (width taking up 45% of the available space)
   * - alignItems: 'center' (center alignment of elements horizontally)
   * - justifyContent: 'space-between' (space between elements)
   * - flexDirection: 'row' (elements arranged in a row)
  */
  leftButtons: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default styles;