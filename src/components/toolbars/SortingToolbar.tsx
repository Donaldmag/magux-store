"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";
import { Edit2, Lock } from "lucide-react";
import PriceDropdown from "../dropdowns/PriceDropdown";
import RatingDropdown from "../dropdowns/RatingDropdown";
import BrandsDropdown from "../dropdowns/BrandsDropdown";
interface ToolbarProps {
    className?: string;
    activeColor?: string;
    onSearch?: (value: string) => void;
}

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem",
    }),
};

const transition = { type: "spring", bounce: 0, duration: 0.4 };

export function SortingToolbar({
    className,
    activeColor = "text-primary",
    // onSearch,
}: ToolbarProps) {
    const [selected, setSelected] = React.useState<string | null>("select");
    const [isToggled, setIsToggled] = React.useState(false);
 
    const outsideClickRef = React.useRef(null);

    const toolbarItems = [
      { id: "Relevence", title: "Relevence" },
      { id: "Popular", title: "Popular" },
      { id: "Most recent", title: "Most recent" }
    ];

    const brands = ["Nike", "Adidas", "Puma", "Reebok"];


    const handleItemClick = (itemId: string) => {
        setSelected(selected === itemId ? null : itemId);
    };

    return (
      <div className="space-y-2">
        <div
          ref={outsideClickRef}
          className={cn(
            "flex items-center gap-3 p-2 relative",
            "bg-background",
            "border rounded-xl",
            "transition-all duration-200",
            className
          )}
        >
          <div className="flex items-center w-full gap-2">
            {toolbarItems.map((item) => (
              <motion.button
                key={item.id}
                variants={buttonVariants as any}
                initial={false}
                animate="animate"
                custom={selected === item.id}
                onClick={() => handleItemClick(item.id)}
                transition={transition as any}
                className={cn(
                  "relative flex items-center rounded-none px-3 py-2 cursor-pointer",
                  "text-sm font-medium transition-colors duration-300",
                  selected === item.id
                    ? "bg-[#1F9CFE] text-white rounded-lg"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {/* <item.icon
                                size={16}
                                className={cn(
                                    selected === item.id && "text-white"
                                )}
                            /> */}

                <AnimatePresence initial={false}>
                  <motion.span className="">{item.title}</motion.span>
                  {/* {selected === item.id && (
                                    <motion.span
                                        variants={spanVariants as any}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={transition as any}
                                        className="overflow-hidden"
                                    >
                                        {item.title}
                                    </motion.span>
                                )} */}
                </AnimatePresence>
              </motion.button>
            ))}

            <div className="flex items-center gap-6 md:px-4">
              <PriceDropdown />
              <RatingDropdown />
              <BrandsDropdown brands={brands} />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsToggled(!isToggled)}
              className={cn(
                "flex items-center gap-2 px-4 py-2",
                "rounded-xl border shadow-sm transition-all duration-200",
                "hover:shadow-md active:border-primary/50",
                isToggled
                  ? [
                      "bg-[#1F9CFE] text-white",
                      "border-[#1F9CFE]/30",
                      "hover:bg-[#1F9CFE]/90",
                      "hover:border-[#1F9CFE]/40",
                    ]
                  : [
                      "bg-background text-muted-foreground",
                      "border-border/30",
                      "hover:bg-muted",
                      "hover:text-foreground",
                      "hover:border-border/40",
                    ]
              )}
            >
              {isToggled ? (
                <Edit2 className="w-3.5 h-3.5" />
              ) : (
                <Lock className="w-3.5 h-3.5" />
              )}
              <span className="text-sm font-medium">
                {isToggled ? "On" : "Off"}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    );
}

export default SortingToolbar;
