import { StyleSheet } from 'react-native';

import colors from '../../utils/Colors';

const styles = StyleSheet.create({
  /**
   * App background style
   */
  background: {
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
});

export default styles;