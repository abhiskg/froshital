import Link from "next/link";
import {
  IconFb,
  IconInsta,
  IconLinkdin,
  IconMail,
  IconPhone,
  IconTwitter,
} from "../icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto flex w-11/12 flex-wrap gap-5 py-10 sm:gap-10 md:w-10/12 lg:justify-between 2xl:w-auto 2xl:max-w-7xl">
        <div>
          <div className="mb-2 font-medium text-gray-300 hover:text-white">
            Froshital Logo
          </div>
          <p className="navigation text-sm">
            Top Medical Service Provider in India
          </p>
          <h3 className="my-2 font-medium text-gray-300 hover:text-white">
            Follow Us On
          </h3>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/Froshital-100154242462604"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconFb />
            </a>
            <a
              href="https://www.instagram.com/froshital/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconInsta />
            </a>
            <a
              href="https://www.linkedin.com/company/froshital/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconLinkdin />
            </a>
            <a
              href="https://twitter.com/froshital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconTwitter />
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Company
          </h2>
          <ul>
            <Link href="/about">
              <a>
                <li className="navigation mb-1.5 text-sm">About Us</li>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <li className="navigation mb-1.5 text-sm">Blog</li>
              </a>
            </Link>
            <Link href="/career">
              <a>
                <li className="navigation mb-1.5 text-sm">Career</li>
              </a>
            </Link>
            <Link href="/career">
              <a>
                <li className="navigation text-sm">Patner with us</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Our Services
          </h2>
          <ul className="text-sm ">
            <Link href="/services/hospital-referrals">
              <a>
                <li className="navigation">Hospital Referrals</li>
              </a>
            </Link>
            <Link href="/services/medical-tourism">
              <a>
                <li className="navigation my-1.5">Medical Tourism</li>
              </a>
            </Link>
            <Link href="/services/lab-booking">
              <a>
                <li className="navigation">Lab Booking</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Legal
          </h2>

          <ul>
            <Link href="/terms-and-conditions">
              <a>
                <li className="navigation text-sm">Terms and Conditions</li>
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a>
                <li className="navigation my-1.5 text-sm">Privacy Policy</li>
              </a>
            </Link>
            <Link href="/customer-support-policy">
              <a>
                <li className="navigation text-sm">Customer Support Policy</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Quick Contact
          </h2>
          <a
            href="tel:+918433437690"
            className="navigation flex items-center gap-2 text-sm"
          >
            <span>
              <IconPhone />
            </span>
            <span>+918433437690</span>
          </a>
          <a
            href="mailto:froshital@gmail.com"
            className="navigation mt-2 flex items-center gap-2  text-sm"
          >
            <span>
              <IconMail />
            </span>
            <span>froshital@gmail.com</span>
          </a>
        </div>
      </div>

      {/* <div className="mx-auto mb-2 mt-1 w-5/6 bg-gray-300 p-[0.5px] sm:w-3/5 lg:w-3/4"></div> */}
      <div className=" pb-3 text-center text-gray-300 hover:text-white">
        &copy;2022 Froshital - All Rights Reserved
      </div>
      {/* <div className="pb-1 text-center text-xs font-light text-gray-300 hover:text-white">
        <a
          href="https://portfolio-abhiskg.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Design &amp; Developed By Abhishek
        </a>
      </div> */}
    </footer>
  );
}
