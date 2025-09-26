import maguxStoreLogo from "../../assets/magux-store.svg";

function Navbar() {
  return (
    <>
      <header className="bg-transparent">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3 text-blue-400" href="#">
            <img src={maguxStoreLogo} alt="magux-store logo" />
            <h3 className="font-bold text-xl -mt-1">Magux Store</h3>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <div className="hidden md:block">
              {/* Dropdown button category */}
              Categories dropdown
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <span>Favories</span>
                <span>Panier</span>
              </div>

              <button className="block rounded-full bg-white shadow shadow-slate-200 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
