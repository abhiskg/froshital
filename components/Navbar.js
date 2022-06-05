import { useState } from "react";
import Link from "next/link";
import { specialitiesData } from "@/utils/specialitiesData";
import { ArrowDown, IconLogo } from "../icons";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [serviceState, setServiceState] = useState(false);
  const [specialitiesState, setSpecialitiesState] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#00AA54] ">
      <div className="relative mx-auto flex h-full w-11/12 items-center justify-between lg:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <Link href="/">
          <a>
            <IconLogo />
          </a>
        </Link>
        <nav>
          <ul className="hidden items-center gap-4 md:flex">
            <li className="navigation cursor-pointer">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="navigation cursor-pointer ">
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li className="group">
              <div className="navigation flex cursor-pointer items-center py-4">
                Services
                <ArrowDown />
              </div>
              {/* Service Dropdown */}
              <ul className="absolute top-14 z-10 hidden rounded bg-white text-gray-800 shadow group-hover:block">
                <li>
                  <Link href="/services/hospital-referrals">
                    <a className="block rounded-t py-2 px-4 hover:text-secondary">
                      Hospital Referrals
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/medical-tourism">
                    <a className="block whitespace-nowrap py-2 px-4 hover:text-secondary">
                      Medical Tourism
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/lab-booking">
                    <a className="block whitespace-nowrap rounded-b py-2 px-4 hover:text-secondary">
                      Lab Booking
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group">
              <div className="navigation flex cursor-pointer items-center py-4">
                Specialities
                <ArrowDown />
              </div>
              {/* Specialities Dropdown */}
              <ul className="absolute top-14 left-0 right-0 z-10 hidden rounded bg-white px-4 pb-4 pt-2 text-gray-800 shadow group-hover:block">
                <div className="grid grid-cols-4 gap-x-8 ">
                  {specialitiesData.map((data) => (
                    <li key={data.id} className="">
                      <Link href={`/specialities/${data.slug}`}>
                        <a className="block rounded-t border-b border-gray-400 py-2 hover:text-secondary">
                          {data.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </li>
            {/* <li className=" group relative cursor-pointer rounded px-3  py-2 text-gray-400 hover:text-white">
              <Link href="/contact">
                <a>Book an Service</a>
              </Link>
              <span className="absolute top-0 left-0 h-1 w-full -translate-y-3 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition duration-200 ease-linear group-hover:translate-y-0 group-hover:opacity-100  "></span>
              <span className="absolute bottom-0 left-0 h-1 w-full translate-y-3 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition duration-200 ease-linear group-hover:translate-y-0 group-hover:opacity-100 "></span>
            </li> */}
            <li className="cursor-pointer text-gray-100 hover:text-white ">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="ml-5 rounded bg-secondary py-2 px-3 text-white transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white">
                  Book a Service
                </a>
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
            className={`h-[0.1rem] rounded-lg bg-gray-100 transition-transform  duration-100 ease-in-out ${
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
      </div>

      {/* Mobile View */}
      <nav
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } no-scrollbar fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto bg-gray-900 transition-transform duration-200 ease-in-out md:hidden `}
      >
        <ul className="mx-20 mt-36 mb-10 flex flex-col gap-7 ">
          <li onClick={() => setMenu(false)}>
            <Link href="/">
              <a className="text-gray-400 hover:text-white">Home</a>
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
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

          {/* Mobile Service Dropdown */}
          <ul className={` ${serviceState ? "block" : "hidden"}`}>
            <li>
              <Link href="/services/hospital-referrals">
                <a
                  onClick={() => setMenu(false)}
                  className="whitespace-no-wrap block rounded-t py-2 px-4 text-gray-400 hover:text-white"
                >
                  Hospital Referrals
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services/medical-tourism">
                <a
                  onClick={() => setMenu(false)}
                  className=" block py-2 px-4 text-gray-400 hover:text-white"
                >
                  Medical Tourism
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services/lab-booking">
                <a
                  onClick={() => setMenu(false)}
                  className="block rounded-b py-2 px-4 text-gray-400 hover:text-white"
                >
                  Lab Booking
                </a>
              </Link>
            </li>
          </ul>

          <li
            onClick={() => setSpecialitiesState(!specialitiesState)}
            className="flex cursor-pointer items-center justify-between text-gray-400 hover:text-white"
          >
            Specialities
            <span
              className={`${
                specialitiesState &&
                "rotate-180 transition-transform duration-200"
              }`}
            >
              <ArrowDown />
            </span>
          </li>

          {/*Mobile Specialities Dropdown */}
          <ul className={`${specialitiesState ? "block " : "hidden"}`}>
            {specialitiesData.map((data) => (
              <li key={data.id} className="">
                <Link href={`/specialities/${data.slug}`}>
                  <a
                    onClick={() => setMenu(false)}
                    className="block py-2 px-4 text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <li onClick={() => setMenu(false)}>
            <Link href="/blog">
              <a className="text-gray-400 hover:text-white">Blog</a>
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link href="/contact">
              <a className="text-gray-400 hover:text-white">Book a Service</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
