import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Styles for the 'imageView' component.
	 * Represents an image view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - height: 66 (height in points)
	 * - width: '85%' (width spanning the entire available space)
	 * - flexDirection: 'row' (horizontal layout direction)
	*/
	imageView: {
		flex: 1,
		height: 66,
		width: '85%',
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
	 * View style for the 'verticalArtistsImage' component.
	 * Represents an image view for vertical artists with the following properties:
	 * - borderRadius: 50 (border radius in points to create a circular image)
	 * - height: 66 (height in points)
	 * - width: 66 (width in points)
	*/
	verticalArtistsImage: {
		borderRadius: 50,
		height: 66,
		width: 66,
	},
	/**
	 * Vertical Image style.
	 * Represents the style for a vertical image with the following properties:
	 * - height: 66 (height of 66 units)
	 * - width: 66 (width of 66 units)
	 * - alignItems: 'center' (centered horizontal alignment)
	 * - justifyContent: 'center' (centered vertical alignment)
	 * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
	*/
	verticalImage: {
		height: 66,
		width: 66,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.spotifySuperDarkGray,
	},
	/**
	 * Text style for the 'playlistNameText' component.
	 * Represents the text style for the playlist name with the following properties:
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	 * - marginLeft: 7 (left margin spacing)
	 * - fontSize: 14 (font size in points)
	 * - fontFamily: 'GothamBold' (font family 'GothamBold')
	*/
	playlistNameText: {
		color: colors.spotifyWhite,
		marginLeft: 7,
		fontSize: 14,
		fontFamily: 'GothamBold',
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