import { fruits } from "../../data/data";

'use client';

import * as React from 'react';
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
} from '../ui/reui/base-combobox';
// import { Label } from '@/components/ui/base-label';
export default function ComboBox() {
  const id = React.useId();
  return (
    <div className="w-full max-w-xs space-y-6">   
      <div className="flex flex-col gap-2">
        {/* <Label htmlFor={`${id}-large`}>Large</Label> */}
        <Combobox items={fruits}>
          <ComboboxControl>
            <ComboboxValue>
              <ComboboxInput variant="lg" placeholder="ALL CATEGORIES" id={`${id}-large`} />
            </ComboboxValue>
            <ComboboxClear />
            <ComboboxIcon />
          </ComboboxControl>
          <ComboboxContent>
            <ComboboxEmpty>No category</ComboboxEmpty>
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
    </div>
  );
}