import Link from "next/link";
import { ArrowDown } from "../icons";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center h-16 cursor-pointer">
      {/* Main Nav */}
      <div>Froshital</div>
      <ul className="flex gap-3 relative">
        <li>Home</li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li className=" group">
          <Link href="/services">
            <a className="flex items-center">
              Services
              <ArrowDown />
            </a>
          </Link>

          {/* Service Dropdown */}
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li className="">
              <Link href="#">
                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  One
                </a>
              </Link>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Three is the magic number
              </a>
            </li>
          </ul>
          {/* Service Dropdown Ends */}
        </li>

        <li>
          <Link href="/contact">
            <a>Book an appoinment</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
