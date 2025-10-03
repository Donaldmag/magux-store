import { useState } from "react";
import DropdownWrapper from "./DropdownWrapper";
import FlexibleButton from "../buttons/FlexibleButton";

const PriceDropdown = () => {
  const [price, setPrice] = useState({ min: 0, max: 600 });

  return (
    <DropdownWrapper
      label="Price"
      width="w-80"
      showHeader={true}
      headerContent={`Max price is $${price.max}`}
      onReset={() => setPrice({ min: 0, max: 600 })}
    >
      <div className="flex gap-3">
        <label className="flex flex-col justify-between w-full text-sm text-gray-700">
          Min
          <input
            type="number"
            value={price.min}
            onChange={(e) => setPrice({ ...price, min: e.target.value })}
            className="mt-1 h-8 w-28 p-1 bg-gray-100/50 rounded border-zinc-300 shadow-sm"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-700">
          Max
          <input
            type="number"
            value={price.max}
            onChange={(e) => setPrice({ ...price, max: e.target.value })}
            className="mt-1 h-8 w-28 p-1 bg-slate-100/25 rounded border-zinc-300 shadow-sm"
          />
        </label>
        <div className="flex flex-col justify-end">
          <FlexibleButton
            mode=""
            variant={"outine"}
            customClass={"bg-black hover:opacity-75 text-white h-8 w-8"}
            btnText="-"
          />
        </div>
      </div>
    </DropdownWrapper>
  );
};

export default PriceDropdown;
