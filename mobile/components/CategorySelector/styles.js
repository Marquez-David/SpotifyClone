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
	 * Category View style.
	 * Represents the style for a category view with the following properties:
	 * - marginRight: 10 (right margin of 10 units)
	 * - borderRadius: 50 (border radius of 50 units)
	 * - paddingHorizontal: 17 (horizontal padding of 17 units)
	 * - paddingVertical: 7 (vertical padding of 7 units)
	*/
	categoryView: {
		marginRight: 10,
		borderRadius: 50,
		paddingHorizontal: 17,
		paddingVertical: 7,
		borderWidth: 1,
	},
	/**
	 * Category Text style.
	 * Represents the style for category text with the following properties:
	 * - fontSize: 12 (font size of 12 units)
	 * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
	*/
	categoryText: {
		fontSize: 12,
		color: colors.spotifyWhite,
		fontFamily: 'GothamMedium',
	}
});

export default styles;