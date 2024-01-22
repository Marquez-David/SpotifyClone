import { parseOwner } from "@/utils/helpers";
import ConditionalImage from "@/components/ConditionalImage/ConditionalImages";

const SideCard = ({ item }) => (
  <a href={item.id} className="album-item flex relative px-4 py-2 overflow-hidden items-center gap-5 rounded-md hover:bg-background-highlight">
    {item.images.length > 0 ? (
      <picture className="h-12 w-12 flex-none">
        <img src={item.images[0].url} alt={`Cover image of ${item.id}`} className="object-cover w-full h-full rounded-md" />
      </picture>
    ) :
      (
        <ConditionalImage />
      )
    }

    <div className="flex flex-auto flex-col truncate">
      <h4 className="text-white text-sm font-light">{item.name}</h4>
      <span className="text-gray text-sm">{`${parseOwner(item)}`}</span>
    </div>
  </a>
);

export default SideCard