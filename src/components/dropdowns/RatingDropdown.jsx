import { useState } from "react";
import { Star } from "lucide-react";
import DropdownWrapper from "./DropdownWrapper";

const RatingDropdown = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <DropdownWrapper label="Rating" width="w-40" showHeader={false}>
      <fieldset className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((stars) => (
          <label
            key={stars}
            className="inline-flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="radio"
              name="rating"
              checked={selectedRating === stars}
              onChange={() => setSelectedRating(stars)}
            />
            <span className="flex">
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} size={16} fill="gold" stroke="gold" />
              ))}
            </span>
          </label>
        ))}
      </fieldset>
    </DropdownWrapper>
  );
};

export default RatingDropdown;