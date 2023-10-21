import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * App Background style.
   * Represents the background style for the entire app with the following properties:
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    backgroundColor: colors.appBackground,
  },
  /**
   * Image View style.
   * Represents the style for an image view with the following properties:
   * - alignItems: 'center' (centered alignment of children)
   * - justifyContent: 'flex-end' (alignment of children to the end)
   * - zIndex: 1 (z-index for layering)
  */
  imageView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - opacity: 0.65 (opacity level)
   * - width: Dimensions.get('window').width (width based on window dimensions)
   * - height: Dimensions.get('window').height / 2.4 (height based on window dimensions)
  */
  image: {
    opacity: 0.65,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.4,
  },
  /**
   * Title style.
   * Represents the style for the title text with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 50 (font size of 50 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - paddingBottom: Dimensions.get('window').height / 15 (bottom padding based on window dimensions)
  */
  title: {
    position: 'absolute',
    color: colors.spotifyWhite,
    fontSize: 50,
    fontFamily: 'GothamBold',
    paddingBottom: Dimensions.get('window').height / 15,
  },
  /**
   * Followers style.
   * Represents the style for the followers text with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
   * - fontSize: 13 (font size of 13 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - paddingBottom: Dimensions.get('window').height / 30 (bottom padding based on window dimensions)
  */
  followers: {
    position: 'absolute',
    color: colors.spotifyGray,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    paddingBottom: Dimensions.get('window').height / 30,
  },
  /**
   * Random TouchableOpacity style.
   * Represents the style for a TouchableOpacity component with the following properties:
   * - marginHorizontal: Dimensions.get('window').width / 6 (horizontal margin based on window dimensions)
   * - justifyContent: 'center' (centered alignment of children)
   * - borderRadius: 50 (border radius of 50 units)
   * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
   * - marginTop: 16 (top margin of 16 units)
  */
  randomTouchableOpacity: {
    marginHorizontal: Dimensions.get('window').width / 6,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.spotifyGreen,
    marginTop: 16,
  },
  /**
   * TouchableOpacity Text style.
   * Represents the style for the text within a TouchableOpacity component with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - fontSize: 19 (font size of 19 units)
   * - paddingVertical: 12 (vertical padding of 12 units)
   * - textAlign: 'center' (centered text alignment)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
  */
  touchableOpacityText: {
    color: colors.spotifyWhite,
    fontSize: 19,
    paddingVertical: 12,
    textAlign: 'center',
    fontFamily: 'GothamMedium',
  },
  /**
   * Popular Songs View style.
   * Represents the style for a view containing popular songs with the following properties:
   * - flexDirection: 'column' (vertical layout with children)
  */
  popularSongsView: {
    flexDirection: 'column',
  },
  /**
   * Popular Songs Title style.
   * Represents the style for the text within the popular songs view with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - textAlign: 'center' (centered text alignment)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 15 (font size of 15 units)
   * - marginTop: 10 (top margin of 10 units)
  */
  popularSongsTitle: {
    color: colors.spotifyWhite,
    textAlign: 'center',
    fontFamily: 'GothamBold',
    fontSize: 15,
    marginTop: 10,
  },
  /**
   * Related Artist View style.
   * Represents the style for a view containing related artists with the following properties:
   * - flexDirection: 'column' (vertical layout with children)
  */
  relatedArtistView: {
    flexDirection: 'column',
  },
  /**
   * Related Artist Title style.
   * Represents the style for the title text within the related artist view with the following properties:
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
   * - textAlign: 'center' (centered text alignment)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - fontSize: 15 (font size of 15 units)
   * - marginVertical: 10 (vertical margin of 10 units)
  */
  relatedArtistTitle: {
    color: colors.spotifyWhite,
    textAlign: 'center',
    fontFamily: 'GothamBold',
    fontSize: 15,
    marginVertical: 10,
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