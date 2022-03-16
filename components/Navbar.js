import Link from "next/link";
import { useState } from "react";
import { ArrowDown } from "../icons";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [serviceState, setServiceState] = useState(false);
  return (
    <header className="sticky top-0 z-40 h-16 bg-gray-800 ">
      <div className="mx-auto flex h-full w-11/12 items-center justify-between lg:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        {/* Main Nav */}
        <Link href="/">
          <a>
            <span className="text-white">Froshital</span>
          </a>
        </Link>
        <nav>
          <ul className="relative hidden items-center gap-4 md:flex">
            <Link href="/">
              <a>
                <li className=" cursor-pointer text-gray-400 hover:text-white">
                  Home
                </li>
              </a>
            </Link>
            <li className=" cursor-pointer text-gray-400 hover:text-white ">
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li className=" group">
              <div className="flex cursor-pointer items-center text-gray-400 hover:text-white">
                Services
                <ArrowDown />
              </div>
              {/* Service Dropdown */}
              <ul className="absolute top-10 z-10 hidden rounded bg-[#141d2b] pt-1 text-gray-400 group-hover:block">
                <li className="">
                  <Link href="/services/hospital-referrals">
                    <a className="whitespace-no-wrap block rounded-t py-2 px-4 hover:text-white">
                      Hospital Referrals
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/services/medical-tourism">
                    <a className="  whitespace-no-wrap block py-2 px-4 hover:text-white">
                      Medical Tourism
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/services/lab-booking">
                    <a className="whitespace-no-wrap   block rounded-b py-2 px-4 hover:text-white">
                      Lab Booking
                    </a>
                  </Link>
                </li>
              </ul>
              {/* Service Dropdown Ends */}
            </li>
            <li className=" group">
              <div className="flex cursor-pointer items-center text-gray-400 hover:text-white">
                Specialities
                <ArrowDown />
              </div>
              {/* Specialities Dropdown */}
              <ul className="absolute left-0 right-0 z-10 hidden  rounded bg-[#141d2b] pt-1 text-gray-400 group-hover:block">
                <div className="grid-cols-3">
                  <li className="">
                    <Link href="/specialities/id">
                      <a className="whitespace-no-wrap block rounded-t py-2 px-4 hover:text-white">
                        Hospital Referrals
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/services/medical-tourism">
                      <a className="whitespace-no-wrap block py-2 px-4 hover:text-white">
                        Medical Tourism
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/services/lab-booking">
                      <a className="whitespace-no-wrap   block rounded-b py-2 px-4 hover:text-white">
                        Lab Booking
                      </a>
                    </Link>
                  </li>
                </div>
              </ul>
              {/* Specialities Dropdown Ends */}
            </li>
            {/* <li className=" group relative cursor-pointer rounded px-3  py-2 text-gray-400 hover:text-white">
              <Link href="/contact">
                <a>Book an Service</a>
              </Link>
              <span className="absolute top-0 left-0 h-1 w-full -translate-y-3 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition duration-200 ease-linear group-hover:translate-y-0 group-hover:opacity-100  "></span>
              <span className="absolute bottom-0 left-0 h-1 w-full translate-y-3 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition duration-200 ease-linear group-hover:translate-y-0 group-hover:opacity-100 "></span>
            </li> */}
            <li className=" cursor-pointer text-gray-400 hover:text-white ">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className=" ml-5 rounded bg-gradient-to-br from-green-500 to-blue-500 py-2 px-3 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white">
              <Link href="/contact">
                <a>Book an Service</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="z-50 flex h-5 w-6 cursor-pointer flex-col items-end justify-between md:hidden "
        >
          <span
            className={`h-[0.1rem] rounded-lg  bg-gray-100 transition-transform  duration-100 ease-in-out ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-gray-100  ${
              menu ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-gray-100 transition-transform duration-100 ease-in-out ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-full"
            }`}
          />
        </div>
        {/* Hamburger Menu Ends */}
      </div>

      {/* Mobile View */}
      <div
        className={`${
          menu ? "translate-x-0 " : "translate-x-full"
        } fixed top-0 right-0 z-40  h-screen w-full bg-gray-800 drop-shadow-md transition-transform duration-200 ease-in-out md:hidden `}
      >
        <ul className="mx-20 mt-36 flex flex-col gap-7">
          <li>
            <Link href="/">
              <a className="text-gray-400 hover:text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-gray-400 hover:text-white">About Us</a>
            </Link>
          </li>
          <li
            onClick={() => setServiceState(!serviceState)}
            className="flex cursor-pointer items-center justify-between text-gray-400 hover:text-white"
          >
            Services
            <span
              className={`${
                serviceState && "rotate-180 transition-transform duration-200"
              }`}
            >
              <ArrowDown />
            </span>
          </li>

          {/* Service Dropdown */}
          <ul className={` ${serviceState ? "block" : "hidden"}`}>
            <li className="">
              <Link href="/services/hospital-referrals">
                <a className="whitespace-no-wrap block rounded-t py-2 px-4 text-gray-400 hover:text-white">
                  Hospital Referrals
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/services/medical-tourism">
                <a className="whitespace-no-wrap  block py-2 px-4 text-gray-400 hover:text-white">
                  Medical Tourism
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/services/lab-booking">
                <a className="whitespace-no-wrap block   rounded-b py-2 px-4 text-gray-400 hover:text-white">
                  Lab Booking
                </a>
              </Link>
            </li>
          </ul>
          {/* Service Dropdown Ends */}

          <li>
            <Link href="/contact">
              <a className="text-gray-400 hover:text-white">
                Book an appoinment
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
