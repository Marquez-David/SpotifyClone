import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Fallback View style.
   * Represents the style for a fallback view with the following properties:
   * - marginVertical: Dimensions.get('window').height / 3.5 (vertical margin based on window dimensions)
  */
  fallbackView: {
    marginVertical: Dimensions.get('window').height / 3.5,
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
});

export default styles;