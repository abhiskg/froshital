import Link from "next/link";
import { useState } from "react";
import { ArrowDown } from "../icons";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="h-16 bg-[#1F2937] text-white">
      <div className=" flex justify-between items-center h-full max-w-7xl md:w-9/12 w-[89%] mx-auto ">
        {/* Main Nav */}
        <Link href="/">
          <a>
            <div className=" cursor-pointer">Froshital</div>
          </a>
        </Link>
        <ul className="hidden sm:flex items-center gap-4 relative">
          <Link href="/">
            <a>
              <li className=" cursor-pointer text-gray-400">Home</li>
            </a>
          </Link>
          <li className=" cursor-pointer text-gray-400">
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li className=" group">
            <div className="flex items-center cursor-pointer text-gray-400">
              Services
              <ArrowDown />
            </div>

            {/* Service Dropdown */}
            <ul className="absolute hidden text-gray-400 pt-1 group-hover:block">
              <li className="">
                <Link href="/services/hospital-referrals">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Hospital Referrals
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/services/medical-tourism">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Medical Tourism
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/services/lab-booking">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Lab Booking
                  </a>
                </Link>
              </li>
            </ul>
            {/* Service Dropdown Ends */}
          </li>
          <li className=" relative cursor-pointer group text-gray-400 hover:text-white  rounded px-3 py-2">
            <Link href="/contact">
              <a>Book an Service</a>
            </Link>
            <span className="absolute h-1 top-0 left-0 bg-gradient-to-br from-green-500 to-blue-500 w-full -translate-y-3 group-hover:translate-y-0 transition duration-200 ease-linear opacity-0 group-hover:opacity-100  "></span>
            <span className="absolute h-1 bottom-0 left-0 bg-gradient-to-br from-green-500 to-blue-500 w-full translate-y-3 group-hover:translate-y-0 transition duration-200 ease-linear opacity-0 group-hover:opacity-100 "></span>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="sm:hidden z-30 w-6 h-5 flex flex-col justify-between items-end cursor-pointer "
        >
          <span
            className={`h-[0.1rem]  rounded-lg transition-transform bg-black duration-100 ease-in-out ${
              menu ? "rotate-45 translate-y-1 w-6" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] bg-black rounded-lg  ${
              menu ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] bg-black rounded-lg transition-transform duration-100 ease-in-out ${
              menu ? "-rotate-45 -translate-y-3.5 w-6" : "w-full"
            }`}
          />
        </div>
        {/* Hamburger Menu Ends */}
      </div>
      {/* Mobile View */}
      <div
        className={`${
          menu ? "translate-x-0 " : "translate-x-full"
        } sm:hidden drop-shadow-md top-0  w-full h-screen fixed bg-slate-600 right-0 z-20 transition-transform duration-200 ease-in-out `}
      >
        <ul className="flex flex-col gap-7 mt-36 mx-20">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="flex items-center cursor-pointer justify-between">
                Services
                <ArrowDown />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Book an appoinment</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
