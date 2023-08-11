import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  /**
   * Title view style.
   * Represents the style for the title view with the following properties:
   * - marginLeft: 20 (20 units left margin)
   * - marginTop: 20 (20 units top margin)
  */
  titleView: {
    marginLeft: 20,
    marginTop: 20,
  },
  /**
   * Title text style.
   * Represents the style for the title text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 30 (font size of 30 units)
   * - fontWeight: 'bold' (text weight set to bold)
  */
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 30,
    fontWeight: 'bold',
  },
  /**
   * Search bar view style.
   * Represents the style for the search bar view with the following properties:
   * - marginLeft: 20 (20 units left margin)
  */
  searchBarView: {
    marginLeft: 20,
  },
  /**
   * Style for the "Explore" text.
   * Properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - marginTop: 10 (add 10 units of margin from the top)
   * - fontSize: 15 (font size of 15 units)
  */
  exploreText: {
    color: colors.spotifyWhite,
    marginTop: 10,
    fontSize: 15,
  },
  /**
   * Style for the container that holds multiple card views.
   * Properties:
   * - flexDirection: 'row' (arrange items in a row)
   * - flexWrap: 'wrap' (wrap items to the next line if needed)
   * - justifyContent: 'center' (center items along the horizontal axis)
   * - marginTop: 20 (add margin from the top)
  */
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 13,
  },
  /**
   * Style for an individual card view.
   * Properties:
   * - marginBottom: 10 (add margin at the bottom)
   * - marginHorizontal: 10 (add margin horizontally, both left and right)
   * - backgroundColor: 'green' (set background color to green)
  */
  cardView: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  /**
   * Style for the image within the card.
   * Properties:
   * - width: Dimensions.get('window').width / 2.35 (set image width relative to screen width)
   * - height: 100 (set a fixed image height)
  */
  cardImage: {
    width: Dimensions.get('window').width / 2.35,
    height: 100,
  },
  /**
   * Style for the title text within categories.
   * Properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - position: 'absolute' (positioning is absolute within its containing element)
   * - alignSelf: 'center' (horizontally center the element within its containing space)
   * - bottom: 5 (set 5 units of space from the bottom edge)
   * - fontSize: 17 (set font size to 17 units)
   * - fontWeight: 'bold' (text weight set to bold)
  */
  categoriesTitleText: {
    color: colors.spotifyWhite,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;