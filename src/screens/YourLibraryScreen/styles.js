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
	 * View style for your library headers menu
	 */
	headers: {
		flexDirection: 'row',
	},
	/**
	 * Screen header text style
	 */
	screenHeaderText: {
		color: colors.spotifyWhite,
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'left',
		marginLeft: 20,
		marginTop: 20,
	},
	/**
	 * Categories header text style for categories
	 */
	categoriesHeaderText: {
		color: colors.spotifyWhite,
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'left',
	},
	/**
	 * Categories header text style for categories
	 */
	categoriesPressables: {
		marginLeft: 20, 
		marginTop: 20,
	},
	/**
	 * Style for bar when pressable is pressed
	 */
	isPressedBar: {
		backgroundColor: colors.spotifyGreen,
		height: 3,
		width: '100%',
		marginTop: 7,
	},
});

export default styles;