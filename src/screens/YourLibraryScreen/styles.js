import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
	/**
	 * App background style.
	 * Represents the background style for the entire app with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
	*/
	background: {
		flex: 1,
		backgroundColor: colors.appBackground,
	},
	/**
	 * View style for the headers menu in your library.
	 * Represents a view for the headers menu with the following properties:
	 * - flexDirection: 'row' (horizontal layout direction)
	*/
	headers: {
		flexDirection: 'row',
	},
	/**
	 * Screen header text style.
	 * Represents the text style for the screen header with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 30 (font size in points)
	 * - fontWeight: 'bold' (bold font weight)
	 * - textAlign: 'left' (text alignment to the left)
	 * - marginLeft: 20 (left margin spacing)
	 * - marginTop: 20 (top margin spacing)
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
	 * Categories header text style for categories.
	 * Represents the text style for the categories header with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 17 (font size in points)
	 * - fontWeight: 'bold' (bold font weight)
	 * - textAlign: 'left' (text alignment to the left)
	*/
	categoriesHeaderText: {
		color: colors.spotifyWhite,
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'left',
	},
	/**
	 * Style for the pressables in categories.
	 * Represents the style for the pressables in categories with the following properties:
	 * - marginLeft: 20 (left margin spacing)
	 * - marginTop: 20 (top margin spacing)
	*/
	categoriesPressables: {
		marginLeft: 20,
		marginTop: 20,
	},
	/**
	 * Style for the bar when a pressable is pressed.
	 * Represents the style for the bar when a pressable is pressed with the following properties:
	 * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
	 * - height: 3 (height in points)
	 * - width: '100%' (width spanning the entire available space)
	 * - marginTop: 7 (top margin spacing)
	*/
	isPressedBar: {
		backgroundColor: colors.spotifyGreen,
		height: 3,
		width: '100%',
		marginTop: 7,
	},
});

export default styles;