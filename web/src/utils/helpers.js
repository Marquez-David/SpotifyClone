import { contentType, sideCardStrings } from "./strings"

/**
 * Generates a string indicating the owner of a content item.
 * @param {object} item - The content item for which the owner information is to be parsed.
 * @returns {string} - A formatted string indicating the type and owner of the content item.
 */
export const parseOwner = (item) => {
  if (item.type === contentType.album) {
    return sideCardStrings.album + item.label
  } else if (item.type === contentType.playlist) {
    return sideCardStrings.playlist + item.owner.display_name
  } else if (item.type === contentType.podcast) {
    return sideCardStrings.podcast + item.publisher
  }
}

/**
 * Extracts artist names from an array of artist objects and returns them as a comma-separated string.
 * @param {Array} artists
 * @returns {string}
 */
export const extractArtistNames = (artists) => {
  const artistNames = artists.map(artist => artist.name)
  const joinedNames = artistNames.join(', ')

  return joinedNames
}

/**
 * Return a string with the fiest letter capitalized.
 * @param {string} word
 * @returns {string}
 */
export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1)
}

/**
 * Retrieves the year from a given date string in "YYYY-MM-DD" format.
 * @param {string} dateString
 * @returns {number}
 */
export const getYear = (inputDate) => {
  const date = new Date(inputDate)
  const year = date.getFullYear()

  return year
}

/**
 * Calculates the total duration of songs in hours and minutes.
 * @param {Array} songs - An array of song objects with duration in milliseconds.
 * @returns {string} - A string representing the total duration in the format "hours : minutes".
 */
export const calculateDuration = (songs) => {
  const durationsInMinutes = songs.map(song => song.duration_ms / (1000 * 60)).reduce((total, duration) => total + duration, 0)

  const hours = Math.floor(durationsInMinutes / 60)
  const mins = Math.round(durationsInMinutes % 60)

  return hours > 0 ? `${hours} h ${mins} min` : `${mins} min`
}