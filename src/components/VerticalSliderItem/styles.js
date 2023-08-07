import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
	/**
	 * Styles for the 'imageView' component.
	 * Represents an image view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - height: 66 (height in points)
	 * - width: '85%' (width spanning the entire available space)
	 * - marginTop: 17 (vertical margin spacing)
	 * - flexDirection: 'row' (horizontal layout direction)
	*/
	imageView: {
		flex: 1,
		height: 66,
		width: '85%',
		marginTop: 17,
		flexDirection: 'row',
	},
	/**
	 * View style for the 'textView' component.
	 * Represents a text view with the following properties:
	 * - flexDirection: 'column' (vertical layout direction)
	 * - alignSelf: 'center' (center items horizontally)
	*/
	textView: {
		flexDirection: 'column',
		alignSelf: 'center',
	},
	/**
	 * View style for the 'carouselArtistsImage' component.
	 * Represents an image view for carousel artists with the following properties:
	 * - borderRadius: 50 (border radius in points to create a circular image)
	 * - height: 66 (height in points)
	 * - width: 66 (width in points)
	*/
	carouselArtistsImage: {
		borderRadius: 50,
		height: 66,
		width: 66,
	},
	/**
	 * View style for the 'carouselImage' component.
	 * Represents an image view for carousel with the following properties:
	 * - height: 66 (height in points)
	 * - width: 66 (width in points)
	*/
	carouselImage: {
		height: 66,
		width: 66,
	},
	/**
	 * Text style for the 'playlistNameText' component.
	 * Represents the text style for the playlist name with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - marginLeft: 7 (left margin spacing)
	 * - fontWeight: 'bold' (bold font weight)
	*/
	playlistNameText: {
		color: colors.spotifyWhite,
		marginLeft: 7,
		fontWeight: 'bold',
	},
	/**
	 * Text style for the 'ownerText' component.
	 * Represents the text style for the owner with the following properties:
	 * - color: colors.spotifyGray (text color using the 'spotifyGray' color from the 'colors' object)
	 * - marginLeft: 7 (left margin spacing)
	*/
	ownerText: {
		color: colors.spotifyGray,
		marginLeft: 7,
	},
});

export default styles;