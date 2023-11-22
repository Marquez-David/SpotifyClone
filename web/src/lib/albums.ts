export interface Album {
  id: string;
  albumId: number;
  title: string;
  color: string;
  cover: string;
  owner: string,
  href: string,
  type: string;
};

export const albums: Album[] = [
  {
    id: '7Me8eZZE4nxbN3L8zhA08a',
    albumId: 1,
    title: "Old Topics",
    color: "#6A6C6A",
    cover: "https://i.scdn.co/image/ab67616d0000b2731b77fa83533e4cb790ad3059",
    owner: "Al Safir",
    href: "/albums/7Me8eZZE4nxbN3L8zhA08a",
    type: "Album",
  },
  {
    id: '2pOEFqvfxp5uUQ8vQEmVA0',
    albumId: 1,
    title: "Heaven knows",
    color: "#4a0d18",
    cover: "https://i.scdn.co/image/ab67616d0000b27312e36c27d935e955b44c6581",
    owner: "Warner Records",
    href: "/albums/2pOEFqvfxp5uUQ8vQEmVA0",
    type: "Album",
  },
];
