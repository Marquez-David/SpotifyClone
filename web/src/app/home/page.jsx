"use client"

import { useEffect } from "react"

import PlaylistCard from "@/components/Cards/MainCards/PlaylistCard"
import AlbumCard from "@/components/Cards/MainCards/AlbumCard"
import TrackCard from "@/components/Cards/MainCards/TrackCard"

import { featuredPlaylists } from "@/lib/featured-playlists"
import { featuredAlbums } from "@/lib/featured-albums"

import { useMessage } from "@/hooks/useMessage"
import { useHomeContent } from "@/hooks/useHomeContent"

import { homeStrings } from "@/utils/strings"

const Home = () => {

  const { message } = useMessage()
  const { data } = useHomeContent().recentlyPlayed()

  useEffect(() => {
    const access_token = new URLSearchParams(window.location.hash.substring(1)).get('access_token')
    localStorage.setItem('token', access_token)
  }, [])

  return (
    <div id="playlist-container" className="h-full transition-all duration-1000 relative z-10 px-6 pt-10 overflow-y-auto">
      <h1 className="font-bold text-3xl">{message}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-4">
        {data && data.map((track) => <TrackCard key={track.id} track={track.track} />)}
      </div>

      <h1 className="font-bold text-lg">{homeStrings.featuredPlaylists}</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {featuredPlaylists.map((playlist) => (<PlaylistCard key={playlist.id} playlist={playlist} />))}
      </div>

      <h1 className="font-bold text-lg">{homeStrings.featuredAlbums}</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {featuredAlbums.map((album) => <AlbumCard key={album.id} album={album} />)}
      </div>
    </div>
  )
}

export default Home
