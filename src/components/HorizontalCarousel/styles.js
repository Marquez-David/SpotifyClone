import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Carouse View style.
	 * Represents the style for a carousel view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - alignSelf: 'flex-start' (aligned to the start of the parent container)
	*/
	carouseView: {
		flex: 1,
		alignSelf: 'flex-start',
	},
	/**
	 * Title Text style.
	 * Represents the style for the title text with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 25 (font size of 25 units)
	 * - fontFamily: 'GothamBold' (font family 'GothamBold')
	 * - textAlign: 'left' (left-aligned text)
	 * - marginVertical: 7 (vertical margin of 7 units)
	*/
	titleText: {
		color: colors.spotifyWhite,
		fontSize: 25,
		fontFamily: 'GothamBold',
		textAlign: 'left',
		marginVertical: 7,
	},
	/**
	 * Image View style.
	 * Represents the style for an image view with the following properties:
	 * - marginRight: 8 (right margin of 8 units)
	 * - width: 120 (width of 120 units)
	*/
	imageView: {
		marginRight: 8,
		width: 120,
	},
	/**
	 * Image style.
	 * Represents the style for an image with the following properties:
	 * - height: 120 (height of 120 units)
	 * - width: 120 (width of 120 units)
	 * - alignItems: 'center' (centered horizontal alignment)
	 * - justifyContent: 'center' (centered vertical alignment)
	 * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
	*/
	image: {
		height: 120,
		width: 120,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.spotifySuperDarkGray,
	},
	/**
	 * Artist Image View style.
	 * Represents the style for an artist image view with the following properties:
	 * - marginLeft: 8 (left margin of 8 units)
	 * - width: 110 (width of 110 units)
	*/
	artistImageView: {
		marginLeft: 8,
		width: 110,
	},
	/**
	 * Artist Image style.
	 * Represents the style for an artist image with the following properties:
	 * - height: 110 (height of 110 units)
	 * - width: 110 (width of 110 units)
	 * - borderRadius: 100 (border radius of 100 units, for a circular image)
	*/
	artistImage: {
		height: 110,
		width: 110,
		borderRadius: 100,
	},
	/**
	 * Description Text style.
	 * Represents the style for the description text with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontFamily: 'GothamMedium' (font family 'GothamMedium')
	 * - textAlign: 'center' (center-aligned text)
	 * - marginVertical: 5 (vertical margin of 5 units)
	 * - fontSize: 13 (font size of 13 units)
	*/
	descriptionText: {
		color: colors.spotifyWhite,
		fontFamily: 'GothamMedium',
		textAlign: 'center',
		marginVertical: 5,
		fontSize: 13,
	},
});

export default styles;