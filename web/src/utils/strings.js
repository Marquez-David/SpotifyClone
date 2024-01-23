
/**
 * Object containing strings for the navbar.
 * @typedef {Object} NavbarStrings
 * @property {string} home - The string for the 'Home' navigation item.
 * @property {string} search - The string for the 'Search' navigation item.
 * @property {string} library - The string for the 'Your library' navigation item.
 */
export const navbarStrings = {
  home: 'Home',
  search: 'Search',
  library: 'Your library',
}

/**
 * Object containing strings for side cards.
 * @typedef {Object} SideCardStrings
 * @property {string} artist - The string for the 'Artist' side card.
 * @property {string} album - The string for the 'Album' side card with a separator.
 * @property {string} playlist - The string for the 'Playlist' side card with a separator.
 * @property {string} podcast - The string for the 'Podcast' side card with a separator.
 */
export const sideCardStrings = {
  artist: 'Artist',
  album: 'Album • ',
  playlist: 'Playlist • ',
  podcast: 'Podcast • '
}

/**
 * Object containing paths for navigation.
 * @typedef {Object} NavigationPaths
 * @property {string} index - The path for the index page.
 * @property {string} home - The path for the home page.
 * @property {string} search - The path for the search page.
 * @property {string} library - The path for the library page.
 */
export const paths = {
  index: '/',
  home: '/home',
  search: '/search',
  library: '/library',
}

/**
 * Object containing content types.
 * @typedef {Object} ContentType
 * @property {string} playlist - Represents the content type 'playlist'.
 * @property {string} album - Represents the content type 'album'.
 * @property {string} podcast - Represents the content type 'podcast'.
 * @property {string} artist - Represents the content type 'artist'.
 * @property {string} track - Represents the content type 'track'.
 */
export const contentType = {
  playlist: 'playlist',
  album: 'album',
  podcast: 'show',
  artist: 'artist',
  track: 'track',
}

/**
 * Object containing Spotify metadata strings.
 * @typedef {Object} MetadataStrings
 * @property {string} title - The Spotify title.
 * @property {string} description - The Spotify description.
 * @property {string} icon - The Spotify URL icon.
 */
export const metadataStrings = {
  title: 'Spotify',
  description: 'Spotify player',
  icon: 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png'
}

/**
 * Object containing strings for the home page.
 * @typedef {Object} HomeStrings
 * @property {string} featuredAlbums - The string for the featured albums section.
 * @property {string} featuredPlaylists - The string for the featured playlists section.
 */
export const homeStrings = {
  goodMorning: 'Good morning',
  goodAfternoon: 'Good afternoon',
  goodEvening: 'Good evening',
  featuredAlbums: 'New releases for you!',
  featuredPlaylists: 'Today\'s biggest hits',
}





export const playlistStrings = {
  playlistDuration: "about 3 hours",
  songs: " songs,"
}

export const albumStrings = {
  albumDuration: "about 3 hours",
  songs: " songs,"
}

export const headerStrings = {
  index: "#",
  title: "Title",
  album: "Album",
  date: "Date added",
  duration: "Duration",
}