import Image from "next/image";

import { sideCardStrings } from "@/utils/strings";

const ArtistSideCard = ({ item }) => (
  <a href={item.id} className="album-item flex relative px-4 py-2 overflow-hidden items-center gap-5 rounded-md hover:bg-background-highlight">
    <picture className="h-12 w-12 flex-none">
      <Image src={item.images[0].url} height={item.images[0].height} width={item.images[0].width} alt={`Cover image of ${item.id}`} className="object-cover w-full h-full rounded-full" />
    </picture>
    <div className="flex flex-auto flex-col truncate">
      <h4 className="text-white text-sm font-light">{item.name}</h4>
      <span className="text-gray text-sm">{sideCardStrings.artist}</span>
    </div>
  </a>
);

export default ArtistSideCard