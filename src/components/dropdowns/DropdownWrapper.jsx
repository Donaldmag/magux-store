import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const DropdownWrapper = ({
  label,
  children,
  showHeader,
  headerContent,
  onReset,
  width = "w-48",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer"
      >
        <span className="text-sm font-medium capitalize">{label}</span>
        <span className={`transition-transform ${isOpen ? "-rotate-180" : ""}`}>
          <ChevronDown size={20} />
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`absolute mt-2 z-10 ${width} rounded border border-zinc-100 bg-white shadow-md`}
        >
          {showHeader && (
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100">
              <span className="text-sm text-gray-700">{headerContent}</span>
              <button
                type="button"
                onClick={onReset}
                className="text-sm text-gray-700 underline hover:text-gray-500 cursor-pointer"
              >
                Reset
              </button>
            </div>
          )}
          <div className="p-3">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropdownWrapper;