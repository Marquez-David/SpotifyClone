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
   * View style for home header menu
   */
  homeHeader: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 25,
    paddingLeft: 5,
  },
  /**
   * 
   */
  flatListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /**
   * Text style for home header
   */
  homeHeaderText: {
    flex: 1,
    color: colors.spotifyWhite,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 7,
  },
});

export default styles;