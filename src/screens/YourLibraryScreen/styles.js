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
	 * Represents the text style for the categories header with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 30 (font size in points)
	 * - fontWeight: 'bold' (bold font weight)
	 * - textAlign: 'left' (text alignment to the left)
	 * - marginLeft: 20 (left margin spacing)
	 * - marginTop: 20 (top margin spacing)
	*/
	categoryWhiteText: {
		color: colors.spotifyWhite,
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'left',
		marginLeft: 20,
		marginTop: 20,
	},
	/**
	 * Screen header text style.
	 * Represents the text style for the categories header with the following properties:
	 * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
	 * - fontSize: 30 (font size in points)
	 * - fontWeight: 'bold' (bold font weight)
	 * - textAlign: 'left' (text alignment to the left)
	 * - marginLeft: 20 (left margin spacing)
	 * - marginTop: 20 (top margin spacing)
	*/
	categoryGrayText: {
		color: colors.spotifyGray,
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'left',
		marginLeft: 20,
		marginTop: 20,
	},
});

export default styles;