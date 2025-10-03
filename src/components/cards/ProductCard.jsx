// import SelectDropdown from "../dropdowns/SelectDropdown";
import SelectDropdownVariant from "../dropdowns/SelectDropdownVariant";
import { Link } from "react-router-dom";
import { sizes, colors } from "../../data/data";
import FlexibleButton from "../buttons/FlexibleButton";
import FloatingPanel from "../panels/FloatingPanel";

export default function ProductCard() {
  return (
    <div className="w-full max-w-90">
      <Link
        to="/"
        className="block rounded-lg p-4 shadow-sm border-zinc-950/10 bg-white"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Product name</dt>
              <dd className="font-medium text-sm leading-5">
                123 Wallaby Avenue, Park Road 123 Wallaby Avenue, Park Road
              </dd>
            </div>

            <div>
              <dt className="sr-only">Price</dt>
              <dd className="text-md text-black font-medium leading-8">
                $240,000
              </dd>
            </div>
          </dl>

          <div className="mt-2 flex md:justify-start justify-between items-center gap-2 text-xs">
            {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"> */}
            {/* <SelectDropdown /> */}
            {/* <SelectDropdownVariant data={sizes} name={"Sizes"} /> */}
            <FloatingPanel data={colors} option_name={"colors"} />
            <FloatingPanel data={sizes} option_name={"sizes"} />
            {/* </div> */}
          </div>

          <div className="flex items-center justify-between lg:gap-1.5 gap-1 mt-3">
            <FlexibleButton
              mode=""
              btnText="BUY NOW"
              variant={"outline"}
              customClass={
                "rounded-full hover:bg-blue-400 transition-all hover:text-white border-zinc-300 hover:border-none"
              }
            />
            <FlexibleButton
              mode="icon"
              variant={"primary"}
              customClass={"rounded-full bg-blue-400"}
            />
          </div>
          <div className="hidden">
            <FlexibleButton
              mode="link"
              underlined="dashed"
              btnText="Click to see description"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
