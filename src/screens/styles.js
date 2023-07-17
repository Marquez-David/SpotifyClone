import { StyleSheet } from 'react-native';
import colors from '../utils/Colors.js';

const styles = StyleSheet.create({
  /**
   * App background style
   */
  background: {
    //flex: 1 means that the component will take up all the available space within its container along the main direction. 
    //Useful when you want a component to occupy all the vertical space available on a screen.
    flex: 1,
    backgroundColor: colors.appBackground
  },
  /**
   * Styling for Spotify logo view
   */
  logoView: {
    flex: 1,
    height: 200,
    paddingTop: 90,
    alignItems: 'center',
    //backgroundColor: 'green' //to check the view container
  },
  /**
   * Styling for Spotify pressables
   */
  pressableView: {
    flex: 1,
    paddingBottom: 40,
    justifyContent: 'flex-end',
    //backgroundColor: 'red' //to check the view container
  },
  /**
   * Style for generic pressables
   */
  genericPressable: {
    //backgroundColor: colors.spotifyGreen,
    borderRadius: 50,
    marginHorizontal: 25,
    padding: 17,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  /**
   * View style for home header menu
   */
  homeHeader: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 25,
    paddingLeft: 5,
  },

  /********************************
   *           TEXT STYLES        *
   ********************************/
  /**
  * App text style
  */
  text: {
    color: colors.spotifyWhite
  },
  /**
   * Text under logo custom style
   */
  logoText: {
    color: colors.spotifyWhite,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
  /**
   * Text style for all pressables
   */
  pressableText: {
    color: colors.spotifyWhite,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    flex: 1,
  },
  /**
   * Text style for home header
   */
  homeHeaderText: {
    flex: 1,
    color: colors.spotifyWhite,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: 'left',
  },
});

export default styles;