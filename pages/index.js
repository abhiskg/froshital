import Link from "next/link";
import Layout from "@/components/Layout";
import Service from "@/components/Service";
import WhyUs from "@/components/WhyUs";
import {
  FooterLayer,
  IconHospital,
  IconLab,
  IconMedical,
  IconPhone,
  Layer,
  Mail,
  MainSvg,
  PhoneCall,
  Whatsapp,
} from "../icons";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Froshital - Medical Services In India</title>
        <meta
          name="description"
          content="Froshital is a Medical Service in India"
        />
        <meta property="og:url" content="https://froshital.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Froshital - Medical Services In India"
        />
        <meta
          property="og:description"
          content="Froshital is a Medical Service in India"
        />
      </Head>
      <div className="">
        <div className="bg-gray-800 ">
          <div className="mx-auto flex w-11/12 flex-wrap items-center justify-between py-28 md:w-10/12 lg:flex-nowrap 2xl:w-auto  2xl:max-w-7xl ">
            <div className="">
              <div className="flex w-64 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500">
                <span className=" rounded-full bg-gradient-to-br from-pink-500 to-amber-500 py-1 px-2 text-sm text-white">
                  Save 10%
                </span>
                <span className=" p-1 text-sm ">For first booking only</span>
              </div>
              <div className="mt-5 flex items-center bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-left ">
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                  <IconMedical />
                </span>
                <h2>Medical Tourism</h2>
              </div>
              <div className="mt-5 flex items-center bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-left ">
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                  <IconHospital />
                </span>
                <h2>Hospital Referrals</h2>
              </div>
              <div className="mt-5 flex items-center bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-left ">
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                  <IconLab />
                </span>
                <h2>Lab Booking</h2>
              </div>
              <h1 className=" mt-5 bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl lg:text-left">
                We Are The One Stop Solution For All Medical Services In India
              </h1>
              <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
                <div>
                  <Link href="/contact">
                    <a className="flex transform items-center gap-2 rounded bg-gradient-to-br from-green-500 to-blue-500 py-2.5 px-5 text-lg font-semibold tracking-wider text-gray-100 transition-all duration-150 ease-out hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
                      <span className="rotate-12">
                        <IconPhone />
                      </span>
                      <span>CALL US</span>
                    </a>
                  </Link>
                </div>
                <div className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent">
                  OR
                </div>
                <div>
                  <Link href="/contact">
                    <a className="transform rounded  bg-gradient-to-br from-green-500 to-blue-500 py-3 px-5 text-lg font-semibold tracking-wider text-gray-100 transition-all duration-150 ease-out hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white">
                      BOOK A SERVICE
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <MainSvg />
            </div>
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
      </div>

      <FooterLayer />
      <WhyUs />
    </Layout>
  );
}
