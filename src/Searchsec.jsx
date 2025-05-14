import { useState, useEffect, useRef, useMemo } from "react";
import seat from "./assets/seat.svg";
import Picker from "./Picker";
import { ChevronDown } from "lucide-react";

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

  // Memoized seat display
  const seatDisplay = useMemo(() => {
    return `${seats} ${seats === 1 ? "Seat" : "Seats"}`;
  }, [seats]);

  return (
    <div className="max-w-[1100px] pt-6 mt-8 px-1 sm:px-6 lg:px-8 mx-auto flex mb-20">
      <div className="border border-gray-600 border-t-2 border-r-0 border-b-2 items-center bg-black text-white shadow-lg max-w-[1100px] justify-between sm:px-6 flex flex-col lg:flex-row lg:items-center rounded-l-2xl relative z-10 lg:p-[1px] lg:space-y-0 h-18">

        {/* Search Input */}
        <div className="flex items-center px-4 py-6 border-r border-gray-700 w-[340px]">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full placeholder-gray-400"
          />
        </div>

        {/* Date Range */}
        <div className="flex items-center px-4 py-4 border-r border-gray-700 w-70">
          <Picker />
        </div>

        {/* Custom Seats Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex justify-between items-center px-4 py-4 xl:w-[242px] lg:w-[160px] gap-5 cursor-pointer"
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
                <span className="text-md border-gray-700 rounded-md border p-2 w-10 text-center">{tempSeats}</span>
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
      <button className="bg-blue-600 hover:bg-blue-700 text-white w-45 h-18 rounded-r-lg py-6 text-[21px] font-bold">
        Find Ticket
      </button>
    </div>
  );
}
