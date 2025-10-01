// Not working fine as the original with animation

import { useState } from "react";
// import SelectDropdown from "../dropdowns/SelectDropdown";
import SelectDropdownVariant from "../dropdowns/SelectDropdownVariant";
import { sizes, colors } from "../../data/data";
import FlexibleButton from "../buttons/FlexibleButton";

export default function ProductCardVariant() {
  // 👇 on gère l'ouverture/fermeture
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block h-fit rounded-lg p-4 shadow-sm border border-zinc-950/10 bg-white">
      {/* Image */}
      <img
        alt="Product"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />

      {/* Titre + prix */}
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Product name</dt>
            <dd className="font-medium text-sm leading-5">
              123 Wallaby Avenue, Park Road
            </dd>
          </div>

          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-md text-black font-medium leading-8">
              $240,000
            </dd>
          </div>
        </dl>
      </div>

      {/* Bouton toggle description */}
      <div className="mt-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          {isOpen ? "Hide description ▲" : "Click to see description ▼"}
        </button>
      </div>

      {/* Section déroulante */}
      {isOpen && (
        <div className="absolute mt-4 space-y-3 animate-accordion-down">
          {/* Dropdowns */}
          <div className="flex lg:justify-start justify-between items-center gap-4 text-xs">
            <div className="sm:inline-flex sm:items-center sm:gap-2">
              <SelectDropdownVariant data={sizes} name={"Sizes"} />
            </div>

            <div className="sm:inline-flex sm:items-center sm:gap-2">
              <SelectDropdownVariant data={colors} name={"Colors"} />
            </div>
          </div>

          {/* Boutons */}
          <div className="flex items-center justify-between lg:gap-1.5 gap-1">
            <FlexibleButton mode="" btnText="BUY NOW" />
            <FlexibleButton mode="icon" />
          </div>

          {/* Texte description */}
          <p className="text-sm text-gray-600">
            This is the extended description of the product. You can add more
            details about the property, features, or specifications here.
          </p>
        </div>
      )}
    </div>
  );
}
