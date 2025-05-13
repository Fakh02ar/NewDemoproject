// src/components/ui/popover.jsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export function Popover({ children, ...props }) {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
}

export function PopoverTrigger({ children, ...props }) {
  return <PopoverPrimitive.Trigger {...props}>{children}</PopoverPrimitive.Trigger>;
}

export function PopoverContent({ children, className = "", ...props }) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        side="bottom" // Force bottom side
        align="center"
        sideOffset={4}
        avoidCollisions={false} // Disable auto repositioning
        className={`z-50 w-96 mt-5 border border-gray-500 bg-black p-4 shadow-md ${className}`}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}
