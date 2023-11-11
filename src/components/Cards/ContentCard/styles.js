import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Touchable Item style.
   * Represents the style for a touchable item with the following properties:
   * - marginBottom: 15 (bottom margin of 15 units)
   * - borderRadius: 10 (border radius of 10 units)
   * - alignItems: 'center' (centered horizontal alignment)
   * - flexDirection: 'row' (horizontal layout with children)
  */
  touchableItem: {
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - width: 75 (width of 75 units)
   * - height: 75 (height of 75 units)
   * - borderRadius: 10 (border radius of 10 units)
   * - alignItems: 'center' (centered horizontal alignment)
   * - justifyContent: 'center' (centered vertical alignment)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
  */
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.spotifySuperDarkGray,
  },
  /**
   * Artist Image style.
   * Represents the style for an artist image with the following properties:
   * - width: 75 (width of 75 units)
   * - height: 75 (height of 75 units)
   * - borderRadius: 50 (border radius of 50 units)
   * - alignItems: 'center' (centered horizontal alignment)
   * - justifyContent: 'center' (centered vertical alignment)
   * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
  */
  artistImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.spotifySuperDarkGray,
  },
  /**
   * Card Header style.
   * Represents the style for the header of a card with the following properties:
   * - marginHorizontal: 10 (horizontal margin of 10 units)
   * - flexDirection: 'column' (vertical layout with children)
  */
  cardHeader: {
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
   * Description style.
   * Represents the style for the description text with the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
  */
  description: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyGray,
  }
});

export default styles;