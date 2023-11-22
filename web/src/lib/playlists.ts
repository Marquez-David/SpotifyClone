export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: string;
  cover: string;
  owner: string,
  href: string;
  type: string;
};

export const playlists: Playlist[] = [
  {
    id: '6FbI5D9YxtUmPfAmRBhR8P',
    albumId: 1,
    title: "myTechno",
    color: "#21c872",
    cover: "https://mosaic.scdn.co/640/ab67616d0000b27364a8a7f7f7c4959fe3f6ccaaab67616d0000b27373ba1a86fff89dc8de5fba54ab67616d0000b273a686c52635702a171872bc8fab67616d0000b273e51a1fbac92a31cfe875f5c2",
    owner: "Marquez-David",
    href: "/playlists/6FbI5D9YxtUmPfAmRBhR8P",
    type: "Playlist",
  },
  {
    id: '1ePucvcmC9kpHMZv4dh7tA',
    albumId: 2,
    title: "darksouls theme",
    color: "#555555",
    cover: "https://mosaic.scdn.co/640/ab67616d0000b2732472601180911ff89445cbc8ab67616d0000b2732a29fd126925fbcc2820753bab67616d0000b273431b3ae0a1f015199a1e1095ab67616d0000b27397cae1b2dfe4943cc6c7c755",
    owner: "Marquez-David",
    href: "/playlists/1ePucvcmC9kpHMZv4dh7tA",
    type: "Playlist",
  },
  {
    id: '4SdT2sM2dusodFoVu8xeQ8',
    albumId: 3,
    title: "rapraprapraprapraparpraparpraprapraprapraprap",
    color: "#2ee9d7",
    cover: "https://mosaic.scdn.co/640/ab67616d0000b27324f0fdd455eec29cc449e36dab67616d0000b2739180ec245c2d22d169155c79ab67616d0000b273adb5dbf4251255a00146d8ebab67616d0000b273c65afbbe40aa51d9ab5fed4e",
    owner: "Marquez-David",
    href: "/playlists/4SdT2sM2dusodFoVu8xeQ8",
    type: "Playlist",
  },
  {
    id: '7zwmhlQiTEVcWN1VcqzE9J',
    albumId: 4,
    title: "loco 8",
    color: "#555555",
    cover: "https://i.scdn.co/image/ab67616d0000b27326f474a0dfdab2bf6e311338",
    owner: "Marquez-David",
    href: "/playlists/7zwmhlQiTEVcWN1VcqzE9J",
    type: "Playlist",
  },
  {
    id: '7K6x512IBt0uePowm7u7HD',
    albumId: 5,
    title: "nirvana unpluged",
    color: "#df24ff",
    cover: "https://i.scdn.co/image/ab67616d0000b27336c5417732e53e23cb219246",
    owner: "Marquez-David",
    href: "/playlists/7K6x512IBt0uePowm7u7HD",
    type: "Playlist",
  },
  {
    id: '2T5tdKWzrOUkV9TE7Yjjfn',
    albumId: 6,
    title: "example",
    color: "#1e3a8a",
    cover: "https://i.scdn.co/image/ab67616d0000b27349c12156d2fe1e4b3b3b2abf",
    owner: "Marquez-David",
    href: "/playlists/2T5tdKWzrOUkV9TE7Yjjfn",
    type: "Playlist",
  },
];