import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Categories header text style for categories.
	 * Represents the text style for the categories header with the following properties:
	 * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
	 * - fontSize: 17 (font size in points)
	 * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
	*/
	subcategoryHeaderGrayText: {
		color: colors.spotifyGray,
		fontSize: 17,
		fontFamily: 'GothamMedium_1',
	},
	/**
	 * Categories header text style for categories.
	 * Represents the text style for the categories header with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 17 (font size in points)
	 * - fontFamily: 'GothamBold' (font family 'GothamBold')
	*/
	subcategoryHeaderWhiteText: {
		color: colors.spotifyWhite,
		fontSize: 17,
		fontFamily: 'GothamBold',
	},
	/**
	 * Style for the pressables in categories.
	 * Represents the style for the pressables in categories with the following properties:
	 * - marginLeft: 20 (left margin spacing)
	 * - marginTop: 20 (top margin spacing)
	*/
	subcategoryPressables: {
		marginLeft: 22,
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