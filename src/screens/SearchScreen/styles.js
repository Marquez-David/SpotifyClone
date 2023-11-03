import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the style for a background with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.appBackground,
  },
  /**
   * Marged Background style.
   * Represents the style for a background with margin at the bottom with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - marginBottom: dimensions.marginPlayerVisible (bottom margin based on 'marginPlayerVisible' from 'dimensions')
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  margedBackground: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: dimensions.marginPlayerVisible,
    backgroundColor: colors.appBackground,
  },
  /**
   * Title View style.
   * Represents the style for a title view with the following properties:
   * - marginTop: 20 (top margin of 20 units)
  */
  titleView: {
    marginTop: 20,
  },
  /**
   * Title Text style.
   * Represents the style for the title text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 30 (font size of 30 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
  */
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 30,
    fontFamily: 'GothamBold',
  },
  /**
   * Explore Text style.
   * Represents the style for the explore text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - marginTop: 10 (top margin of 10 units)
   * - fontSize: 15 (font size of 15 units)
  */
  exploreText: {
    color: colors.spotifyWhite,
    marginTop: 10,
    fontSize: 15,
  },
  /**
   * Card Container style.
   * Represents the style for a container of cards with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - flexWrap: 'wrap' (wrapping of children to the next line)
   * - justifyContent: 'space-between' (space between children)
   * - marginTop: 13 (top margin of 13 units)
  */
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  /**
   * Card View style.
   * Represents the style for a card view with the following properties:
   * - marginBottom: 10 (bottom margin of 10 units)
  */
  cardView: {
    marginBottom: 10,
  },
  /**
   * Card Image style.
   * Represents the style for a card image with the following properties:
   * - borderRadius: 10 (border radius of 10 units)
   * - width: Dimensions.get('window').width / 2.2 (width based on window dimensions)
   * - height: 100 (height of 100 units)
  */
  cardImage: {
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2,
    height: 100,
  },
  /**
   * Categories Title Text style.
   * Represents the style for the categories title text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - position: 'absolute' (absolute positioning)
   * - alignSelf: 'center' (centered horizontal alignment)
   * - bottom: 5 (positioned 5 units from the bottom)
   * - fontSize: 17 (font size of 17 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
  */
  categoriesTitleText: {
    color: colors.spotifyWhite,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
    fontSize: 17,
    fontFamily: 'GothamBold',
  },
  /**
   * Fallback View style.
   * Represents the style for a fallback view with the following properties:
   * - marginVertical: Dimensions.get('window').height / 3.5 (vertical margin based on window dimensions)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 3.5,
  },
});

export default styles;