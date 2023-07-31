import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

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
	 * Image style for the carousel.
	 * Represents an image with the following properties:
	 * - height: 150 (height in points)
	 * - width: 150 (width in points)
	*/
	carouselImage: {
		height: 150,
		width: 150,
	},
	/**
	 * Text style for the carousel title.
	 * Represents the text style for the title with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - fontSize: 25 (font size in points)
	 * - fontWeight: 'bold' (bold font weight)
	 * - textAlign: 'left' (text alignment to the left)
	 * - marginBottom: 10 (bottom margin spacing)
	*/
	titleText: {
		color: colors.spotifyWhite,
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'left',
		marginBottom: 10,
	},
	/**
	 * Text style for image descriptions.
	 * Represents the text style for image descriptions with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	*/
	descriptionText: {
		color: colors.spotifyWhite,
	},
});

export default styles;