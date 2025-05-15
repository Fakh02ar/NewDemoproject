import { useState, useEffect, useRef, useMemo } from "react";
import seat from "./assets/seat.svg";
import Picker from "./Picker";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react"; 
export default function TicketSearchBar() {
  const [search, setSearch] = useState("");
  const [seats, setSeats] = useState(2);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tempSeats, setTempSeats] = useState(seats);
  const dropdownRef = useRef(null);

  const applySeats = () => {
    setSeats(tempSeats);
    setDropdownOpen(false);
  };

  const cancelSeats = () => {
    setTempSeats(seats);
    setDropdownOpen(false);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const seatDisplay = useMemo(() => {
    return `${seats} ${seats === 1 ? "Seat" : "Seats"}`;
  }, [seats]);

  return (
    <div className="max-w-[1100px] pt-6 mt-8 px-1 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row mb-20">
      
      {/* Main search container */}
      <div className="md:border-0 lg:border border-gray-600 lg:border-t-2 lg:border-b-2 lg:bg-black md:bg-[#141414] text-white shadow-lg justify-between flex flex-col lg:flex-row  rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none w-full relative z-10">

        {/* Search Input */}
        <div className="flex border items-center py-4  px-4 lg:py-4 lg:rounded-2xl md:py-2  md:border-r-0 lg:border-b-0 lg:border-r-0 md:border lg:border-0 border-gray-700 w-full lg:w-[340px] bg-black">
  {/* Search Icon: show on md and below */}
  <Search className="w-5 h-5 text-white mr-2 block lg:hidden" />

  <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="bg-transparent outline-none w-full placeholder-gray-400"
  />
</div>

        {/* Date Picker */}
        <div className="flex border items-center py-2 px-0 lg:px-4 lg:py-4 md:py-1 md:px-1  md:border-r-0 lg:border-b-0 lg:border-r border-gray-700 w-full lg:w-70 mt-2 lg:mt-0 bg-black">
          <Picker />
        </div>

        {/* Seats Dropdown */}
        <div className="relative w-full lg:w-[160px] xl:w-[242px] bg-black mt-2 lg:mt-0" ref={dropdownRef}>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex justify-between items-center px-4 py-4 border  md:py-2 md:border border-gray-600  lg:border-0 md:border-r-0 gap-5 cursor-pointer lg:pt-[22px] "
          >
            <div className="flex gap-2">
              <img src={seat} alt="seat" />
              <span>{seatDisplay}</span>
            </div>
            <ChevronDown className="w-4 text-gray-500" />
          </div>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 bg-black text-white rounded-xl p-4 shadow-xl z-20 w-[260px]">
              <div className="flex justify-center items-center gap-2 mb-4">
                <button
                  onClick={() => setTempSeats(Math.max(1, tempSeats - 1))}
                  className="border p-2 rounded-md w-10 text-center border-gray-700"
                >
                  −
                </button>
                <span className="text-md border-gray-700 rounded-md border p-2 w-10 text-center">
                  {tempSeats}
                </span>
                <button
                  onClick={() => setTempSeats(Math.min(6, tempSeats + 1))}
                  className="border p-2 rounded-md w-10 text-center border-gray-700"
                >
                  +
                </button>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={cancelSeats}
                  className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={applySeats}
                  className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
     <button className="bg-blue-600 hover:bg-blue-700 text-white w-full lg:w-45 lg:h-18 lg:py-6 text-[21px] font-bold py-2 mt-2 lg:mt-0 md:rounded-sm lg:rounded-none lg:rounded-b-none lg:rounded-r-xl lg:rounded-br-2xl h-12 ">
  Find Ticket
</button>

    </div>
  );
}
