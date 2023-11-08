import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  playerView: {
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: 7,
    height: 53,
    width: '100%',
    paddingHorizontal: 11,
    justifyContent: 'space-between',
    bottom: 45,
  },
  image: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 5,
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
    color: colors.spotifyWhite,
  },
  descriptionText: {
    fontSize: 13,
    fontFamily: 'GothamMedium_1',
    opacity: 0.7,
    color: colors.spotifyWhite,
  },
  touchablePlay: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
});

export default styles;