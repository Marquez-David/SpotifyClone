import {
  carouselStrings,
  categories,
  subcategories,
  subcategoryRoutes,
  verticalSliderStrings,
  fallbackDataStrings,
  contentType,
  podcastStrings,
  artistStrings,
  searchLabelStrings,
} from "./strings";

/**
 * Converts milliseconds into hours and minutes format.
 * @param {*} milliseconds 
 * @returns 
 */
export function convertMilliseconds(milliseconds) {
  const totalMinutes = Math.floor(milliseconds / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const formattedHours = hours < 10 ? hours : '' + hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : '' + minutes;

  return formattedHours + ' h ' + formattedMinutes + ' min';
}

/**
 * Converts a date in "YYYY-MM-DD" format to "Day Month" format.
 * @param {*} inputDate 
 * @returns 
 */
export function convertDate(inputDate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const [year, month, day] = inputDate.split('-');
  const formattedMonth = months[parseInt(month, 10) - 1];

  return day + ' ' + formattedMonth;
}

/**
 * Returns the abbreviated day of the week for a given date.
 * @param {Date|string} date - The date for which the day of the week is to be determined.
 * @returns {string} The abbreviated day of the week (e.g., "Sun." for Sunday).
 */
export function dayOfWeek(date) {
  const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  date = new Date(date);
  return days[date.getDay()];
}

/**
 * Retrieves the year from a given date string in "YYYY-MM-DD" format.
 * @param {string} dateString
 * @returns {number}
 */
export function getYear(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();

  return year;
}

/**
 * Extracts artist names from an array of artist objects and returns them as a comma-separated string.
 * @param {Array} artists
 * @returns {string}
 */
export function extractArtistNames(artists) {
  const artistNames = artists.map(artist => artist.name);
  const joinedNames = artistNames.join(', ');

  return joinedNames.length > 40 ? joinedNames.substring(0, 40) + '...' : joinedNames;
}

/**
 * Shortens the given text by either truncating it to a specified number of words
 * @param {string} text - The input text to be processed.
 * @param {number} words - The maximum number of words to include in the shortened text.
 * @returns {string} The shortened or original text based on word count.
 */
export function shortenText(text, words) {
  return countWords(text) > words ? sliceText(text, words) + podcastStrings.etc : text;
}

/**
 * Counts the number of words in the given text.
 * @param {string} text - The input text to be processed.
 * @returns {number} The total number of words in the input text.
 */
export function countWords(text) {
  return text.split(' ').length;
}

/**
 * Slices the given text into a substring containing a specified number of words.
 * @param {string} text - The input text to be processed.
 * @param {number} words - The maximum number of words to include in the sliced text.
 * @returns {string} A substring containing the specified number of words from the input text.
 */
export function sliceText(text, words) {
  return text.split(' ').slice(0, words).join(' ');
}

/**
 * Rounds a number depending on its size.
 * @param {number} number - The number to be rounded and formatted.
 * @returns {string} - The formatted number with the abbreviation and the additional string.
 */
export function roundNumber(number) {
  let result = number;
  if (number >= 1000000) {
    result = (number / 1000000).toFixed(1) + ' M';
  } else if (number >= 1000) {
    result = (number / 1000).toFixed(1) + ' K';
  }
  return result + artistStrings.followers;
};

/**
 * Parse the data parameter and returns the corresponding object for each case
 * @param {*} data 
 * @param {*} carouselTitle 
 * @returns 
 */
export function parseCarouselData(data, carouselTitle) {
  const response = {};

  const carouselMappings = {
    [carouselStrings.yourPlaylists]: () => {
      response.data = data;
      response.description = data.name;
      response.image = data.images?.[0]?.url;
      response.type = data.type;
    },
    [carouselStrings.findOutMoreAbout]: () => {
      response.data = data;
      response.description = data.name;
      response.image = data.images?.[0]?.url;
      response.type = data.type;
    },
    [carouselStrings.yourPodcasts]: () => {
      response.data = data.show;
      response.description = data.show.name;
      response.image = data.show.images?.[0]?.url;
      response.type = data.show.type;
    },
    [carouselStrings.relatedArtists]: () => {
      response.data = data;
      response.description = data.name;
      response.image = data.images?.[0]?.url;
      response.type = data.type;
    },
  };

  const mappingFunction = carouselMappings[carouselTitle];
  mappingFunction();

  return response;
}

/**
 * Returns an object data with the data, description properties, depending on the subcategory provided.
 * @param {*} item 
 * @param {*} subcategory 
 * @returns 
 */
export function parseLibraryData(data, subcategory) {
  const response = {};

  const libraryMappings = {
    [subcategories.playlists]: () => {
      response.data = data;
      response.description = verticalSliderStrings.by + data.owner.display_name;
    },
    [subcategories.artists]: () => {
      response.data = data;
      response.description = "";
    },
    [subcategories.albums]: () => {
      response.data = data.album;
      response.description = data.album.artists[0].name;
    },
    [subcategories.episodes]: () => {
      response.data = data.episode;
      response.description = convertDate(data?.episode?.release_date) + ' • ' + convertMilliseconds(data.episode.duration_ms);
    },
    [subcategories.podcasts]: () => {
      response.data = data.show;
      response.description = "";
    },
  };

  const mappingFunction = libraryMappings[subcategory];
  mappingFunction();

  return response;
};

export const parseSubcategoryRoute = (subcategory) => {
  const routeMappings = {
    [subcategories.playlists]: subcategoryRoutes.playlists,
    [subcategories.artists]: subcategoryRoutes.artists,
    [subcategories.albums]: subcategoryRoutes.albums,
    [subcategories.episodes]: subcategoryRoutes.episodes,
    [subcategories.downloads]: subcategoryRoutes.downloads,
    [subcategories.podcasts]: subcategoryRoutes.podcasts,
  };

  return routeMappings[subcategory];
};

/**
 * Uses an object mapping to determine the appropriate search text based on the subcategory. 
 * @param {*} subcategory 
 * @returns 
 */
export function parseSearchText(subcategory) {
  const subcategoryToSearchText = {
    [subcategories.playlists]: searchLabelStrings.searchForPlayLists,
    [subcategories.artists]: searchLabelStrings.searchForArtists,
    [subcategories.albums]: searchLabelStrings.searchForAlbums,
    [subcategories.episodes]: searchLabelStrings.searchForEpisodes,
    [subcategories.downloads]: searchLabelStrings.searchForDownloads,
    [subcategories.podcasts]: searchLabelStrings.searchForPrograms,
  };

  return subcategoryToSearchText[subcategory];
};

/**
 * Maps subcategories to corresponding texts for titles, descriptions, and button texts.
 * @param {*} type 
 * @returns 
 */
export function parseFallbackData(type) {
  const textMappings = {
    [subcategories.playlists]: {
      title: fallbackDataStrings.playlistsTitle,
      description: fallbackDataStrings.playlistsDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
    [subcategories.artists]: {
      title: fallbackDataStrings.artistsTitle,
      description: fallbackDataStrings.artistsDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
    [subcategories.albums]: {
      title: fallbackDataStrings.albumsTitle,
      description: fallbackDataStrings.albumsDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
    [subcategories.episodes]: {
      title: fallbackDataStrings.episodesTitle,
      description: fallbackDataStrings.episodesDescription,
      buttonText: fallbackDataStrings.browsePodcasts
    },
    [subcategories.downloads]: {
      title: fallbackDataStrings.downloadsTitle,
      description: fallbackDataStrings.downloadsDescription,
      buttonText: fallbackDataStrings.browsePodcasts
    },
    [subcategories.podcasts]: {
      title: fallbackDataStrings.programsTitle,
      description: fallbackDataStrings.programsDescription,
      buttonText: fallbackDataStrings.browsePodcasts
    },
    [subcategories.error]: {
      title: fallbackDataStrings.errorTitle,
      description: fallbackDataStrings.errorDescription,
      buttonText: fallbackDataStrings.tryAgain
    },
    [subcategories.empty]: {
      title: fallbackDataStrings.emptyPlaylistTitle,
      description: fallbackDataStrings.emptyPlaylistDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
  };

  return textMappings[type] || {};
}

/**
 * Navigate to the corresponding screen based on the content type of the item.
 * @param {object} item - The item to navigate to.
 * @param {object} navigation - Navigation object provided by React Navigation.
 * @returns {void} - Navigation value.
 */
export function handleNavigation(item, navigation) {
  let nav;
  if (item.type === contentType.album) {
    nav = navigation.navigate("Album", { title: item.name, data: item });
  } else if (item.type === contentType.playlist) {
    nav = navigation.navigate("Playlist", { title: item.name, data: item });
  } else if (item.type === contentType.podcast) {
    nav = navigation.navigate("Podcast", { title: item.name, data: item });
  } else if (item.type === contentType.artist) {
    nav = navigation.navigate("Artist", { title: item.name, data: item });
  }
  return nav;
};

/**
 * A utility function for handling scrolling and triggering the fetching of the next page.
 * @param {Function} fetchNextPage - The function to fetch the next page of data.
 * @returns {Object} An object containing the fetchNextItems function.
 */
export const handleScroll = (fetchNextPage) => {

  const fetchNextItems = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const maxScroll = Math.round(contentSize.height - layoutMeasurement.height);
    const currentScroll = Math.round(contentOffset.y);

    if (currentScroll >= maxScroll - 1) {
      fetchNextPage();
    }
  };

  return { fetchNextItems };
};

/**
 * Get subcategories based on the selected category.
 * @param {string} category - The selected category (e.g., "music" or "library").
 * @returns {Array} An array of subcategories based on the selected category.
 */
export const getSubcategories = (category) => {
  return category === categories.music ?
    [subcategories.playlists, subcategories.artists, subcategories.albums] :
    [subcategories.episodes, subcategories.downloads, subcategories.podcasts];
};

/**
 * Takes a list of song data objects and transforms them into a consistent format for a playback queue.
 * It maps over the list, extracting relevant information such as title, artwork, URL, and artist.
 * @param {Array} response - An array of song data objects from the Spotify API response.
 * @param {Object} item - The main item (e.g., playlist or album) used for default artwork if not found in song data.
 * @returns {Array} - An array of formatted song objects for the playback queue.
 */
export const createQueue = (response, item) => {
  return response.map((song) => (
    {
      title: song.name ?? song.track.name,
      artwork: song.track?.album.images[0].url ?? item.images[0].url,
      url: song.preview_url ?? song.track.preview_url,
      artist: song.artists ?? song.track.artists
    }
  ));
};





