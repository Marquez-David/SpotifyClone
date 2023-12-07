import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Touchable Item style.
   * Represents the style for a touchable item with the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - borderRadius: 10 (border radius of 10 units)
   * - alignItems: 'center' (centered horizontal alignment)
   * - flexDirection: 'row' (horizontal layout with children)
  */
  touchableItem: {
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - width: 65 (width of 65 units)
   * - height: 65 (height of 65 units)
   * - borderRadius: 10 (border radius of 10 units)
   * - alignItems: 'center' (centered horizontal alignment)
   * - justifyContent: 'center' (centered vertical alignment)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
  */
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.spotifySuperDarkGray,
  },
  /**
   * Artist Image style.
   * Represents the style for an artist image with the following properties:
   * - width: 65 (width of 65 units)
   * - height: 65 (height of 65 units)
   * - borderRadius: 50 (border radius of 50 units)
   * - alignItems: 'center' (centered horizontal alignment)
   * - justifyContent: 'center' (centered vertical alignment)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
  */
  artistImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.spotifySuperDarkGray,
  },
  /**
   * Style for the card header.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - marginHorizontal: 10 (horizontal margin of 10 units)
   * - flexDirection: 'column' (elements arranged in a column)
  */
  cardHeader: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  /**
   * Title style.
   * Represents the style for the title text with the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  title: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the description.
   * Provides the following properties:
   * - marginTop: 5 (top margin of 5 units)
   * - fontSize: 12 (font size of 12 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyGray (Spotify gray text color)
  */
  description: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyGray,
  }
});

export default styles;