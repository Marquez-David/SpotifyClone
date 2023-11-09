import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Header style.
   * Represents the style for a header with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - alignItems: 'center' (centered alignment of children)
   * - paddingVertical: 15 (vertical padding of 15 units)
  */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  /**
   * Profile Icon View style.
   * Represents the style for a view containing a profile icon with the following properties:
   * - marginRight: 10 (right margin of 10 units)
  */
  profileIconView: {
    marginRight: 10,
  },
  /**
   * Profile Icon style.
   * Represents the style for a profile icon with the following properties:
   * - borderRadius: 50 (border radius of 50 units, for a circular icon)
   * - height: 34 (height of 34 units)
   * - width: 34 (width of 34 units)
  */
  profileIcon: {
    borderRadius: 50,
    height: 34,
    width: 34,
  },
  /**
   * Title Text style.
   * Represents the style for the title text within the header with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 27 (font size of 27 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - textAlign: 'left' (left-aligned text)
  */
  titleText: {
    flex: 1,
    color: colors.spotifyWhite,
    fontSize: 27,
    fontFamily: 'GothamBold',
    textAlign: 'left',
  },
  /**
   * Touchable Icon style.
   * Represents the style for a touchable icon with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - right: 15 (right position of 15 units)
  */
  touchableIcon: {
    position: 'absolute',
    right: 15,
  },
  /**
   * Icon style (nested within Touchable Icon style).
   * Represents the style for the icon itself with the following properties:
   * - fontSize: 25 (font size of 25 units)
   * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
  */
  icon: {
    fontSize: 25,
    color: colors.spotifyWhite,
  },
});

export default styles;