import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  /**
   * Style for the player view.
   * Provides the following properties:
   * - position: 'absolute' (absolute positioning)
   * - flexDirection: 'row' (elements arranged in a row)
   * - height: 53 (height of 53 units)
   * - width: '95%' (width taking up 95% of the available space)
   * - justifyContent: 'space-between' (space between elements)
   * - bottom: 45 (positioned 45 units from the bottom)
   * - alignSelf: 'center' (centered alignment within the parent container)
  */
  playerView: {
    position: 'absolute',
    flexDirection: 'row',
    height: 56,
    width: '95%',
    justifyContent: 'space-between',
    bottom: 45,
    alignSelf: 'center',
  },
  imageCover: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    borderRadius: 7,
  },
  /**
   * Style for the player image.
   * Provides the following properties:
   * - marginLeft: 10 (left margin of 10 units)
   * - alignSelf: 'center' (center alignment within the parent container)
   * - width: 40 (width of 40 units)
   * - height: 40 (height of 40 units)
   * - borderRadius: 5 (border radius of 5 units)
  */
  image: {
    marginLeft: 10,
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  /**
   * Style for the player title view.
   * Provides the following properties:
   * - flex: 1 (takes up all available space)
   * - marginLeft: 10 (left margin of 10 units)
   * - justifyContent: 'center' (center alignment of elements vertically)
   * - flexDirection: 'column' (elements arranged in a column)
  */
  titleView: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  /**
   * Style for the player title text.
   * Provides the following properties:
   * - fontSize: 14 (font size of 14 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - color: colors.spotifyWhite (white text color)
  */
  titleText: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyWhite,
  },
  /**
   * Style for the player description text.
   * Provides the following properties:
   * - fontSize: 13 (font size of 13 units)
   * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
   * - opacity: 0.7 (text opacity of 0.7)
   * - color: colors.spotifyWhite (white text color)
  */
  descriptionText: {
    fontSize: 13,
    fontFamily: 'GothamMedium_1',
    opacity: 0.7,
    color: colors.spotifyWhite,
  },
  /**
   * Style for the buttons view.
   * Provides the following properties:
   * - width: '30%' (width taking up 30% of the available space)
   * - justifyContent: 'space-between' (space between elements)
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements horizontally)
   * - marginHorizontal: 10 (horizontal margin of 10 units)
  */
  buttonsView: {
    width: '30%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  /**
   * Style for the progress bar view.
   * Provides the following properties:
   * - position: 'absolute' (absolute positioning)
   * - bottom: 0 (positioned at the bottom)
   * - width: '100%' (width taking up 100% of the available space)
  */
  progressBarView: {
    position: 'absolute',
    bottom: 1,
    width: '100%',
  },
  /**
   * Style for the progress bar.
   * Provides the following properties:
   * - height: 2.5 (height of 2.5 units)
   * - opacity: 0.7 (opacity of 0.7)
   * - borderRadius: 7 (border radius of 7 units)
   * - marginHorizontal: 10 (horizontal margin of 10 units)
   * - backgroundColor: 'transparent' (transparent background color)
  */
  progressBar: {
    height: 2.5,
    opacity: 0.7,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  }
});

export default styles;