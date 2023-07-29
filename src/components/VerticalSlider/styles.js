import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
    verticalSliderView: {
        flex: 1,
        //alignSelf: 'flex-start', //porque esto si funciona? alignItems a los childer, alignSelf a el mismo
        marginLeft: 20,
    },   
    imageView: {
        flex: 1,
        height: 66,
        width: '100%',
        marginTop: 17,
        flexDirection: 'row',
    },
    iconView: {
        height: 66,
        width: 66,
        alignItems: 'center',
        justifyContent: 'center',
    },
    /**
     * Search bar view
     */
    searchBarView: {
		marginTop: 17,
        marginRight: 20,
	},
    textView: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    carouselArtistsImage: {
        borderRadius: 50,
        height: 66,
        width: 66,
    },
    carouselImage: {
        height: 66,
        width: 66,
    },
    searchBar: {
        height: 37,
        borderRadius: 8,
        color: colors.spotifyWhite,
        backgroundColor: colors.spotifyDarkGray,
    },
    playlistNameText: {
        color: colors.spotifyWhite,
        marginLeft: 7,
        fontWeight: 'bold',
    },
    ownerText: {
        color: colors.spotifyGray,
        marginLeft: 7,
    },
});

export default styles;