import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

/**
 * Fetch the user's recently played songs using axios.
 * @returns 
 */
export async function getRecentlyPlayedSongs() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/player/recently-played?limit=7`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch user playlists
 * @returns 
 */
export async function getUserPlaylists() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/playlists`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch most listened artist by the user
 * @returns 
 */
export async function getArtists() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/top/artists`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch artist albums
 * @param {*} artistId 
 * @returns 
 */
export async function getArtistAlbums(artistId) {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/artists/${artistId}/albums?limit=7`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch podcasts that user follows
 * @returns 
 */
export async function getPodcasts() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/shows?limit=7`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch albums that user saved
 * @returns 
 */
export async function getSavedAlbums() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/albums`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch artists that user follows
 * @returns 
 */
export async function getFollowingArtists() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/following?type=artist`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch usr saved podcasts
 * @returns 
 */
export async function getSavedPodcasts() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/shows`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

/**
 * Fetch usr saved podcasts
 * @returns 
 */
export async function getSavedEpisodes() {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/episodes`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

export async function getBrowseCategories() {
	const accessToken = await AsyncStorage.getItem('spotifyToken');
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/browse/categories`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}

export async function getAlbum(album) {
	const accessToken = await AsyncStorage.getItem('spotifyToken');
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/albums/` + album,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response;
	} catch (error) {
		console.log("Error while fetching API: " + error.message);
	}
}


