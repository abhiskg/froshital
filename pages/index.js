import Link from "next/link";
import Layout from "../components/Layout";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import {
  FooterLayer,
  Layer,
  Mail,
  MainSvg,
  PhoneCall,
  Whatsapp,
} from "../icons";

export default function Home() {
  return (
    <Layout>
      <main className="">
        <div className="bg-gray-800 ">
          <div className="flex justify-between max-w-7xl md:w-9/12 w-[89%] mx-auto items-center flex-wrap lg:flex-nowrap ">
            <div className="mt-36 ">
              <h1 className="text-4xl font-bold bg-gradient-to-tr from-pink-500 to-amber-500 text-transparent bg-clip-text text-center lg:text-left ">
                We Are The One Stop Solution For Medical Services In India
              </h1>
              <h2 className=" text-3xl sm:text-2xl mt-5 font-bold bg-gradient-to-br from-emerald-500 to-blue-500 text-transparent bg-clip-text text-center lg:text-left">
                We Offer Services For Medical Tourism, Hospital Referrals And
                Lab Bokking
              </h2>
              <h3 className=" text-3xl sm:text-2xl mt-5 font-bold bg-gradient-to-br from-emerald-500 to-blue-500 text-transparent bg-clip-text text-center lg:text-left">
                Save You Extra Money With Our Hasselfree Services{" "}
              </h3>
              <div className="mt-10 flex gap-3 justify-center lg:justify-start items-center mb-32">
                <div>
                  <Link href="/contact">
                    <a className="py-3 px-5  rounded bg-gradient-to-br from-green-500 to-blue-500 text-lg text-gray-100 font-semibold tracking-wider transition-all duration-150 ease-out transform hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
                      BOOK A SERVICE
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/contact">
                    <a className="py-3 px-5 rounded bg-gradient-to-br from-green-500 to-blue-500 text-lg text-gray-100 font-semibold tracking-wider transition-all duration-150 ease-out transform hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
                      CALL US
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <MainSvg />
          </div>
        </div>
        <div className="rotate-180 -mt-1">
          <Layer />
        </div>
        <Service />
        <aside className="fixed z-20 sm:top-1/2 sm:-translate-y-1/2 bottom-0  sm:bottom-auto left-0 sm:left-auto right-0 flex sm:flex-col  ">
          <span className="bg-gradient-to-br from-green-500 to-green-300 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none sm:rounded-tl flex-1 border-r sm:border-0 cursor-pointer shadow-md hover:text-white ">
            <PhoneCall />
          </span>
          <span className="bg-gradient-to-br from-green-500 to-green-300 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none flex-1 border-r sm:border-0 cursor-pointer shadow-md hover:text-white ">
            <Mail />
          </span>
          <span className="bg-gradient-to-br from-green-500 to-green-300 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none sm:rounded-bl flex-1  cursor-pointer shadow-md hover:text-white ">
            <Whatsapp />
          </span>
        </aside>
      </main>

      <FooterLayer />
      <WhyUs />
    </Layout>
  );
}
