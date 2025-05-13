import { useState } from "react";
import { FaSearch, FaCalendarAlt, FaChair } from "react-icons/fa";
import Picker from "./Picker";
import seat from "./assets/seat.svg"
export default function TicketSearchBar() {
  const [search, setSearch] = useState("");
  const [seats, setSeats] = useState(2);

  return (
    <div className="max-w-[1100px] pt-6 mt-8 px-1 sm:px-6 lg:px-8 mx-auto flex mb-50" >
         <div className="border border-gray-600 border-t-2 border-r-0 border-b-2 items-center bg-black text-white shadow-lg max-w-[1100px] justify-between  sm:px-6  flex flex-col lg:flex-row lg:items-center  rounded-l-2xl relative z-10  lg:p-[1px] lg:space-y-0 h-18">
      {/* Search Input */}
      <div className="flex items-center px-4 py-6 border-r border-gray-700 w-full max-w-[340px]  ">
        <FaSearch className="mr-2 text-gray-400" />
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

      {/* Seats */}
      <div className="flex items-center px-4 py-4  w-[318px] gap-5">
        <img src={seat} alt="" />
        <select
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          className="bg-transparent text-white outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num} className="text-black">
              {num} {num === 1 ? "Seat" : "Seats"}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white  w-45 h-18 rounded-r-lg py-6 text-[21px] font-bold">
        Find Ticket
      </button>
    </div>
   
  );
}
