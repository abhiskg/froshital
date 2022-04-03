import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  hospitalReferrals,
  labBooking,
  medicalTourism,
} from "@/utils/servicesData";
import Layout from "@/components/Layout";
import {
  Check,
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

// const DynamicTestimonial = dynamic(() => import("@/components/Testimonial"));

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Medical Service Provider In India - Froshital</title>
        <meta
          name="description"
          content="Froshital is a Medical Service in India. We provide Hospital Referrals, Lab Booking, Medical Tourism, and more. "
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

      {/* Hero Section */}
      <section className="bg-gray-800 ">
        <div className="mx-auto flex w-11/12 flex-wrap items-center justify-between py-16 sm:py-28 md:w-10/12 lg:flex-nowrap 2xl:w-auto  2xl:max-w-7xl ">
          <div className="">
            <div className="flex w-64 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500">
              <span className=" rounded-full bg-gradient-to-br from-pink-500 to-amber-500 py-1 px-2 text-sm text-white">
                Save 10%
              </span>
              <span className=" p-1 text-sm ">For first booking only</span>
            </div>
            <div className="mt-5 flex items-center ">
              <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                <IconMedical />
              </span>
              <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-left lg:text-4xl ">
                Medical Tourism
              </h2>
            </div>
            <div className="mt-5 flex items-center ">
              <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                <IconHospital />
              </span>
              <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-left lg:text-4xl ">
                Hospital Referrals
              </h2>
            </div>
            <div className="mt-5 flex items-center ">
              <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1 ">
                <IconLab />
              </span>
              <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-left lg:text-4xl ">
                Lab Booking
              </h2>
            </div>
            <h1 className=" mt-5 max-w-2xl bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              We Are The One Stop Solution For All Medical Services In India
            </h1>
            <div className="mt-10 flex items-center gap-3 ">
              <div>
                <Link href="/contact">
                  <a className="flex items-center gap-1 rounded bg-gradient-to-br from-green-500 to-blue-500 py-2.5 px-4  hover:from-green-600 hover:to-blue-600 ">
                    <span className="rotate-[20deg] text-gray-100">
                      <IconPhone />
                    </span>
                    <span className="font-semibold tracking-wide text-gray-100 hover:text-white lg:text-lg">
                      CALL US
                    </span>
                  </a>
                </Link>
              </div>
              <div className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent">
                OR
              </div>
              <Link href="/contact">
                <a>
                  <div className="rounded bg-gradient-to-br from-green-500 to-blue-500 py-2.5 px-4 font-semibold tracking-wide text-gray-100  hover:from-green-600 hover:to-blue-600 hover:text-white lg:text-lg">
                    BOOK A SERVICE
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <MainSvg />
        </div>
      </section>

      <div className="-mt-1 rotate-180">
        <Layer />
      </div>

      {/* Service Section */}
      <section className=" relative mb-10 mt-24 sm:mt-16 lg:mt-10 ">
        <h2 className="absolute left-1/2 -top-20 -translate-x-1/2 select-none bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-5xl font-extrabold uppercase tracking-widest text-transparent opacity-40 sm:text-7xl md:text-8xl lg:text-9xl ">
          Services
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-10 ">
          <div className=" z-10 flex w-72 flex-col items-center rounded-md bg-gradient-to-br from-pink-400 to-yellow-400 px-5 py-10 shadow hover:from-green-600 hover:to-green-200 hover:shadow-xl ">
            <h3 className="mb-5 select-none text-center text-lg font-semibold text-white">
              Hospital Referrals
            </h3>
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
            <h3 className="mb-5 select-none text-center text-lg font-semibold text-white">
              Medical Tourism
            </h3>
            <ul className="select-none text-sm text-white">
              {medicalTourism.map((data) => (
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
            <h3 className="mb-5 select-none text-center text-lg font-semibold text-white">
              Lab Booking
            </h3>
            <ul className="select-none text-sm text-white">
              {labBooking.map((data) => (
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

      <FooterLayer />

      {/* Why Choose Us Section */}
      <section className="flex flex-col items-center bg-[#1F2937] pb-20 text-[#F3F4F6] lg:-mt-20">
        <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl ">
          Why Choose Us
        </h2>
        <dl className="mt-10 text-center sm:mx-auto sm:flex sm:justify-center sm:gap-8 ">
          <div className="flex flex-col">
            <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-5xl font-bold text-transparent ">
              100+
            </dd>
            <dt className="text-lg font-medium leading-6 text-white">
              Client Satisfaction
            </dt>
          </div>
          <div className="my-5 flex flex-col sm:my-0">
            <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-5xl font-bold text-transparent ">
              1K+
            </dd>
            <dt className="text-lg font-medium leading-6 text-white">
              Medical Tourism
            </dt>
          </div>
          <div className="flex flex-col">
            <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-5xl font-bold text-transparent ">
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

      {/* <DynamicTestimonial /> */}

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
    </Layout>
  );
}
