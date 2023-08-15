import { carouselStrings, libraryStrings, verticalSliderStrings, emptyDataStrings } from "./strings";

/**
 * Converts milliseconds into hours and minutes format.
 * @param {*} milliseconds 
 * @returns 
 */
export function convertMilliseconds(milliseconds) {
  const totalMinutes = Math.floor(milliseconds / 60000); // 1 minuto = 60000 milisegundos
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
 * Parse the data parameter and returns the corresponding object for each case
 * @param {*} data 
 * @param {*} carouselTitle 
 * @returns 
 */
export function parseCarouselData(data, carouselTitle) {
  const response = {};

  const carouselMappings = {
    [carouselStrings.recentlyPlayed]: () => {
      response.data = data.track.album;
      response.description = data.track.name;
    },
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
 * @param {*} subcategory 
 * @returns 
 */
export function parseEmptyData(subcategory) {
  const textMappings = {
    [libraryStrings.playlists]: {
      title: emptyDataStrings.playlistsTitle,
      description: emptyDataStrings.playlistsDescription,
      buttonText: emptyDataStrings.browseMusic
    },
    [libraryStrings.artists]: {
      title: emptyDataStrings.artistsTitle,
      description: emptyDataStrings.artistsDescription,
      buttonText: emptyDataStrings.browseMusic
    },
    [libraryStrings.albums]: {
      title: emptyDataStrings.albumsTitle,
      description: emptyDataStrings.albumsDescription,
      buttonText: emptyDataStrings.browseMusic
    },
    [libraryStrings.episodes]: {
      title: emptyDataStrings.episodesTitle,
      description: emptyDataStrings.episodesDescription,
      buttonText: emptyDataStrings.browsePodcasts
    },
    [libraryStrings.downloads]: {
      title: emptyDataStrings.downloadsTitle,
      description: emptyDataStrings.downloadsDescription,
      buttonText: emptyDataStrings.browsePodcasts
    },
    [libraryStrings.programs]: {
      title: emptyDataStrings.programsTitle,
      description: emptyDataStrings.programsDescription,
      buttonText: emptyDataStrings.browsePodcasts
    }
  };

  return textMappings[subcategory] || {};
}





