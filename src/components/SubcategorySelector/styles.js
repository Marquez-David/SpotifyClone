import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Headers style.
	 * Represents the style for headers with the following properties:
	 * - flexDirection: 'row' (horizontal layout with children)
	*/
	headers: {
		flexDirection: 'row',
	},
	/**
	 * Gray Text style.
	 * Represents the style for gray text with the following properties:
	 * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
	 * - fontSize: 17 (font size of 17 units)
	 * - fontFamily: 'GothamMedium_1' (font family 'GothamMedium_1')
	*/
	grayText: {
		color: colors.spotifyGray,
		fontSize: 17,
		fontFamily: 'GothamMedium_1',
	},
	/**
	 * White Text style.
	 * Represents the style for white text with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 17 (font size of 17 units)
	 * - fontFamily: 'GothamBold' (font family 'GothamBold')
	*/
	whiteText: {
		color: colors.spotifyWhite,
		fontSize: 17,
		fontFamily: 'GothamBold',
	},
	/**
	 * Subcategory TouchableOpacity style.
	 * Represents the style for a touchable opacity for subcategories with the following properties:
	 * - paddingHorizontal: 10 (horizontal padding of 10 units)
	 * - marginTop: 20 (top margin of 20 units)
	*/
	subcategoryTouchableOpacity: {
		paddingHorizontal: 10,
		marginTop: 20,
	},
	/**
	 * Is Pressed Bar style.
	 * Represents the style for a bar indicating a pressed state with the following properties:
	 * - backgroundColor: colors.spotifyGreen (background color using the 'spotifyGreen' color from the 'colors' object)
	 * - height: 3 (height of 3 units)
	 * - width: '100%' (width of 100%)
	 * - marginTop: 7 (top margin of 7 units)
	*/
	isPressedBar: {
		backgroundColor: colors.spotifyGreen,
		height: 3,
		width: '100%',
		marginTop: 7,
	},
});

export default styles;