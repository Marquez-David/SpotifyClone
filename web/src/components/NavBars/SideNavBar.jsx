import HomeButton from "@/components/Buttons/HomeButton"
import SearchButton from "@/components/Buttons/SearchButton"

const SideNavBar = () => (
  <nav className="flex flex-col gap-2 mb-2">
    <div className="bg-background-base rounded-lg p-2">
      <ul>
        <HomeButton />
        <SearchButton />
      </ul>
    </div>
  </nav>
);

export default SideNavBar;