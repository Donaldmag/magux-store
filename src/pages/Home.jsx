import ProductCard from "../components/cards/ProductCard";
import ExpandableCardsDemo from "../components/cards/ExpandableProductCard";
import ProductCardVariant from "../components/cards/ProductCardVariant";
import SelectDropdown from "../components/dropdowns/SelectDropdown";
import Mainsidebar from "../components/sidebars/Mainsidebar";
// import MainSidebar from "../components/sidebars/MainSidebar";
// import FloatingPanel from "../components/panels/floatingPanel";

function Home() {
  return (
    <>
      {/* <ExpandableCardsDemo /> */}
      {/* <ProductCardVariant /> */}
      {/* <SelectDropdown/> */}
      <div className="flex xl:flex-row flex-col w-full items-start p-4 w-full h-full lg:gap- gap- pt-20">
        <div className="xl:w-1/5 w-full rounded-xl p-3">
          <Mainsidebar/>
          {/* <FloatingPanel /> */}
        </div>
        <div className="xl:w-4/5 w-full rounded-xl p-3">
          <div className="grid 2xl:grid-cols-5 xxl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
