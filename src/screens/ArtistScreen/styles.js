import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  /**
   * App background style.
   * Represents the background style for the entire app with the following properties:
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
  */
  background: {
    backgroundColor: colors.appBackground,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    opacity: 0.65,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.4,
  },
  title: {
    position: 'absolute',
    color: colors.spotifyWhite,
    fontSize: 50,
    fontFamily: 'GothamBold',
    paddingBottom: Dimensions.get('window').height / 15,
  },
  followers: {
    position: 'absolute',
    color: colors.spotifyGray,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    paddingBottom: Dimensions.get('window').height / 30,
  },
  randomPressable: {
    marginHorizontal: Dimensions.get('window').width / 6,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.spotifyGreen,
    marginTop: 16,
  },
  pressableText: {
    color: colors.spotifyWhite,
    fontSize: 19,
    paddingVertical: 12,
    textAlign: 'center',
    fontFamily: 'GothamMedium',
  },
});

export default styles;