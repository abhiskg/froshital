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
    <footer className="bg-primary">
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
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/froshital/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconInsta />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/froshital/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconLinkdin />
              <span className="sr-only">Linkdin</span>
            </a>
            <a
              href="https://twitter.com/froshital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-green-500 to-blue-500 p-2 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white"
            >
              <IconTwitter />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Company
          </h2>
          <ul>
            <li className="mb-px">
              <Link href="/about">
                <a className="navigation  text-sm">About Us</a>
              </Link>
            </li>
            <li className="mb-px">
              <Link href="/blog">
                <a className="navigation  text-sm">Blog</a>
              </Link>
            </li>
            <li className="mb-px">
              <Link href="/career">
                <a className="navigation  text-sm">Career</a>
              </Link>
            </li>
            <li>
              <Link href="/partner-with-us">
                <a className="navigation  text-sm">Partner with us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Our Services
          </h2>
          <ul className="text-sm ">
            <li>
              <Link href="/services/hospital-referrals">
                <a className="navigation">Hospital Referrals</a>
              </Link>
            </li>
            <li className=" my-1.5">
              <Link href="/services/medical-tourism">
                <a className="navigation">Medical Tourism</a>
              </Link>
            </li>
            <li>
              <Link href="/services/lab-booking">
                <a className="navigation">Lab Booking</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-medium text-gray-300 hover:text-white">
            Legal
          </h2>

          <ul>
            <li>
              <Link href="/terms-and-conditions">
                <a className="navigation text-sm">Terms and Conditions</a>
              </Link>
            </li>
            <li className=" my-px">
              <Link href="/privacy-policy">
                <a className="navigation text-sm">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/customer-support-policy">
                <a className="navigation text-sm">Customer Support Policy</a>
              </Link>
            </li>
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
            href="mailto:contact@froshital.com"
            className="navigation mt-2 flex items-center gap-2  text-sm"
          >
            <span>
              <IconMail />
            </span>
            <span>contact@froshital.com</span>
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
