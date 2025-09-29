'use client';

import React, { useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import useClickOutside from '../../hooks/useClickOutside';
import { X, Search } from 'lucide-react';

const transition : Object = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.2,
};

function Button({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      className='relative flex h-8 w-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-full text-white transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-blue-400'
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function ToolbarDynamicSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div className="" ref={containerRef}>
        <div className="h-full w-full rounded-full border border-zinc-950/10 bg-white">
          <motion.div
            animate={{
              // @todo: here I want to remove the width
              width: isOpen ? "380px" : "44px",
            }}
            initial={false}
          >
            <div className="overflow-hidden p-1.5">
              {!isOpen ? (
                <Button
                  onClick={() => setIsOpen(true)}
                  ariaLabel="Search notes"
                >
                  <Search className="h-4 w-4" />
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button onClick={() => setIsOpen(false)} ariaLabel="Back">
                    <X className="h-5 w-5" />
                  </Button>
                  <div className="relative w-full">
                    <input
                      className="h-8 w-full rounded-lg bg-transparent py-2 font-medium text-zinc-900 text-sm placeholder-zinc-500  placeholder:text-sm! focus:outline-hidden"
                      autoFocus
                      placeholder="Search for a product..."
                    />
                    <div className="absolute right-1 top-0 flex h-full items-center justify-center"></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}