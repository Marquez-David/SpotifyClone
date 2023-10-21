import {
  carouselStrings,
  libraryStrings,
  verticalSliderStrings,
  fallbackDataStrings,
  contentType,
  podcastStrings,
  artistStrings,
} from "./strings";

/**
 * Parse the items parameter and returns the corresponding title for each case
 * @param {*} items 
 * @param {*} title 
 * @returns 
 */
export const parseTitle = (items, title) => {
  var newTitle = title;
  if (title === carouselStrings.findOutMoreAbout) {
    newTitle += items?.[1].artists[0].name;
  }

  return newTitle;
};

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
      response.description = data.name + carouselStrings.listComplementString;
    },
    [carouselStrings.findOutMoreAbout]: () => {
      response.data = data;
      response.description = data.name + '\n' + data.artists[0].name + carouselStrings.albumComplementString;
    },
    [carouselStrings.yourPodcasts]: () => {
      response.data = data.show;
      response.description = data.show.name + '\n' + carouselStrings.podcastComplementsString + data.show.publisher;
    },
    [carouselStrings.relatedArtists]: () => {
      response.data = data;
      response.description = data.name;
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
    [libraryStrings.playlists]: () => {
      response.data = data;
      response.description = verticalSliderStrings.by + data.owner.display_name;
    },
    [libraryStrings.artists]: () => {
      response.data = data;
      response.description = "";
    },
    [libraryStrings.albums]: () => {
      response.data = data.album;
      response.description = verticalSliderStrings.by + data.album.artists[0].name;
    },
    [libraryStrings.episodes]: () => {
      response.data = data.episode;
      response.description = convertDate(data.episode.release_date) + ' • ' + convertMilliseconds(data.episode.duration_ms);
    },
    [libraryStrings.programs]: () => {
      response.data = data.show;
      response.description = "";
    },
  };

  const mappingFunction = libraryMappings[subcategory];
  mappingFunction();

  return response;
}

/**
 * Maps subcategories to corresponding texts for titles, descriptions, and button texts.
 * @param {*} type 
 * @returns 
 */
export function parseFallbackData(type) {
  const textMappings = {
    [libraryStrings.playlists]: {
      title: fallbackDataStrings.playlistsTitle,
      description: fallbackDataStrings.playlistsDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
    [libraryStrings.artists]: {
      title: fallbackDataStrings.artistsTitle,
      description: fallbackDataStrings.artistsDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
    [libraryStrings.albums]: {
      title: fallbackDataStrings.albumsTitle,
      description: fallbackDataStrings.albumsDescription,
      buttonText: fallbackDataStrings.browseMusic
    },
    [libraryStrings.episodes]: {
      title: fallbackDataStrings.episodesTitle,
      description: fallbackDataStrings.episodesDescription,
      buttonText: fallbackDataStrings.browsePodcasts
    },
    [libraryStrings.downloads]: {
      title: fallbackDataStrings.downloadsTitle,
      description: fallbackDataStrings.downloadsDescription,
      buttonText: fallbackDataStrings.browsePodcasts
    },
    [libraryStrings.programs]: {
      title: fallbackDataStrings.programsTitle,
      description: fallbackDataStrings.programsDescription,
      buttonText: fallbackDataStrings.browsePodcasts
    },
    [libraryStrings.error]: {
      title: fallbackDataStrings.errorTitle,
      description: fallbackDataStrings.errorDescription,
      buttonText: fallbackDataStrings.tryAgain
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





