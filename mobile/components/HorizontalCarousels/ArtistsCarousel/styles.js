import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Carouse View style.
   * Represents the style for a carousel view with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - marginVertical: 10 (vertical margin of 10 units)
   * - alignSelf: 'flex-start' (aligned to the start of the parent container)
  */
  carouseView: {
    flex: 1,
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  /**
   * Image View style.
   * Represents the style for an image view with the following properties:
   * - marginLeft: 8 (left margin of 8 units)
   * - width: 110 (width of 110 units)
  */
  imageView: {
    marginLeft: 8,
    width: 110,
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - height: 110 (height of 110 units)
   * - width: 110 (width of 110 units)
   * - borderRadius: 100 (border radius of 100 units, for a circular image)
  */
  image: {
    height: 110,
    width: 110,
    borderRadius: 100,
  },
  /**
   * Description Text style.
   * Represents the style for the description text with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - textAlign: 'center' (center-aligned text)
   * - marginVertical: 5 (vertical margin of 5 units)
   * - fontSize: 13 (font size of 13 units)
  */
  descriptionText: {
    color: colors.spotifyWhite,
    fontFamily: 'GothamMedium',
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 13,
  }
});

export default styles;