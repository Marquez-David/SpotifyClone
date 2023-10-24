import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  customComponent: {
    position: 'absolute',
    width: '100%',
    bottom: 49,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.bottomTabBackground,
  },
  image: {
    width: 55,
    height: 60,
  },
  titleView: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyWhite
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: 'GothamMedium_1',
    color: colors.spotifyGray
  },
  playButton: {
    flex: 1,
    left: 5,
    alignSelf: 'center',
  },
});

export default styles;