import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

const styles = StyleSheet.create({
	background: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: colors.appBackground,
	},
	margedBackground: {
		flex: 1,
		paddingHorizontal: 10,
		marginBottom: dimensions.marginPlayerVisible,
		backgroundColor: colors.appBackground,
	},
	iconsView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 5,
	},
	sortIcon: {
		fontSize: 25,
		color: colors.spotifyWhite,
	},
	gridIcon: {
		fontSize: 25,
		color: colors.spotifyWhite,
	},
	fallbackView: {
		marginVertical: Dimensions.get('window').height / 5,
	},
});

export default styles;