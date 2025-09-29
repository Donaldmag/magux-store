import { Link } from "react-router-dom";
import maguxStoreLogo from "../../assets/magux-store.svg";
import ComboBox from "./ComboBox";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import ToolbarDynamicSearch from "../inputs/ToolbarDynamicSearch";

function Navbar() {
  return (
    <>
      <header className="bg-transparent">
        <div className="mx-auto flex h-16 2xl:max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 text-blue-400"
            href="#"
          >
            <img src={maguxStoreLogo} alt="magux-store logo" />
            <h3 className="font-bold text-xl lg:-mt-1">Magux Store</h3>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <div className="hidden md:flex items-center gap-4">
              <div className="lg:block hidden">
                <ComboBox />
              </div>
              {/* <SearchInput /> */}
              <ToolbarDynamicSearch />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex sm:gap-4 gap-4">
                <span className="flex items-center gap-2 icon-hover-animation">
                  <Heart size={24} fill="black"/>
                  <span className="md:block hidden">Favorites</span>
                </span>
                <span className="flex items-center gap-2 icon-hover-animation">
                  <ShoppingBag color="#51a2ff" size={24}/>
                  <span className="md:block hidden">Cart</span>
                </span>
              </div>

              <button className="block rounded-full bg-white shadow shadow-slate-200 p-1.5 text-gray-600 hover:text-gray-600/75 md:hidden icon-hover-animation">
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
