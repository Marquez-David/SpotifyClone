export const spotifyAuthConfig = {
  clientId: '7daaab95ed8a4075b87484c630c8d509',
  clientSecret: '06b3901cbe974827af18f980fccc52f2',
  redirectUrl: 'com.src:/oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};