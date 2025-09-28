"use client";

import * as React from "react";
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxValue,
} from "../ui/reui/base-combobox";
// import { Label } from "../ui/reui/base-label";
import { fruits } from "../../data/data";

export default function ComboBox() {
  const id = React.useId();

  return (
    <div className="max-w-xs w-full">
      <Combobox items={fruits}>
        <div className="flex flex-col gap-2">
          {/* <Label htmlFor={id}>Choose a fruit</Label> */}
          <ComboboxControl>
            <ComboboxValue>
              <ComboboxInput placeholder="ALL CATEGORIES" id={id} />
            </ComboboxValue>
            <ComboboxClear />
            <ComboboxIcon />
          </ComboboxControl>
        </div>

        <ComboboxContent>
          <ComboboxEmpty>No categories found</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                <ComboboxItemIndicator />
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
