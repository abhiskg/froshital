import Link from "next/link";
import { Check } from "../icons";
import { hospitalReferrals } from "../utils/servicesData";

export default function Service() {
  return (
    <section className=" relative mb-10 mt-24 sm:mt-16 lg:mt-10 ">
      <h2 className="absolute left-1/2 -top-20 -translate-x-1/2 select-none bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-5xl font-extrabold uppercase tracking-widest text-transparent opacity-40 sm:text-7xl md:text-8xl lg:text-9xl ">
        Services
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-10 ">
        <div className=" z-10 flex w-72 flex-col items-center rounded-md bg-gradient-to-br from-pink-400 to-yellow-400 px-5 py-10 shadow hover:from-green-600 hover:to-green-200 hover:shadow-xl ">
          <h2 className="mb-5 select-none text-center text-lg font-semibold text-white">
            Hospital Referrals
          </h2>
          <ul className="select-none text-sm text-white">
            {hospitalReferrals.map((data) => (
              <li key={data.id} className=" relative mb-3">
                <span className="absolute top-1 -left-5">
                  <Check />
                </span>
                <span className="">{data.facility}</span>
              </li>
            ))}
          </ul>
          <Link href="/services/hospital-referrals">
            <a className="mt-3 rounded border border-white px-3 py-2 font-medium text-white hover:bg-white hover:text-green-600">
              Book Now
            </a>
          </Link>
        </div>

        <div className="z-10 flex w-72 flex-col items-center rounded-md bg-gradient-to-br from-pink-400 to-yellow-400 px-5 py-10 shadow hover:from-blue-500 hover:to-blue-200 hover:shadow-xl ">
          <h2 className="mb-5 select-none text-center text-lg font-semibold text-white">
            Medical Tourism
          </h2>
          <ul className="select-none text-sm text-white">
            {hospitalReferrals.map((data) => (
              <li key={data.id} className=" relative mb-3">
                <span className="absolute top-1 -left-5">
                  <Check />
                </span>
                <span className="">{data.facility}</span>
              </li>
            ))}
          </ul>
          <Link href="/services/hospital-referrals">
            <a className="mt-3 rounded border border-white px-3 py-2 font-medium text-white hover:bg-white hover:text-blue-500">
              Book Now
            </a>
          </Link>
        </div>

        <div className="z-10 flex w-72 flex-col items-center rounded-md bg-gradient-to-br from-pink-400 to-yellow-400 px-5 py-10 shadow hover:from-pink-500 hover:to-pink-200 hover:shadow-xl ">
          <h2 className="mb-5 select-none text-center text-lg font-semibold text-white">
            Lab Booking
          </h2>
          <ul className="select-none text-sm text-white">
            {hospitalReferrals.map((data) => (
              <li key={data.id} className=" relative mb-3">
                <span className="absolute top-1 -left-5">
                  <Check />
                </span>
                <span className="">{data.facility}</span>
              </li>
            ))}
          </ul>
          <Link href="/services/hospital-referrals">
            <a className="mt-3 rounded border border-white px-3 py-2 font-medium text-white hover:bg-white hover:text-pink-500">
              Book Now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
