import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * View style for verticalSlider component.
	 * Represents a vertical slider view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - marginLeft: 20 (left margin spacing)
	*/
	verticalSliderView: {
		flex: 1,
		marginLeft: 20,
	},
	/**
	 * Styles for the 'imageView' component.
	 * Represents an image view with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - height: 66 (height in points)
	 * - width: '100%' (width spanning the entire available space)
	 * - marginTop: 17 (vertical margin spacing)
	 * - flexDirection: 'row' (horizontal layout direction)
	*/
	imageView: {
		flex: 1,
		height: 66,
		width: '100%',
		marginTop: 17,
		flexDirection: 'row',
	},
	/**
	 * View style for the 'iconView' component.
	 * Represents an icon view with the following properties:
	 * - height: 66 (height in points)
	 * - width: 66 (width in points)
	 * - alignItems: 'center' (center items horizontally)
	 * - justifyContent: 'center' (center items vertically)
	*/
	iconView: {
		height: 66,
		width: 66,
		alignItems: 'center',
		justifyContent: 'center',
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
});

export default styles;