import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Headers style.
	 * Represents the style for headers with the following properties:
	 * - marginVertical: 15 (vertical margin of 15 units)
	*/
	headers: {
		marginVertical: 15,
	},
	/**
	 * Subcategory View style.
	 * Represents the style for a subcategory view with the following properties:
	 * - marginRight: 10 (right margin of 10 units)
	 * - borderRadius: 50 (border radius of 50 units)
	 * - paddingHorizontal: 17 (horizontal padding of 17 units)
	 * - paddingVertical: 7 (vertical padding of 7 units)
	 * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
	*/
	subcategoryView: {
		marginRight: 10,
		borderRadius: 50,
		paddingHorizontal: 17,
		paddingVertical: 7,
		backgroundColor: colors.spotifySuperDarkGray,
	},
	/**
	 * Subcategory Text style.
	 * Represents the style for subcategory text with the following properties:
	 * - fontSize: 12 (font size of 12 units)
	 * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	*/
	subcategoryText: {
		fontSize: 12,
		fontFamily: 'GothamMedium',
		color: colors.spotifyWhite,
	}
});

export default styles;