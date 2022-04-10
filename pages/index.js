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
  PhoneCall,
  Whatsapp,
} from "../icons";
import Image from "next/image";
import { medicalTourismFaq } from "@/utils/faqData";

const DynamicTestimonial = dynamic(() => import("@/components/Testimonial"));
const DynamicAccordion = dynamic(() => import("@/components/Accordion"));

export default function Home() {
  return (
    <Layout>
      {/* <Head>
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
      </Head> */}

      {/* Hero Section */}
      <section className="bg-gray-900">
        <div className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl ">
          <div className="flex flex-wrap items-center justify-between gap-7 pb-6 pt-8 sm:pb-16 lg:flex-nowrap lg:pt-20 xl:pt-8">
            <div>
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
                <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-4xl lg:text-left ">
                  Medical Tourism
                </h2>
              </div>
              <div className="mt-1 flex items-center ">
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                  <IconHospital />
                </span>
                <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-4xl lg:text-left ">
                  Hospital Referrals
                </h2>
              </div>
              <div className="mt-1 flex items-center ">
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1 ">
                  <IconLab />
                </span>
                <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-4xl lg:text-left ">
                  Lab Booking
                </h2>
              </div>
              <h1 className=" mt-5 max-w-2xl bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                We Are The One Stop Solution For All Medical Services In India
              </h1>
              <div className="mt-10 flex items-center gap-3 ">
                <div>
                  <a
                    href="tel:+918433437690"
                    className="group flex items-center gap-1 rounded border border-green-300 py-2.5 px-4 hover:border-green-900 hover:bg-gradient-to-br hover:from-green-600 hover:to-blue-600"
                  >
                    <span className="rotate-[20deg] text-gray-100 group-hover:text-white">
                      <IconPhone />
                    </span>
                    <span className="font-semibold tracking-wide text-gray-100 group-hover:text-white lg:text-lg">
                      CALL US
                    </span>
                  </a>
                </div>
                <div className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent">
                  OR
                </div>
                <Link href="/contact">
                  <a>
                    <div className="rounded border border-green-300 py-2.5 px-4 font-semibold tracking-wide text-gray-100 hover:border-green-900 hover:bg-gradient-to-br  hover:from-green-600 hover:to-blue-600 hover:text-white lg:text-lg">
                      BOOK A SERVICE
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <Image
              src="https://res.cloudinary.com/froshital/image/upload/v1649085956/Froshital/Hero_pic_cxs7m9.png"
              alt="main pic"
              height={700}
              width={700}
              priority
            />
          </div>
        </div>
      </section>
      <div className="-mt-1 rotate-180">
        <Layer />
      </div>

      {/* Service Section */}

      <section className="relative mx-auto mb-10 mt-24 w-11/12 sm:mt-16 md:w-10/12  lg:mt-10 2xl:w-auto 2xl:max-w-7xl">
        <h2 className="absolute left-1/2 -top-20 -translate-x-1/2 select-none bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-center text-5xl font-bold uppercase text-transparent opacity-60 sm:text-6xl md:-top-24 md:text-7xl md:tracking-wider lg:-top-20 lg:text-9xl lg:tracking-widest lg:opacity-40 ">
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
            <Link href="/services/medical-tourism">
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
            <Link href="/services/lab-booking">
              <a className="mt-3 rounded border border-white px-3 py-2 font-medium text-white hover:bg-white hover:text-pink-500">
                Book Now
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <FooterLayer />

      <div className="bg-gray-900">
        <div className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
          <section className="flex flex-col items-center text-[#F3F4F6] lg:-mt-20">
            <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
              Why Choose Us
            </h2>
            <dl className="mt-7  text-center sm:mx-auto sm:flex sm:justify-center sm:gap-3 ">
              <div className="flex flex-col ">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  100+
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Client Satisfaction
                </dt>
              </div>
              <div className="my-5 mx-4 flex flex-col px-7 sm:my-0 sm:border-x">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  150+
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Medical Tourism
                </dt>
              </div>
              <div className="flex flex-col">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  200+
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Hospital Referrals
                </dt>
              </div>
            </dl>
            <Link href="/contact">
              <a className="mt-8 transform rounded bg-gradient-to-br from-green-500 to-blue-500 px-4 py-2 text-lg font-semibold tracking-wider text-gray-100 transition-primary duration-150 ease-out hover:scale-105 hover:from-green-600 hover:to-blue-600 hover:text-white md:py-3 md:px-5 md:text-xl">
                CONTACT US
              </a>
            </Link>
          </section>
          <DynamicTestimonial />
          <section className="mt-16 pb-4">
            <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text  text-4xl font-bold text-transparent md:text-5xl ">
              FAQ
            </h2>
            <div className="mt-5 lg:max-w-3xl">
              <DynamicAccordion faq={medicalTourismFaq} page="main" />
            </div>
          </section>
        </div>
      </div>

      <aside className="fixed bottom-0 left-0 right-0 z-20  flex sm:top-1/2 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:flex-col  ">
        <a
          href="tel:+918433437690"
          className="flex-1 cursor-pointer rounded-t-md border-r bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none sm:rounded-tl sm:border-0 sm:py-5 sm:px-1 "
        >
          <PhoneCall />
        </a>
        <a
          href="mailto:froshital@gmail.com"
          className="flex-1 cursor-pointer rounded-t-md border-r bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none sm:border-0 sm:py-5 sm:px-1 "
        >
          <Mail />
        </a>
        <a
          href="https://wa.me/918433437690?text=Hello%20Froshital"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 cursor-pointer rounded-t-md bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none  sm:rounded-bl sm:py-5 sm:px-1 "
        >
          <Whatsapp />
        </a>
      </aside>
    </Layout>
  );
}
