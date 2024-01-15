const SideCard = ({ item }) => (
  <a href={item.href} className="album-item flex relative px-4 py-2 overflow-hidden items-center gap-5 rounded-md hover:bg-background-highlight">
    <picture className="h-12 w-12 flex-none">
      <img src={item.cover} alt={`Cover image of ${item.title}`} className="object-cover w-full h-full rounded-md" />
    </picture>
    <div className="flex flex-auto flex-col truncate">
      <h4 className="text-white text-sm font-light">{item.title}</h4>
      <span className="text-gray text-sm">{`${item.owner}`}</span>
    </div>
  </a>
);

export default SideCard