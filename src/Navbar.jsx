"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Logo from "../src/assets/ticket-logo.avif"
import Faq from "../src/assets/faq.svg"
import UserIcon from "../src/assets/user.svg"
import img1 from "../src/assets/img1.svg"
import bars from "../src/assets/bars.svg"
import close from "../src/assets/cross.svg"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("") // "shows", "mustsee", "favorites", "venues"
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState("") // "shows", "mustsee", "venues"

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleDropdownToggle = (menu) => {
    setOpenMenu(prev => (prev === menu ? "" : menu))
  }

  const handleMobileToggle = (menu) => {
    setMobileMenu(prev => (prev === menu ? "" : menu))
  }

  return (
    <header className="bg-[#141414] text-white text-sm  shadow-xs">
      {/* Top Support Bar */}
      <div className="pt-4 xl:pt-[1.5rem] pb-2">
        <div className="xl:max-w-[1360px] lg:max-w-[1000px] mx-auto md:px-4 lg:px-3 xl:px-4 flex flex-wrap items-center gap-[0.75rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone h-5 w-5 text-[#C5C5C5]"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>
            Need help? Call us at <span>702-483-8056</span>
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`xl:max-w-[1360px] lg:max-w-[1000px] mx-auto px-3 mr-3 flex items-center border-gray-900 border ${isOpen ? "" : "border-b-[#FFFFFF26]"} pb-8 lg:gap-0 md:justify-between md:pr-6 lg:pr-0 mt-8`}>
        {/* Logo & Desktop Nav */}
        <div className="flex gap-10">
          <div className="flex items-center">
            <img src={Logo || "/placeholder.svg"} alt="Logo" className="h-auto w-[140px]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden max-w-[950px] lg:flex lg:flex-wrap gap-2 tracking-widest items-center relative ml-5">
            {[ 
              { key: "shows", label: "SHOWS", items: ["Latest Shows", "Shows Tonight", "Week Days", "Months"] },
              { key: "mustsee", label: "Must See Shows", items: ["Must See Picks", "Tonight's Highlights", "VIP Access", "Top Rated"] },
              { key: "favorites", label: "Vegas Favorites", items: ["One-time Show", "Best of Las Vegas", "Our Signature Shows"] },
              { key: "venues", label: "VANUES", items: ["Hot Deals", "Limited Time", "Bundle Offers", "Exclusive Picks"] }
            ].map(({ key, label, items }) => (
              <DropdownMenu key={key} open={openMenu === key} onOpenChange={() => handleDropdownToggle(key)}>
                <div onMouseEnter={() => setOpenMenu(key)} onMouseLeave={() => setOpenMenu("")}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="inline-flex items-center text-[#C5C5C5] bg-transparent border-0 hover:text-blue-500 hover:bg-transparent px-1 cursor-pointer text-[15px] gap-0">
                      {label}
                      <img src={img1} alt="" className="w-[18px] h-5 ml-1 filter invert brightness-[0.9] sepia hue-rotate-[330deg] saturate-[2.2]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-black text-white mt-2 border-0 rounded-none">
                    <DropdownMenuGroup>
                      {items.map((item, idx) => (
                        <DropdownMenuItem key={idx} className="justify-center text-center hover:bg-gray-800 cursor-pointer bg-transparent">
                          {item}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>
            ))}

            <span className="text-[#c5c5c5] text-[15px] cursor-pointer font-[500]">BEST DEALS</span>

            {[
              "FUN THINGS IN VEGAS",
              "TOURS",
              "ATTRACTIONS",
              "HOTELS",
              "TIPS TRICKS",
              "FAQ'S",
              "CONTACT US"
            ].map((item, idx) => (
              <span key={idx} className="text-[#C5C5C5] hover:text-blue-500 cursor-pointer text-[15px] px-1 tracking-widest">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-8">
          <img src={Faq || "/placeholder.svg"} alt="FAQ" className="w-[25px]" />
          <img src={UserIcon || "/placeholder.svg"} alt="User" className="w-[25px]" />
          <img
            src={isOpen ? close : bars}
            onClick={handleToggle}
            className="w-[18px] h-[24px] filter invert opacity-70 cursor-pointer md:block lg:hidden"
            alt="Toggle menu"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="w-full bg-[#141414] text-[#C5C5C5] px-4 py-6 flex flex-col gap-4 lg:hidden transition-all duration-300">
          {[ 
            { key: "shows", label: "SHOWS", items: ["Latest Shows", "Shows Tonight", "Week Days", "Months"] },
            { key: "mustsee", label: "MUST SEE SHOWS", items: ["Must See Picks", "Tonight's Highlights", "VIP Access", "Top Rated"] },
            { key: "venues", label: "VANUES", items: ["Hot Deals", "Limited Time", "Bundle Offers", "Exclusive Picks"] }
          ].map(({ key, label, items }) => (
            <div key={key}>
              <div onClick={() => handleMobileToggle(key)} className="flex justify-between items-center cursor-pointer hover:text-blue-400 text-sm font-[500]">
                <span>{label}</span>
                <img
                  src={img1}
                  alt=""
                  className={`w-[18px] h-5 ml-1 filter invert brightness-[0.9] sepia hue-rotate-[330deg] saturate-[2.2] transition-all duration-300 ${mobileMenu === key ? "rotate-180" : ""}`}
                />
              </div>
              {mobileMenu === key && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-[14px] text-gray-300">
                  {items.map((item, idx) => (
                    <span key={idx} className="hover:text-white cursor-pointer font-[500]">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {[
            "FUN THINGS IN VEGAS",
            "TOURS",
            "ATTRACTIONS",
            "HOTELS",
            "TIPS TRICKS",
            "FAQ'S",
            "CONTACT US"
          ].map((item, idx) => (
            <span key={idx} className="cursor-pointer hover:text-blue-400 text-sm font-[500]">
              {item}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
