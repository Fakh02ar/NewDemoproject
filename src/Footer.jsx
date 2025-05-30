import React from 'react';
import logo from './assets/ticket-logo.avif'
const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-8 border-t border-gray-800 pt-12">
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Left Column: Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Ticket Kite Logo" className="w-[144px] h-8 mr-2" />
              
            </div>
            <p>Call: 702-483-8056</p>
            <p>Email: <a href="mailto:info@ticketkite.com" className="underline">info@ticketkite.com</a></p>
            <div>
              <p>Our Corporate Offices:</p>
              <p>375 E. Harmon Ave</p>
              <p>Las Vegas, NV 89169</p>
            </div>
          </div>

          {/* Middle Column: Sitemap Links */}
          <div>
            <h3 className="text-[22px] font-semibold mb-4">Sitemaps</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Home</a></li>
              <li><a href="#" className="text-sm">Love Is All You Need – The Ultimate Beatles Tribute</a></li>
              <li><a href="#" className="text-sm">Delirious Comedy Club</a></li>
              <li><a href="#" className="text-sm">Motown Brunch</a></li>
              <li><a href="#" className="text-sm">Cash After Dark</a></li>
              <li><a href="#" className="text-sm">Together We'll Be Okay – The Musical</a></li>
            </ul>
          </div>

          {/* Right Column: Additional Shows */}
          <div>
            <h3 className="text-[22px] font-semibold mb-4">Featured Shows</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Flashback: Tina Turner & Friends</a></li>
              <li><a href="#" className="text-sm">All Motown – Merry Motown</a></li>
              <li><a href="#" className="text-sm">Frankly Frank</a></li>
              <li><a href="#" className="text-sm">All Shook Up</a></li>
              <li><a href="#" className="text-sm">King of Diamonds The Neil Diamond Tribute</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-[22px] font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Orders</a></li>
              <li><a href="#" className="text-sm">Downloads</a></li>
              <li><a href="#" className="text-sm">Account details</a></li>
              <li><a href="#" className="text-sm">Lost password</a></li>
            </ul>
          </div>    
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 pl-5 text-left text-sm">
        <p className='text-[#9CA3Af]'>&copy; 2025 Ticket Kite.com / <a href="#">Terms & Condition /</a><a href="#"> Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
