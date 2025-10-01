// Working correctly unless the entry animation
// to remove delete this file & ExpandableProducCard in /cards

"use client";
import * as React from "react";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export interface Card {
  id: number;
  title: string;
  image: string;
  content: string;
  author?: {
    name: string;
    role: string;
    image: string;
  };
}

const defaultCards: Card[] = [
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
  },
]

const smoothEasing: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

export interface ExpandableCardsProps {
  cards?: Card[];
  selectedCard?: number | null;
  onSelect?: (id: number | null) => void;
  className?: string;
  cardClassName?: string;
}

export default function ExpandableCards({
  cards = defaultCards, // list of products
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedCard =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) onSelect(null);
      else setInternalSelected(null);
    } else {
      if (onSelect) onSelect(id);
      else setInternalSelected(id);
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <div
      className={`flex w-full flex-col gap-4 overflow-scroll p-4 ${className}`}
    >
      <div
       
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            data-card-id={card.id}
            className={`bg-background relative mr-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border shadow-lg ${cardClassName}`}
            style={{
              scrollSnapAlign: "start",
              // MODIF: suppression de la hauteur fixe, on gère via animate
            }}
            animate={{
              // MODIF: on anime maintenant la hauteur et plus la largeur
              height: selectedCard === card.id ? 600 : 300,
              width: 400, // largeur fixe
            }}
            transition={{
              duration: 0.5,
              ease: smoothEasing,
            }}
            onClick={() => handleCardClick(card.id)}
          >
            {/* Partie image inchangée */}
            <div className="relative h-[300px] w-full">
              {/* <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                width={200}
                height={300}
                className="h-full w-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Play video"
                    className="bg-background/30 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm transition-transform hover:scale-110"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </button>
                  <span className="text-sm font-medium">Play video</span>
                </div>
              </div>
            </div>

            {/* MODIF: contenu expansible passe en dessous au lieu d'être absolu à droite */}
            <AnimatePresence mode="popLayout">
              {selectedCard === card.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                  animate={{
                    height: 200,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                  transition={{
                    duration: 0.5,
                    ease: smoothEasing,
                    opacity: { duration: 0.3, delay: 0.2 },
                  }}
                  className="bg-background w-full"
                >
                  <motion.div
                    className="flex h-full flex-col justify-between p-8"
                    initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} // MODIF: y au lieu de x
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <p className="text-primary-foreground text-sm">
                      {card.content}
                    </p>
                    {card.author && (
                      <div className="mt-4 flex items-center gap-3">
                        <div className="bg-primary h-12 w-12 overflow-hidden rounded-full border">
                          <img
                            src={card.author.image}
                            alt={card.author.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-foreground font-semibold">
                            {card.author.name}
                          </p>
                          <p className="text-primary-foreground text-xs">
                            {card.author.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
