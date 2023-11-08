import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the background style for a component with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  /**
   * Header View style.
   * Represents the style for a header view with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - alignItems: 'center' (centered alignment of children)
   * - marginHorizontal: 18 (horizontal margin of 18 units)
   * - marginTop: 10 (top margin of 10 units)
  */
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 10,
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - borderRadius: 10 (border radius of 10 units)
   * - height: 100 (height of 100 units)
   * - width: 100 (width of 100 units)
  */
  image: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  /**
   * Header Text View style.
   * Represents the style for a header text view with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingLeft: 13 (left padding of 13 units)
  */
  headerTextView: {
    flex: 1,
    paddingLeft: 13,
  },
  /**
   * Title Text style.
   * Represents the style for a title text with the following properties:
   * - fontSize: 23 (font size of 19 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  titleText: {
    fontSize: 23,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Publisher Text style.
   * Represents the style for a publisher text with the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - paddingTop: 10 (top padding of 10 units)
   * - fontFamily: 'GothamBook' (font family 'GothamBook')
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  publisherText: {
    fontSize: 13,
    paddingTop: 10,
    fontFamily: 'GothamBook',
    color: colors.spotifyWhite,
  },
  /**
   * Buttons View style.
   * Represents the style for a view containing buttons with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - paddingLeft: 18 (left padding of 18 units)
   * - paddingTop: 13 (top padding of 13 units)
  */
  buttonsView: {
    flexDirection: 'row',
    paddingLeft: 18,
    paddingTop: 13,
  },
  /**
   * Follow Button style.
   * Represents the style for a follow button with the following properties:
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - paddingVertical: 10 (vertical padding of 10 units)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
   * - borderRadius: 7 (border radius of 7 units)
   * - borderWidth: 1.3 (border width of 1.3 units)
   * - borderColor: colors.spotifyWhite (border color using the 'spotifyWhite' color from the 'colors' object)
   * - alignSelf: 'flex-start' (aligns the button to the start of the text)
  */
  followButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.appBackground,
    borderRadius: 7,
    borderWidth: 1.3,
    borderColor: colors.spotifyWhite,
    alignSelf: 'flex-start',
  },
  /**
   * Follow Button Text style.
   * Represents the style for the text within the follow button with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 9 (font size of 11 units)
   * - fontFamily: 'GothamBook' (font family 'GothamBook')
  */
  followButtonText: {
    color: colors.spotifyWhite,
    fontSize: 9,
    fontFamily: 'GothamBook',
  },
  /**
   * Description View style.
   * Represents the style for a view containing a description text with the following properties:
   * - paddingHorizontal: 18 (left and right padding of 18 units)
   * - paddingTop: 13 (top padding of 13 units)
  */
  descriptionView: {
    paddingHorizontal: 18,
    paddingTop: 13,
  },
  /**
   * Description Text style.
   * Represents the style for the description text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 13 (font size of 13 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
  */
  descriptionText: {
    color: colors.spotifyWhite,
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  /**
   * Episodes Header View style.
   * Represents the style for a header view for episodes with the following properties:
   * - paddingHorizontal: 18 (left and right padding of 18 units)
   * - paddingVertical: 15 (top and bottom padding of 15 units)
  */
  episodesHeaderView: {
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  /**
   * Episodes Header Text style.
   * Represents the style for the header text within episodes with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 16 (font size of 16 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
  */
  episodesHeaderText: {
    color: colors.spotifyWhite,
    fontSize: 16,
    fontFamily: 'GothamBold',
  },
  /**
   * Episodes View style.
   * Represents the style for a view containing episodes with the following properties:
   * - paddingHorizontal: 18 (left and right padding of 18 units)
   * - paddingVertical: 15 (top and bottom padding of 15 units)
  */
  episodesView: {
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  /**
   * Fallback View style.
   * Represents the style for a fallback view with the following properties:
   * - marginVertical: Dimensions.get('window').height / 10 (vertical margin based on window dimensions)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 10,
  },
});


export default styles;