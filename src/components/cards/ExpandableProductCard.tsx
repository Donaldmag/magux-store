"use client";

import * as React from "react";
import { useState } from "react";
import ExpandableCards, {
  Card,
} from "../../components/ui/smoothui/ExpandableCards";

const demoCards: Card[] = [
  {
    id: 1,
    title: "Summer Opening",
    image:
      "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/summer-opening.webp",
    content:
      "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
    author: {
      name: "Zé Manuel",
      role: "Fundador, Summer Opening",
      image: "https://github.com/educlopez.png",
    },
  }
];

const ExpandableProductCard = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <ExpandableCards
      cards={demoCards}
      selectedCard={selected}
      onSelect={setSelected}
    />
  );
};

export default ExpandableProductCard;
