import { useState } from "react";
import DropdownWrapper from "./DropdownWrapper";

const BrandsDropdown = ({ brands }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <DropdownWrapper
      label="Brands"
      width="w-48"
      showHeader={true}
      headerContent={`${selectedBrands.length} Selected`}
      onReset={() => setSelectedBrands([])}
    >
      <fieldset className="flex flex-col gap-2">
        {brands.map((brand) => (
          <label
            key={brand}
            className="inline-flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleToggle(brand)}
              className="size-5 rounded border-zinc-300"
            />
            {brand}
          </label>
        ))}
      </fieldset>
    </DropdownWrapper>
  );
};

export default BrandsDropdown;