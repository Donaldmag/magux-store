import ProductCard from "../components/cards/ProductCard";
import ExpandableCardsDemo from "../components/cards/ExpandableProductCard";
import ProductCardVariant from "../components/cards/ProductCardVariant";
import SelectDropdown from "../components/dropdowns/SelectDropdown";
import MainSidebar from "../components/sidebars/MainSidebar";
import SortingToolbar from "../components/toolbars/SortingToolbar";
import TagsFiltersContainer from "../components/containers/TagsFiltersContainer";
// import MainSidebar from "../components/sidebars/MainSidebar";
// import FloatingPanel from "../components/panels/floatingPanel";

function Home() {
  return (
    <>
      {/* <ExpandableCardsDemo /> */}
      {/* <ProductCardVariant /> */}
      {/* <SelectDropdown/> */}
      <div className="flex xl:flex-row flex-col w-full items-start p-2 w-full h-full pt-8">
        <div className="xl:w-1/5 w-full rounded-xl p-3 max-xl:hidden">
          <MainSidebar />
          {/* <FloatingPanel /> */}
        </div>
        <div className="xl:w-4/5 w-full rounded-xl p-3 space-y-3 ">
          <div className="max-lg:hidden space-y-3">
            <SortingToolbar className="bg-white border border-zinc-50 shadow shadow-xs" />
            <TagsFiltersContainer tag_name={"Brand"} />
          </div>
          <div className="grid 2xl:grid-cols-5 xxl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3 sm:justify-start justify-center">
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
