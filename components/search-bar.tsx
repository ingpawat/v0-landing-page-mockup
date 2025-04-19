"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin, Users } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchBar() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-[#1B202A] font-medium">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#5A6172]" />
              <Input placeholder="Where are you going?" className="pl-10 border-[#5A6172]/30 focus:border-[#A83240]" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#1B202A] font-medium">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal border-[#5A6172]/30",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-[#5A6172]" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-[#1B202A] font-medium">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-[#5A6172]" />
              <Select>
                <SelectTrigger className="pl-10 border-[#5A6172]/30">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5+">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-[#A83240] hover:bg-[#A83240]/90 text-white h-10">Search Hotels</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
