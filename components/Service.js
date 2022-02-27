import Link from "next/link";
import { Check } from "../icons";
import { hospitalReferrals } from "../utils/servicesData";

export default function Service() {
  return (
    <section className=" relative my-5">
      <h2 className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-to-br from-pink-400 to-yellow-400 opacity-30 font-extrabold uppercase tracking-widest absolute -z-10 left-1/2 -translate-x-1/2 -top-20 select-none ">
        Services
      </h2>
      <div className="flex justify-center gap-10 flex-wrap mt-8">
        <div className=" px-5 py-10 w-72 rounded-md shadow flex flex-col items-center bg-gradient-to-br from-pink-400 to-yellow-400 hover:from-green-600 hover:to-green-200 hover:shadow-xl ">
          <h2 className="text-center mb-5 text-lg font-semibold text-white select-none">
            Hospital Referrals
          </h2>
          <ul className="text-white text-sm select-none">
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
            <a className="border-white border text-white hover:bg-white hover:text-green-600 font-medium rounded px-3 py-2 mt-3">
              Book Now
            </a>
          </Link>
        </div>

        <div className=" px-5 py-10 w-72 rounded-md shadow flex flex-col items-center bg-gradient-to-br from-pink-400 to-yellow-400 hover:from-blue-500 hover:to-blue-200 hover:shadow-xl ">
          <h2 className="text-center mb-5 text-lg font-semibold text-white select-none">
            Medical Tourism
          </h2>
          <ul className="text-white text-sm select-none">
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
            <a className="border-white border text-white hover:bg-white hover:text-blue-500 font-medium rounded px-3 py-2 mt-3">
              Book Now
            </a>
          </Link>
        </div>

        <div className=" px-5 py-10 w-72 rounded-md shadow flex flex-col items-center bg-gradient-to-br from-pink-400 to-yellow-400 hover:from-pink-500 hover:to-pink-200 hover:shadow-xl ">
          <h2 className="text-center mb-5 text-lg font-semibold text-white select-none">
            Lab Booking
          </h2>
          <ul className="text-white text-sm select-none">
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
            <a className="border-white border text-white hover:bg-white hover:text-pink-500 font-medium rounded px-3 py-2 mt-3">
              Book Now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
