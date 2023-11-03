import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

const styles = StyleSheet.create({
	/**
	 * Background style.
	 * Represents the style for a background with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
	*/
	background: {
		flex: 1,
		backgroundColor: colors.appBackground,
	},
	/**
	 * Marged Background style.
	 * Represents the style for a background with margin at the bottom with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - marginBottom: dimensions.marginPlayerVisible (bottom margin based on 'marginPlayerVisible' from 'dimensions')
	 * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
	*/
	margedBackground: {
		flex: 1,
		marginBottom: dimensions.marginPlayerVisible,
		backgroundColor: colors.appBackground,
	},
	/**
	 * Fallback View style.
	 * Represents the style for a fallback view with the following properties:
	 * - marginVertical: Dimensions.get('window').height / 3.5 (vertical margin based on window dimensions)
	*/
	fallbackView: {
		marginVertical: Dimensions.get('window').height / 3.5,
	},
});

export default styles;