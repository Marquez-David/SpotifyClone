import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  /**
   * Style for the background.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - marginVertical: 5 (vertical margin of 5 units)
  */
  background: {
    flex: 1,
    marginVertical: 5,
  },
  /**
   * Style for the header view.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - flexDirection: 'row' (elements arranged in a row)
   * - justifyContent: 'space-between' (space between elements)
   * - alignItems: 'center' (center alignment of elements vertically)
  */
  headerView: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  /**
   * Style for the image.
   * Provides the following properties:
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
   * Style for the text header view.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - flexDirection: 'column' (elements arranged in a column)
  */
  textHeaderView: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  /**
   * Style for the title text.
   * Provides the following properties:
   * - fontSize: 15 (font size of 15 units)
   * - fontFamily: 'GothamBold' (font family 'GothamBold')
   * - color: colors.spotifyWhite (white text color)
  */
  title: {
    fontSize: 15,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the description text.
   * Provides the following properties:
   * - paddingVertical: 5 (vertical padding of 5 units)
   * - fontSize: 13 (font size of 13 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - color: colors.spotifyGray (Spotify gray text color)
  */
  description: {
    paddingVertical: 5,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  /**
   * Style for the buttons view.
   * Provides the following properties:
   * - justifyContent: 'space-between' (space between elements)
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements vertically)
  */
  buttonsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the left buttons.
   * Provides the following properties:
   * - width: '45%' (width taking up 45% of the available space)
   * - justifyContent: 'space-between' (space between elements)
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements vertically)
  */
  leftButtons: {
    width: '45%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the right buttons.
   * Provides the following properties:
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements vertically)
  */
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /**
   * Style for the date text.
   * Provides the following properties:
   * - marginVertical: 5 (vertical margin of 5 units)
   * - fontSize: 13 (font size of 13 units)
   * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
   * - color: colors.spotifyGray (Spotify gray text color)
  */
  dateText: {
    marginVertical: 5,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  /**
   * Style for the secondary button view.
   * Provides the following properties:
   * - flexDirection: 'row' (elements arranged in a row)
  */
  secondaryButtonView: {
    flexDirection: 'row',
  },
  /**
   * Style for the bottom bar.
   * Provides the following properties:
   * - marginTop: 15 (top margin of 15 units)
   * - borderWidth: 0.19 (border width of 0.19 units)
   * - opacity: 0.4 (opacity of 0.4)
   * - borderColor: colors.spotifyGray (border color using the Spotify gray color)
  */
  bottomBar: {
    marginTop: 15,
    borderWidth: 0.19,
    opacity: 0.4,
    borderColor: colors.spotifyGray,
  }
});

export default styles;