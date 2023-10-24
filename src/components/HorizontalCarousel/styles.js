import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * View style for the entire carousel.
	 * Represents a carousel view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - alignSelf: 'flex-start' (align items to the start of the flex container)
	 * - marginLeft: 10 (left margin spacing)
	*/
	carouseView: {
		flex: 1,
		//porque esto si funciona? alignItems a los childer, alignSelf a el mismo
		alignSelf: 'flex-start',
		marginLeft: 10,
	},
	/**
	 * Specific view style for each image in the carousel.
	 * Represents an image view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - marginRight: 15 (right margin spacing)
	 * - height: 190 (height in points)
	 * - width: 150 (width in points)
	*/
	imageView: {
		flex: 1,
		marginRight: 15,
		height: 190,
		width: 150,
	},
	/**
	 * Specific view style for each artists image in the carousel.
	 * Represents an image view with the following properties:
	 * - marginLeft: 8 (left margin spacing)
	 * - width: 130 (width in points)
	*/
	artistImageView: {
		marginLeft: 8,
		width: 130,
	},
	/**
	 * Image style for the carousel.
	 * Represents an image with the following properties:
	 * - height: 150 (height in points)
	 * - width: 150 (width in points)
	*/
	image: {
		height: 150,
		width: 150,
	},
	/**
	 * Artists Image style for the carousel.
	 * Represents an image with the following properties:
	 * - height: 130 (height in points)
	 * - width: 130 (width in points)
	 * - borderRadius: 100 (border radius of 100 units)
	*/
	artistImage: {
		height: 130,
		width: 130,
		borderRadius: 100,
	},
	/**
	 * Text style for image descriptions.
	 * Represents the text style for image descriptions with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontFamily: 'GothamMedium' (custom family font)
	 * - fontSize: 13 (font size in points)
	*/
	descriptionText: {
		color: colors.spotifyWhite,
		fontFamily: 'GothamMedium',
		fontSize: 13,
	},
	/**
	 * Text style for image descriptions.
	 * Represents the text style for image descriptions with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontFamily: 'GothamMedium' (custom family font)
	 * - fontSize: 13 (font size in points)
	 * - textAlign: 'center' (centered text alignment)
	 * - marginVertical: 5 (vertical margin of 5 units)
	*/
	artistDescriptionText: {
		color: colors.spotifyWhite,
		fontFamily: 'GothamMedium',
		fontSize: 13,
		textAlign: 'center',
		marginVertical: 5,
	},
});

export default styles;