import Link from "next/link";
import { RoundCheck } from "../icons";
import { cardData, whyUsData1, whyUsData2 } from "../utils/whyUsData";

export default function WhyUs() {
  return (
    <section className="-mt-20 pb-20 flex flex-col items-center text-[#F3F4F6] bg-[#1F2937]">
      <h2 className=" text-3xl sm:text-4xl font-bold  ">Why Choose Us</h2>

      {/* <div className="flex gap-10 my-8">
        <div className="flex flex-col gap-2">
          {whyUsData1.map((data) => (
            <div key={data.id} className="flex sm:items-center">
              <span className="mr-1">
                <RoundCheck />
              </span>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {whyUsData2.map((data) => (
            <div key={data.id} className="flex items-center">
              <span className="mr-1">
                <RoundCheck />
              </span>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="flex justify-center ">
        {cardData.map((data) => (
          <div
            key={data.id}
            className="bg-green-400 flex flex-col sm:items-center  px-3 py-5 shadow-lg "
          >
            <div className="sm:text-3xl text-xl">{data.number}</div>
            <div className="sm:text-xl text-base font-medium  ">
              {data.title}
            </div>
          </div>
        ))}
      </div> */}
      <dl className="mt-10 text-center sm:mx-auto sm:flex sm:justify-center sm:gap-8 ">
        <div className="flex flex-col">
          <dd className="text-5xl font-bold">100+</dd>
          <dt className="text-lg font-medium text-white leading-6">
            Client Satisfaction
          </dt>
        </div>
        <div className="flex flex-col">
          <dd className="text-5xl font-bold">1K+</dd>
          <dt className="text-lg font-medium text-white leading-6">
            Lab Booking
          </dt>
        </div>
        <div className="flex flex-col">
          <dd className="text-5xl font-bold">100+</dd>
          <dt className="text-lg font-medium text-white leading-6">
            Hospital Referrals
          </dt>
        </div>
      </dl>
      <Link href="/contact">
        <a className="py-3 px-5 mt-7 rounded bg-gradient-to-br from-green-500 to-blue-500 text-xl text-gray-100 font-semibold tracking-wider transition-all duration-150 ease-out transform hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
          CONTACT US
        </a>
      </Link>
    </section>
  );
}
