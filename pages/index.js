import Link from "next/link";
import Layout from "../components/Layout";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import {
  FooterLayer,
  IconHospital,
  IconLab,
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
          <div className="mx-auto flex w-[89%] max-w-7xl flex-wrap items-center justify-between md:w-9/12 lg:flex-nowrap ">
            <div className="mt-36 ">
              {/* <h2 className=" mt-5 bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-xl font-bold text-transparent sm:text-xl lg:text-left">
                We Offer,
              </h2> */}
              <h3 className="bg-gradient-to-tr  from-pink-500 to-amber-500 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-left ">
                Medical Tourism
              </h3>
              <div className="mt-5 flex items-center bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-left ">
                <span>
                  <IconHospital />
                </span>
                <h2>Hospital Referrals</h2>
              </div>
              <div className="mt-5 flex items-center bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-left ">
                <span>
                  <IconLab />
                </span>
                <h2>Lab Booking</h2>
              </div>
              <h1 className=" mt-5 bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl lg:text-left">
                We Are The One Stop Solution For All Medical Services In India
              </h1>
              <div className="mt-10 mb-32 flex items-center justify-center gap-3 lg:justify-start">
                <div>
                  <Link href="/contact">
                    <a className="transform rounded  bg-gradient-to-br from-green-500 to-blue-500 py-3 px-5 text-lg font-semibold tracking-wider text-gray-100 transition-all duration-150 ease-out hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
                      BOOK A SERVICE
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/contact">
                    <a className="transform rounded bg-gradient-to-br from-green-500 to-blue-500 py-3 px-5 text-lg font-semibold tracking-wider text-gray-100 transition-all duration-150 ease-out hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
                      CALL US
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <MainSvg />
          </div>
        </div>
        <div className="-mt-1 rotate-180">
          <Layer />
        </div>
        <Service />
        <aside className="fixed bottom-0 left-0 right-0 z-20  flex sm:top-1/2 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:flex-col  ">
          <span className="flex-1 cursor-pointer rounded-t-md border-r bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none sm:rounded-tl sm:border-0 sm:py-5 sm:px-1 ">
            <PhoneCall />
          </span>
          <span className="flex-1 cursor-pointer rounded-t-md border-r bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none sm:border-0 sm:py-5 sm:px-1 ">
            <Mail />
          </span>
          <span className="flex-1 cursor-pointer rounded-t-md bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none  sm:rounded-bl sm:py-5 sm:px-1 ">
            <Whatsapp />
          </span>
        </aside>
      </main>

      <FooterLayer />
      <WhyUs />
    </Layout>
  );
}
