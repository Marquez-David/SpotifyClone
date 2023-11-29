import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  currentSong: {
    title: "Da Enemy",
    image: "https://i.scdn.co/image/ab67616d0000b2739180ec245c2d22d169155c79",
    added: "May 15, 2022",
    duration: "2:54",
    album: "D.I.T.C.",
    artists: "D.I.T.C., Big L, Fat Joe"
  },
  setCurrentSong: (currentSong) => set({ currentSong }),
}))