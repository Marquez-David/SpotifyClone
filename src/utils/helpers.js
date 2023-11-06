import {
  contentType,
  podcastStrings,
  artistStrings,
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
  return text.split(' ').length > words ? text.split(' ').slice(0, words).join(' ') + podcastStrings.etc : text;
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
 * Navigate to the corresponding screen based on the content type of the item.
 * @param {object} item - The item to navigate to.
 * @param {object} navigation - Navigation object provided by React Navigation.
 * @returns {void} - Navigation value.
 */
export function handleNavigation(item, navigation) {
  let nav;
  if (item.type === contentType.album || item.type === contentType.track) {
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





