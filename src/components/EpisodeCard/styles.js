import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the style for a background container with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - marginHorizontal: 18 (horizontal margin of 18 units)
   * - marginVertical: 10 (vertical margin of 10 units)
   * - borderRadius: 5 (border radius of 5 units)
   * - borderWidth: 1.3 (border width of 1.3 units)
   * - borderColor: colors.episodeCardBackground (border color using the 'episodeCardBackground' color from the 'colors' object)
   * - backgroundColor: colors.episodeCardBackground (background color using the 'episodeCardBackground' color from the 'colors' object)
  */
  background: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1.3,
    borderColor: colors.episodeCardBackground,
    backgroundColor: colors.episodeCardBackground,
  },
  /**
   * Header View style.
   * Represents the style for a header view with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - justifyContent: 'space-between' (space between children)
   * - alignItems: 'center' (centered alignment of children)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - paddingVertical: 8 (vertical padding of 8 units)
  */
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  /**
   * Image style.
   * Represents the style for an image with the following properties:
   * - width: 55 (width of 55 units)
   * - height: 55 (height of 55 units)
   * - borderRadius: 5 (border radius of 5 units)
  */
  image: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  /**
   * Text Header View style.
   * Represents the style for a text header view with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - flexDirection: 'column' (vertical layout with children)
  */
  textHeaderView: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  /**
   * Title style.
   * Represents the style for the title text with the following properties:
   * - fontSize: 15 (font size of 15 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
  */
  title: {
    fontSize: 15,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Podcast Title style.
   * Represents the style for the podcast title text with the following properties:
   * - fontSize: 12 (font size of 12 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
  */
  podcastTitle: {
    fontSize: 12,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  /**
   * Description View style.
   * Represents the style for a description view with the following properties:
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - paddingVertical: 5 (vertical padding of 5 units)
  */
  descriptionView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  /**
   * Description style.
   * Represents the style for the description text with the following properties:
   * - fontSize: 12 (font size of 12 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
  */
  description: {
    fontSize: 12,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  /**
   * Buttons View style.
   * Represents the style for a view containing buttons with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - justifyContent: 'space-between' (space between children)
   * - alignItems: 'center' (centered alignment of children)
  */
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  /**
   * Play Button View style.
   * Represents the style for a view containing the play button with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
   * - alignItems: 'center' (centered alignment of children)
   * - justifyContent: 'flex-start' (alignment of children to the start)
  */
  playButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  /**
   * Date Text style.
   * Represents the style for the date text with the following properties:
   * - fontSize: 12 (font size of 12 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
  */
  dateText: {
    fontSize: 12,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  /**
   * Secondary Button View style.
   * Represents the style for a view containing secondary buttons with the following properties:
   * - flexDirection: 'row' (horizontal layout with children)
  */
  secondaryButtonView: {
    flexDirection: 'row',
  },
});

export default styles;