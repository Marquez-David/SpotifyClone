import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  /**
   * Style for the player view.
   * Provides the following properties:
   * - position: 'absolute' (absolute positioning)
   * - flexDirection: 'row' (elements arranged in a row)
   * - borderRadius: 7 (border radius of 7 units)
   * - height: 53 (height of 53 units)
   * - width: '95%' (width taking up 95% of the available space)
   * - paddingHorizontal: 11 (horizontal padding of 11 units)
   * - justifyContent: 'space-between' (space between elements)
   * - bottom: 45 (positioned 45 units from the bottom)
   * - alignSelf: 'center' (centered alignment within the parent container)
  */
  playerView: {
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: 7,
    height: 53,
    width: '95%',
    paddingHorizontal: 11,
    justifyContent: 'space-between',
    bottom: 45,
    alignSelf: 'center',
  },
  /**
   * Style for the player image.
   * Provides the following properties:
   * - alignSelf: 'center' (center alignment within the parent container)
   * - width: 40 (width of 40 units)
   * - height: 40 (height of 40 units)
   * - borderRadius: 5 (border radius of 5 units)
  */
  image: {
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
   * Style for the player buttons view.
   * Provides the following properties:
   * - flexDirection: 'row' (elements arranged in a row)
   * - alignItems: 'center' (center alignment of elements)
  */
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;