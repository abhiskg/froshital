import Link from "next/link";
import { RoundCheck } from "../icons";
import { cardData, whyUsData1, whyUsData2 } from "../utils/whyUsData";

export default function WhyUs() {
  return (
    <section className="flex flex-col items-center bg-[#1F2937] pb-20 text-[#F3F4F6] lg:-mt-20">
      <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl ">
        Why Choose Us
      </h2>

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
          <dd className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent ">
            100+
          </dd>
          <dt className="text-lg font-medium leading-6 text-white">
            Client Satisfaction
          </dt>
        </div>
        <div className="my-5 flex flex-col sm:my-0">
          <dd className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent ">
            1K+
          </dd>
          <dt className="text-lg font-medium leading-6 text-white">
            Lab Booking
          </dt>
        </div>
        <div className="flex flex-col">
          <dd className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent ">
            100+
          </dd>
          <dt className="text-lg font-medium leading-6 text-white">
            Hospital Referrals
          </dt>
        </div>
      </dl>
      <Link href="/contact">
        <a className="mt-10 transform rounded bg-gradient-to-br from-green-500 to-blue-500 py-3 px-5 text-xl font-semibold tracking-wider text-gray-100 transition-all duration-150 ease-out hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
          CONTACT US
        </a>
      </Link>
    </section>
  );
}
