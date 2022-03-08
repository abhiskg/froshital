import Link from "next/link";
import { IconFb, IconInsta, IconTwitter } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 hover:text-white">
      <div className="mx-auto flex w-[89%] max-w-7xl flex-wrap justify-between gap-14 py-10 md:w-9/12">
        <div>
          <div className="mb-2 font-medium">Froshital Logo</div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <h3 className="my-2 font-medium">Follow Us On</h3>
          <div className="flex gap-3">
            <span className="rounded-lg bg-green-400 p-2">
              <IconFb />
            </span>
            <span className="rounded-lg bg-green-400 p-2">
              <IconInsta />
            </span>
            <span className="rounded-lg bg-green-400 p-2">
              <IconTwitter />
            </span>
          </div>
        </div>
        <div>
          <Link href="/about">
            <a>
              <h2 className="mb-2 font-medium">About Us</h2>
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
          <h2 className="mb-2 font-medium">Quick Contact</h2>
          <p className="text-sm">01293423483</p>
        </div>
      </div>
    </footer>
  );
}
