import Image from "next/image"

import { milisecondsToMinutes, extractArtistNames } from "@/utils/helpers"
import { contentTableStrings } from "@/utils/strings"
import ClockIcon from "@/assets/icons/ClockIcon.svg"

const AlbumTable = ({ tracks }) => (
  <table className="table-auto text-left m-6 divide-y divide-neutral-400">
    <thead className="">
      <tr className=" text-neutral-400 text-sm font-bold">
        <th className="px-4 py-2">{contentTableStrings.index}</th>
        <th className="px-4 py-2">{contentTableStrings.title}</th>
        <th className="px-4 py-2"><Image src={ClockIcon} height={16} width={16} alt={`Cover image of clock`} /> </th>
      </tr>
    </thead>

    <tbody>
      <tr className="h-[16px]"></tr>
      {tracks.map((track, index) => (
        <tr key={track.id} className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
          <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">{index + 1}</td>
          <td className="px-4 py-2 flex gap-3">
            <div className="flex flex-col">
              <h3 className="text-white text-base font-normal">{track.name}</h3>
              <span>{extractArtistNames(track.artists)}</span>
            </div>
          </td>
          <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{milisecondsToMinutes(track.duration_ms)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default AlbumTable