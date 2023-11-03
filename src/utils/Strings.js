//Content type according to the API, used to manage the navigation
export const contentType = {
  playlist: 'playlist',
  album: 'album',
  podcast: 'show',
  artist: 'artist',
};

//Library categories
export const categories = {
  music: 'Music',
  podcasts: 'Podcast',
};

//Library subcategories
export const subcategories = {
  playlists: "Playlists",
  artists: "Artists",
  albums: "Albums",
  episodes: "Episodes",
  downloads: "Downloads",
  podcasts: "Programs",

  //To manage errors and empty data
  error: "error",
  empty: "empty",
};

//Subcategory routes
export const subcategoryRoutes = {
  playlists: "playlists",
  artists: "following?type=artist",
  albums: "albums",
  episodes: "episodes",
  downloads: "downloads",
  podcasts: "shows",
};

//Create playlist
export const createPlaylist = "Create playlist";

//Strings used in LoginScreen
export const loginStrings = {
  loginString1: "Millions of Songs. \n",
  loginString2: "Free on Spotify.",
  signInWithSpotify: "Sign in with Spotify",
  signInWithPhoneNumber: "Continue with phone number",
  signInWithGoogle: "Continue with Google",
  signInWithFacebook: "Continue with Facebook",
  signIn: "Sign In",
};

//Strings used in HomeScreen
export const homeStrings = {
  goodMorning: "Good morning!",
  goodAfternoon: "Good afternoon!",
  goodEvening: "Good evening!",
};

//Strings used in Carousel component
export const carouselStrings = {
  recentlyPlayed: "Recently played",
  yourPlaylists: "Your playlists",
  findOutMoreAbout: "Find out more about ",
  yourPodcasts: "Your podcasts",
  relatedArtists: "Related artists",
};

export const verticalSliderStrings = {
  by: "by ",
};

//Strings used in Search component
export const searchLabelStrings = {
  searchForPlayLists: "Search for playlists",
  searchForArtists: "Search for artists",
  searchForAlbums: "Search for albums",
  searchForEpisodes: "Search for episodes",
  searchForDownloads: "Search for downloads",
  searchForPrograms: "Search for podcasts",
};

//Strings used in FallBackDataCard component
export const fallbackDataStrings = {
  playlistsTitle: "No playlists have been created.",
  playlistsDescription: "Create a new one and add your favorite songs.",

  artistsTitle: "We haven't found any artists you follow.",
  artistsDescription: "We suggest you to explore our library to discover new musical talents.",

  albumsTitle: "No saved albums found.",
  albumsDescription: "Take the opportunity to explore different genres and find your next favorite album!",

  episodesTitle: "Looking for something to listen?",
  episodesDescription: "Explore a variety of podcast episodes on different topics.",

  downloadsTitle: "No downloads yet.",
  downloadsDescription: "Click on ⬇ on an episode to listen to it without internet connection.",

  programsTitle: "You don't follow any podcast yet.",
  programsDescription: "If you follow a podcast, you will receive new episodes automatically.",

  errorTitle: "Something went wrong.",
  errorDescription: "An error occurred while loading the data. \n Please try again later.",

  emptyPlaylistTitle: "This playlist is empty.",
  emptyPlaylistDescription: "You can add your favorite songs to this playlist and start enjoying your music.",

  //Button texts
  browsePodcasts: "EXPLORE PODCASTS",
  browseMusic: "EXPLORE MUSIC",
  tryAgain: "TRY AGAIN",
};

export const searchStrings = {
  search: "Search",
  artistsSongsOrPodcasts: "Artists, songs or podcasts..."
};

export const shufflePlay = "SHUFFLE PLAY";

//Strings used in PodcastScreen
export const podcastStrings = {
  follow: "FOLLOW",
  following: "FOLLOWING",
  etc: "...",
  allEpisodes: "All episodes",
};

//Strings used in ArtistScreen
export const artistStrings = {
  followers: " FOLLOWERS",
  randomMode: "SHUFFLE PLAY",
  popularSongs: "Popular songs",
  relatedArtists: "Related artists",
};

//Strings used in modal component
export const modalDialogStrings = {
  //Title texts
  undeDevelopment: 'Oops! It seems that this feature is under development. You will be able to enjoy it soon. 🚀',

  //Button texts
  ok: 'OK 👌',
};
