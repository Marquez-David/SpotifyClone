import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

/*
|================================================================================================================|
|====================================== HOME CONTENT ============================================================|
|================================================================================================================|
*/

/**
 * Fetches a list of featured playlists from the Spotify API.
 * @returns {Array} - An array of featured playlists.
 */
export const getFeaturePlaylists = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/browse/featured-playlists?limit=10`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.playlists.items;
};

/*
|================================================================================================================|
|=================================== LIBRARY CONTENT ============================================================|
|================================================================================================================|
*/

/**
 * Retrieves various types of content from the user's Spotify library.
 * @returns {Array} - An array containing user's library content including playlists, albums, artists, episodes, and podcasts.
 */
export const getLibraryContent = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");

	const playlistsResponse = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/playlists`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	const albumsResponse = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/albums`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	const artistsResponse = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/following?type=artist`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	const episodesResponse = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/episodes`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	const podcastsResponse = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/shows`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	const playlists = playlistsResponse.data.items;
	const albums = albumsResponse.data.items.map(obj => obj.album);
	const artists = artistsResponse.data.artists.items;
	const episodes = episodesResponse.data.items.map(obj => obj.episode);
	const podcasts = podcastsResponse.data.items.map(obj => obj.show);

	return [...playlists, ...albums, ...artists, ...episodes, ...podcasts];
};

/*
|================================================================================================================|
|======================================= SEARCH CONTENT =========================================================|
|================================================================================================================|
*/

/**
 * Retrieves a list of browse categories using the provided access token.
 * @returns {Array} An array of browse category items.
 */
export const getBrowseCategories = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/browse/categories`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.categories.items;
};

/*
|================================================================================================================|
|======================================== ALBUM CONTENT =========================================================|
|================================================================================================================|
*/

/**
 * Retrieves album details and its tracks using the provided album ID and access token.
 * @param {string} albumId - The ID of the album to fetch.
 * @returns {Array} An array of album track items.
 */
export const getAlbum = async (albumId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/albums/${albumId}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.tracks.items;
};

/**
 * Retrieves information about whether a list of albums is saved in the user's Spotify library.
 * @param {string[]} albumId - The id of the album to check.
 * @returns {Promise<boolean>} - A boolean value indicating if the album is saved.
 */
export const isAlbumSaved = async (albumId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "GET",
			url: `https://api.spotify.com/v1/me/albums/contains?ids=${albumId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data[0];
	} catch (error) {
		console.log("Error while fetching albums: " + error.message);
	}
};

/**
 * This function makes an asynchronous request to the Spotify API to add the specified album to the user's library.
 * @param {string} albumId - The ID of the album to be saved.
 * @returns {Promise} A Promise that resolves with the API response when the album is successfully saved.
 */
export const saveAlbum = async (albumId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "PUT",
			url: `https://api.spotify.com/v1/me/albums?ids=${albumId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response
	} catch (error) {
		console.log("Error while saving albums: " + error.message);
	}
};

/**
 * This function makes an asynchronous request to the Spotify API to remove the specified album to the user's library.
 * @param {string} albumId - The ID of the album to be removed.
 * @returns {Promise} A Promise that resolves with the API response when the album is successfully removed.
 */
export const unsaveAlbum = async (albumId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "DELETE",
			url: `https://api.spotify.com/v1/me/albums?ids=${albumId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response
	} catch (error) {
		console.log("Error while unsaving albums: " + error.message);
	}
};

/*
|================================================================================================================|
|======================================== ARTIST CONTENT ========================================================|
|================================================================================================================|
*/

/**
 * Fetches the top tracks of a specific artist based on the provided artist ID and country code.
 * @param {string} artistId - The ID of the artist for which top tracks are to be fetched.
 * @returns {Array} An array containing the top tracks of the specified artist.
 */
export const getArtistTopTracks = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=ES`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.tracks;
};

/**
 * Fetches related artists for a specific artist based on the provided artist ID.
 * @param {string} artistId - The ID of the artist for which related artists are to be fetched.
 * @returns {Object} An object containing information about related artists.
 */
export const getRelatedArtists = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.artists;
};

/**
 * Checks if the current user follows a specific artist based on the provided artist ID.
 * @param {string} artistId - The ID of the artist to be checked for follow status.
 * @returns {boolean} `true` if the user follows the artist, `false` otherwise.
 */
export const getUserFollowsArtist = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "GET",
			url: `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while checking if user follows artists: " + error.message);
	}
};

/**
 * Follows a specific artist on Spotify based on the provided artist ID.
 * @param {string} artistId - The ID of the artist to be followed.
 * @returns {boolean} `true` if the artist is successfully followed, `false` otherwise.
 */
export const followArtist = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "PUT",
			url: `https://api.spotify.com/v1/me/following?type=artist&ids=${artistId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while following artist: " + error.message);
	}
};

/**
 * Unfollows a specific artist on Spotify based on the provided artist ID.
 * @param {string} artistId - The ID of the artist to be unfollowed.
 * @returns {boolean} `true` if the artist is successfully unfollowed, `false` otherwise.
 */
export const unfollowArtist = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "DELETE",
			url: `https://api.spotify.com/v1/me/following?type=artist&ids=${artistId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while unfollowing artist: " + error.message);
	}
};

/*
|================================================================================================================|
|======================================== PLAYLIST CONTENT ======================================================|
|================================================================================================================|
*/

/**
 * Retrieves playlist details and its tracks using the provided playlist ID and access token.
 * @param {string} playlistId - The ID of the playlist to fetch.
 * @returns {Array} An array of playlist track items.
 */
export const getPlaylist = async (playlistId, offset) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=8&offset=${offset}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.items;
};

/*
|================================================================================================================|
|========================================= PODCAST CONTENT ======================================================|
|================================================================================================================|
*/

/**
 * Fetches podcast episodes for the given podcast ID using the Spotify API.
 * @param {string} podcastId - The ID of the podcast for which episodes are to be fetched.
 * @returns {Promise} A Promise that resolves with the response from the API if successful.
 */
export const getPodcastEpisodes = async (podcastId, offset) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/shows/${podcastId}/episodes?limit=5&offset=${offset}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.items;
};

/*
|================================================================================================================|
|========================================== SONG CONTENT ========================================================|
|================================================================================================================|
*/

/**
 * Fetch the tracks associated with a Spotify playlist or album.
 * @param {string} type - The type of item (e.g., 'playlist' or 'album').
 * @param {string} itemId - The ID of the Spotify playlist or album to fetch tracks from.
 * @returns {Array} - An array of track items retrieved from the Spotify API response.
 */
export const getSongQueue = async (type, itemId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/${type}s/${itemId}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.tracks.items;
};

/*
|================================================================================================================|
|========================================== USER CONTENT ========================================================|
|================================================================================================================|
*/

/**
 * Fetches user information.
 * @returns {Promise<Object>} - A promise that resolves to the user's information.
 */
export const getUserInfo = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data;
};

