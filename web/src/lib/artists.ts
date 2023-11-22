export interface Artist {
  id: string;
  name: string;
  color: string;
  cover: string;
  href: string;
  type: string;
};

export const artists: Artist[] = [
  {
    id: '5NzCASNJVvcPW4uGwMRlPl',
    name: "Al Safir",
    color: "#21c872",
    cover: "https://i.scdn.co/image/ab6761610000e5eb47bdc9475b8802155ad8c5a6",
    href: "/artists/5NzCASNJVvcPW4uGwMRlPl",
    type: "Artist",
  },
  {
    id: '5lcDGoJUr5WY5bCFAfYbCU',
    name: "KIRBY",
    color: "#93302a",
    cover: "https://i.scdn.co/image/ab6761610000e5eb05fe433aad7eef8da0f5819f",
    href: "/artists/5lcDGoJUr5WY5bCFAfYbCU",
    type: "Artist",
  },
  {
    id: '78rUTD7y6Cy67W1RVzYs7t',
    name: "PinkPantheress",
    color: "#110c11",
    cover: "https://i.scdn.co/image/ab6761610000e5eb90ddbcd825c7b6142d269e26",
    href: "/artists/78rUTD7y6Cy67W1RVzYs7t",
    type: "Artist",
  },
];