import type { Album } from "@/lib/albums";

export interface Track {
  id: string;
  title: string;
  album: Album;
  type: string;
};