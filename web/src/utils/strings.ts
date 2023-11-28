export interface HomeStrings {
  featuredAlbums: string;
  featuredPlaylists: string;
};

export const homeStrings: HomeStrings = {
  featuredAlbums: 'New releases for you!',
  featuredPlaylists: 'Mixers',
};

export interface PlaylistStrings {
  playlistDuration: string;
  songs: string;
};

export const playlistStrings: PlaylistStrings = {
  playlistDuration: "about 3 hours",
  songs: " songs,"
};

export interface AlbumStrings {
  albumDuration: string;
  songs: string;
};

export const albumStrings: AlbumStrings = {
  albumDuration: "about 3 hours",
  songs: " songs,"
};

export interface HeaderStrings {
  index: string;
  title: string;
  album: string;
  date: string;
  duration: string;
};

export const headerStrings: HeaderStrings = {
  index: "#",
  title: "Title",
  album: "Album",
  date: "Date added",
  duration: "Duration",
};
