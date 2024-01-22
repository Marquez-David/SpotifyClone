'use client'

import LibraryButton from "../Buttons/LibraryButton"
import SideCard from "@/components/Cards/SideCards/SideCard"
import ArtistSideCard from "../Cards/SideCards/ArtistSideCard"

import { useLibraryContent } from "@/hooks/useLibraryContent"
import { contentType } from "@/utils/strings"

const ContentNavBar = () => {
  const { library } = useLibraryContent()
  return (
    <nav className="flex flex-col rounded-lg h-screen overflow-hidden">
      <div className="bg-background-base p-2">
        <ul><LibraryButton /></ul>
      </div>
      <div className="bg-background-base px-2 overflow-y-auto">
        <ul>
          {library && library.map((item) => item.type === contentType.artist ? <ArtistSideCard key={item.id} item={item} /> : <SideCard key={item.id} item={item} />)}
        </ul>
      </div>
    </nav>
  )
}

export default ContentNavBar