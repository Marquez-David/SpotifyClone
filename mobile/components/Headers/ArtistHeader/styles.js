import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Artist Header View style.
   * Represents the style for an artist header view with the following properties:
   * - alignItems: 'flex-start' (aligned to the start of the container)
   * - alignContent: 'flex-end' (content aligned to the end of the container)
   * - width: Dimensions.get('window').width (width based on window dimensions)
   * - height: Dimensions.get('window').height / 3.3 (height based on window dimensions)
  */
  artistHeaderView: {
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.3,
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - opacity: 0.65 (opacity set to 0.65)
   * - width: '100%' (width set to 100% of the parent container)
   * - height: '100%' (height set to 100% of the parent container)
  */
  image: {
    opacity: 0.65,
    width: '100%',
    height: '100%',
  },
  /**
   * Touchable Back style.
   * Represents the style for a touchable back button with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - top: 0 (positioned at the top)
   * - marginTop: 10 (top margin of 10 units)
   * - marginLeft: 10 (left margin of 10 units)
   * - paddingVertical: 5 (vertical padding of 5 units)
   * - paddingHorizontal: 5 (horizontal padding of 5 units)
   * - borderRadius: 50 (border radius of 50 units)
   * - backgroundColor: colors.spotifyDarkGray (background color using the 'spotifyDarkGray' color from the 'colors' object)
  */
  touchableBack: {
    position: 'absolute',
    top: 0,
    marginTop: 10,
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: colors.spotifyDarkGray,
  },
  /**
   * Title style.
   * Represents the style for a title with the following properties:
   * - position: 'absolute' (absolute positioning)
   * - bottom: 0 (positioned at the bottom)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - paddingVertical: 10 (vertical padding of 10 units)
   * - fontSize: 50 (font size of 50 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  title: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 50,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the followers text.
   * Provides the following properties:
   * - marginTop: 10 (top margin of 10 units)
   * - marginHorizontal: 10 (horizontal margin of 10 units)
   * - fontSize: 13.5 (font size of 13.5 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - color: colors.spotifyGray (text color using 'spotifyGray' from the 'colors' object)
  */
  followersText: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 13.5,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  /**
   * Style for the buttons container.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - marginHorizontal: 10 (horizontal margin of 10 units)
   * - flexDirection: 'row' (elements laid out in a row)
   * - alignItems: 'center' (center alignment of elements vertically)
  */
  buttonsView: {
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the left buttons.
   * Provides the following properties:
   * - width: '30%' (width taking up 30% of the available space)
   * - alignItems: 'center' (center alignment of elements horizontally)
   * - justifyContent: 'space-between' (space between elements)
   * - flexDirection: 'row' (elements arranged in a row)
  */
  leftButtons: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  /**
   * Style for the right buttons container.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - alignItems: 'center' (center alignment of elements vertically)
   * - justifyContent: 'flex-end' (alignment of elements at the end of the container)
   * - flexDirection: 'row' (elements laid out in a row)
  */
  rightButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
});

export default styles;