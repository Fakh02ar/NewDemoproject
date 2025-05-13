"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import calender from './assets/calender.svg'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const Picker = ({ className }) => {
  const today = new Date()
  const [date, setDate] = React.useState({
    from: today,
    to: addDays(today, 20),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[240px] bg-black text-white border-0 hover:bg-black hover:text-white cursor-pointer justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
          <img src={calender} alt="" className="w-5 h-5 brightness-0 invert" />


            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "MM /dd / y")} -{" "}
                  {format(date.to, "MM / dd / y")}
                </>
              ) : (
                format(date.from, "MM dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default Picker
