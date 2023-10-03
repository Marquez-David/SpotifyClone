import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
    * Artist Header View style.
    * Represents the style for an artist header view with the following properties:
    * - width: '100%' (width of 100% to span the entire width)
    * - justifyContent: 'space-between' (space between children)
    * - position: 'absolute' (absolute positioning)
    * - flexDirection: 'row' (horizontal layout with children)
    * - top: 0 (positioned at the top)
    * - zIndex: 2 (z-index for layering)
   */
  artistHeaderView: {
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    zIndex: 2,
  },
  /**
   * Right Buttons View style.
   * Represents the style for a view containing right-aligned buttons with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - alignItems: 'center' (centered alignment of children)
  */
  rightButtonsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Follow Button style.
   * Represents the style for a follow button with the following properties:
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - paddingVertical: 10 (vertical padding of 10 units)
   * - backgroundColor: 'transparent' (transparent background)
   * - borderRadius: 7 (border radius of 7 units)
   * - borderWidth: 1.3 (border width of 1.3 units)
   * - borderColor: colors.spotifyWhite (border color using the 'spotifyWhite' color from the 'colors' object)
   * - alignSelf: 'flex-start' (aligns the button to the start of the text)
   * - marginTop: 3 (top margin of 3 units)
  */
  followButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 7,
    borderWidth: 1.3,
    borderColor: colors.spotifyWhite,
  },
  /**
   * Follow Button Text style.
   * Represents the style for the text within the follow button with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 9 (font size of 9 units)
   * - fontFamily: 'GothamBook' (font family 'GothamBook')
  */
  followButtonText: {
    color: colors.spotifyWhite,
    fontSize: 9,
    fontFamily: 'GothamBook',
  },
});

export default styles;