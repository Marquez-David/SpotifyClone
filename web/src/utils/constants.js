export const CLIENT_ID = '7daaab95ed8a4075b87484c630c8d509'
export const CLIENT_SECRET = process.env.CLIENT_SECRET
export const REDIRECT_URI = 'http://localhost:3000/home'
export const SCOPES = [
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-library-read',
  'user-library-modify',
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-read-recently-played',
  'user-follow-read',
  'user-read-playback-position',
  'user-follow-modify',
  'user-modify-playback-state'
]
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
export const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join()}&response_type=token&show_dialog=true`