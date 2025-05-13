import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  const currentDate = new Date();

  return (
    <div>
      <div className=""> {/* Calendar wrapper */}
        <DayPicker
          today={currentDate}
          showOutsideDays={showOutsideDays}
          className={cn("p-2 pt-4 text-white", className)}
          classNames={{
            months: "flex flex-col sm:flex-row gap-2",
            month:
              "flex flex-col gap-4 w-full sm:w-1/2 [&:nth-child(2)]:border-l-2 [&:nth-child(2)]:border-white [&:nth-child(2)]:pl-6 pr-1",
            caption: "flex justify-center pt-1 relative items-center w-70 pb-4",
            caption_label: "text-sm font-medium text-white",
            nav: "flex items-center gap-4",
            nav_button: cn(
              "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white border-0 focus:outline-none focus:ring-0"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-x-1",
            head_row: "flex gap-2 ",
            head_cell:
              "text-muted-foreground rounded-md w-8 font-[600] text-[12px] text-[#9CA3AF]",
            row: "flex w-full mt-2 gap-2 even:[&>*]:text-white odd:[&>*]:text-gray-600",
            cell: cn(
              "relative p-0 text-center text-sm text-white",
              props.mode === "range"
                ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                : "[&:has([aria-selected])]:rounded-md"
            ),
            day: cn(
              "size-8 p-0 font-normal text-white hover:bg-gray-700 cursor-pointer" 
            ),
            day_range_start:
              "",
            day_range_end:
              "",
            day_selected:
              "text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: " text-accent-foreground",
            day_outside:
              "day-outside text-muted-foreground aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-none aria-selected:text-white-foreground",
            day_hidden: "invisible",
            ...classNames,
          }}
          components={{
            IconLeft: ({ className, ...props }) => (
              <ChevronLeft className={cn("size-4", className)} {...props} />
            ),
            IconRight: ({ className, ...props }) => (
              <ChevronRight className={cn("size-4", className)} {...props} />
            ),
          }}
          {...props}
        />
      </div>

      {/* Bottom action section with border and buttons */}
      <div className="flex justify-end gap-2 items-center px-6 py-3 border-t border-white mt-2">
        <span className="text-white text-[12px]">05/13/2025 - 05/20/2025</span>
        <div className="flex gap-2">
          <button className="px-5 py-2 bg-[#004DE1] text-[13px] text-white rounded-lg hover:bg-gray-800 transition">
            Cancel
          </button>
          <button className="px-5 py-2 bg-[#004DE1] text-[13px] text-white rounded-lg hover:bg-blue-700 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export { Calendar };
