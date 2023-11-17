import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginVertical: 5,
  },
  headerView: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  textHeaderView: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    fontFamily: 'GothamBold',
    color: colors.spotifyWhite,
  },
  description: {
    paddingVertical: 5,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  buttonsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtons: {
    width: '45%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  righButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginVertical: 5,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.spotifyGray,
  },
  secondaryButtonView: {
    flexDirection: 'row',
  },
  bottomBar: {
    marginTop: 15,
    borderWidth: 0.19,
    opacity: 0.4,
    borderColor: colors.spotifyGray,
  }
});

export default styles;