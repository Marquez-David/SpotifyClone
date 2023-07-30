import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
  /**
   * General component view
   */
  emptyDataCardView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 17,
  },
  /**
   * View for title and description
   */
  textView: {
    paddingHorizontal: 25,
  },
  /**
   *  View for pressable
   */
  pressableView: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
  /**
   * Componnet title
   */
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
  },
  /**
   * Componnet description
   */
  descriptionText: {
    color: colors.spotifyGray,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center'
  },
   /**
   * Component pressable
   */
   pressable: {
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.spotifyWhite,
    justifyContent: 'center',
  },
  /**
   * Pressable text
   */
  buttonText: {
    color: colors.spotifyBlack,
    fontSize: 16.5,
    fontWeight: "bold",
    textAlign: 'center',
  }
});

export default styles;