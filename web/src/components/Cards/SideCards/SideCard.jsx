import QuaverConditionalImage from "@/components/ConditionalImages/QuaverConditionalImage"

import { parseOwner } from "@/utils/helpers"

const SideCard = ({ item }) => (
  <a href={`/${item.type}/${item.id}`} className="album-item flex relative px-4 py-2 overflow-hidden items-center gap-5 rounded-md hover:bg-background-highlight">
    <picture className="h-12 w-12 flex-none">
      <QuaverConditionalImage image={item.images[0]} className={'object-cover w-full h-full rounded-md'} />
    </picture>
    <div className="flex flex-auto flex-col truncate">
      <h4 className="text-white text-sm font-light">{item.name}</h4>
      <span className="text-gray text-sm">{`${parseOwner(item)}`}</span>
    </div>
  </a>
)

export default SideCard