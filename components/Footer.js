import Link from "next/link";
import { IconFb, IconInsta, IconTwitter } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white ">
      <div className="flex justify-between  py-10 flex-wrap max-w-7xl md:w-9/12 w-[89%] mx-auto">
        <div>
          <div className="font-medium mb-2">Froshital Logo</div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <h3 className="font-medium my-2">Follow Us On</h3>
          <div className="flex gap-3">
            <span className="p-2 bg-green-400 rounded-lg">
              <IconFb />
            </span>
            <span className="p-2 bg-green-400 rounded-lg">
              <IconInsta />
            </span>
            <span className="p-2 bg-green-400 rounded-lg">
              <IconTwitter />
            </span>
          </div>
        </div>
        <div>
          <Link href="/about">
            <a>
              <h2 className="font-medium mb-2">About Us</h2>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <p className="text-sm">Why Us</p>
            </a>
          </Link>
        </div>
        <div>
          <h2 className="mb-2 font-medium">Our Services</h2>
          <ul className="text-sm ">
            <Link href="/services/hospital-referrals">
              <a>
                <li>Hospital Referrals</li>
              </a>
            </Link>
            <Link href="/services/medical-tourism">
              <a>
                <li className="my-1.5">Medical Tourism</li>
              </a>
            </Link>
            <Link href="/services/lab-booking">
              <a>
                <li>Lab Booking</li>
              </a>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="font-medium mb-2">Quick Contact</h2>
          <p className="text-sm">01293423483</p>
        </div>
      </div>
    </footer>
  );
}