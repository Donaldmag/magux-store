"use client";

import { useState } from "react";

import AnimatedInput from "@/components/ui/smoothui/AnimatedInput";

export default function AnimatedInputText() {
  const [value, setValue] = useState("");
  return (
    <div className="max-w-lg space-y-6">
      <AnimatedInput
        label="All categories"
        value={value}
        onChange={setValue}
        placeholder="Type here..."
      />
    </div>
  );
}
