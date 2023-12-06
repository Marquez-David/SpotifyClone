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
export const getFeaturedPlaylists = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/browse/featured-playlists?limit=10`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.playlists.items;
};

/**
 * Fetches a list of featured albums (new releases) from the Spotify API.
 * @returns {Array} - An array containing the featured albums.
 */
export const getFeaturedAlbums = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/browse/new-releases?limit=10`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.albums.items;
};

/**
 * Fetches the user's recently played items from the Spotify API.
 * @returns {Array} - An array containing the recently played items.
 */
export const getRecentlyPlayed = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/player/recently-played?limit=6`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.items;
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

	const podcastsResponse = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/shows`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});

	const playlists = playlistsResponse.data.items;
	const albums = albumsResponse.data.items.map(obj => obj.album);
	const artists = artistsResponse.data.artists.items;
	const podcasts = podcastsResponse.data.items.map(obj => obj.show);

	return [...playlists, ...albums, ...artists, ...podcasts];
};

/*
|================================================================================================================|
|======================================= EXPLORE CONTENT =========================================================|
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
 * Fetches the albums associated with a Spotify artist.
 * @param {string} artistId - The Spotify artist ID for which albums are to be fetched.
 * @returns {Array} - An array of album objects associated with the specified artist.
 */
export const getArtistAlbums = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data.items;
};

/**
 * Checks if the current user follows a specific artist based on the provided artist ID.
 * @param {string} artistId - The ID of the artist to be checked for follow status.
 * @returns {boolean} `true` if the user follows the artist, `false` otherwise.
 */
export const isArtistSaved = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "GET",
			url: `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data[0];
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

/**
 * Checks if the current user follows a specific podcast on Spotify.
 * @param {string} podcastId - The unique identifier of the podcast.
 * @returns {boolean} - A boolean value indicating whether the user follows the specified podcast.
 */
export const getUserFollowPodcast = async (podcastId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/shows/contains?ids=${podcastId}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data[0];
};

/**
 * Allows the current user to follow a specific podcast on Spotify.
 * @param {string} podcastId - The unique identifier of the podcast to be followed.
 * @returns {Object} - The response data from the Spotify API after following the podcast.
 * @throws {Error} - Throws an error if there's an issue while following the podcast.
 */
export const followPodcast = async (podcastId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "PUT",
			url: `https://api.spotify.com/v1/me/shows?ids=${podcastId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while following podcast: " + error.message);
	}
};

/**
 * Allows the current user to unfollow a specific podcast on Spotify.
 * @param {string} podcastId - The unique identifier of the podcast to be unfollowed.
 * @returns {Object} - The response data from the Spotify API after unfollowing the podcast.
 * @throws {Error} - Throws an error if there's an issue while unfollowing the podcast.
 */
export const unfollowPodcast = async (podcastId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "DELETE",
			url: `https://api.spotify.com/v1/me/shows?ids=${podcastId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while unfollowing podcast: " + error.message);
	}
};

/**
 * Checks whether the current user has saved a specific episode on Spotify.
 * @param {string} episodeId - The unique identifier of the episode to be checked.
 * @returns {boolean} - A boolean value indicating whether the user has saved the specified episode.
 * @throws {Error} - Throws an error if there's an issue while checking the saved status of the episode.
 */
export const isEpisodeSaved = async (episodeId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "GET",
			url: `https://api.spotify.com/v1/me/episodes/contains?ids=${episodeId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data[0];
	} catch (error) {
		console.log("Error while checking if user follows episodes: " + error.message);
	}
};

/**
 * Adds a specific episode to the user's saved episodes on Spotify.
 * @param {string} episodeId - The unique identifier of the episode to be saved.
 * @returns {object} - The response data from the Spotify API after attempting to save the episode.
 * @throws {Error} - Throws an error if there's an issue while saving the episode.
 */
export const saveEpisode = async (episodeId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "PUT",
			url: `https://api.spotify.com/v1/me/episodes?ids=${episodeId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while saving episode: " + error.message);
	}
};

/**
 * Removes a specific episode from the user's saved episodes on Spotify.
 * @param {string} episodeId - The unique identifier of the episode to be unsaved.
 * @returns {object} - The response data from the Spotify API after attempting to unsave the episode.
 * @throws {Error} - Throws an error if there's an issue while unsaving the episode.
 */
export const unsaveEpisode = async (episodeId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios({
			method: "DELETE",
			url: `https://api.spotify.com/v1/me/episodes?ids=${episodeId}`,
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		return response.data;
	} catch (error) {
		console.log("Error while unsaving episode: " + error.message);
	}
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

/**
 * Checks if a track is saved in the user's Spotify library.
 * @param {string} trackId - The ID of the track to check if it is saved.
 * @returns {boolean} - True if the track is saved in the user's library, false otherwise.
 */
export const isTrackSaved = async (trackId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: `https://api.spotify.com/v1/me/tracks/contains?ids=${trackId}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data[0];
};

/**
 * Saves a track to the user's Spotify library.
 * @param {string} trackId - The ID of the track to be saved.
 * @returns {object} - The response data from the Spotify API.
 */
export const saveTrack = async (trackId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "PUT",
		url: `https://api.spotify.com/v1/me/tracks?ids=${trackId}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data;
};

/**
 * Unsave a track from the user's saved tracks.
 * @param {string} trackId - The ID of the track to be unsaved.
 * @returns {Promise<Object>} - The response data from the Spotify API.
 */
export const unsaveTrack = async (trackId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "DELETE",
		url: `https://api.spotify.com/v1/me/tracks?ids=${trackId}`,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data;
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

export const requestItem = async (request) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	const response = await axios({
		method: "GET",
		url: request,
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	return response.data;
};