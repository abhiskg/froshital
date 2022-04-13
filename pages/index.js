import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
// import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Layout from "@/components/Layout";
import {
  Check,
  FooterLayer,
  IconArrowUp,
  IconHospital,
  IconLab,
  IconLeftQuote,
  IconMedical,
  IconPhone,
  IconRightQuote,
  Layer,
  Mail,
  PhoneCall,
  Whatsapp,
} from "../icons";
import { medicalTourismFaq } from "@/utils/faqData";

const DynamicTestimonial = dynamic(() => import("@/components/Testimonial"));
const DynamicAccordion = dynamic(() => import("@/components/Accordion"));
const DynamicCountUp = dynamic(() => import("react-countup"));

export default function Home() {
  const [refH, inViewH] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [refS, inViewS] = useInView({
    rootMargin: "0px 0px -60px 0px",
    triggerOnce: true,
  });

  const [refR, inViewR] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const [refM, inViewM] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const [refL, inViewL] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const [refW, inViewW] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const [refC, inViewC] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [refA, inViewA] = useInView({
    rootMargin: "0px 0px -180px 0px",
    initialInView: true,
  });

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
          content="Froshital - Medical Service Provider In India"
        />
        <meta
          property="og:description"
          content="Froshital is a Medical Service in India"
        />
      </Head> */}

      {/* Hero Section */}
      <section className="bg-gray-900">
        <div
          ref={refH}
          className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl "
        >
          <div
            ref={refA}
            className="flex flex-wrap items-center justify-between gap-7 pb-6 pt-8 sm:pb-16 lg:flex-nowrap lg:pt-20 xl:pt-8"
          >
            <div>
              <div
                className={`${
                  inViewH
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-3 opacity-0"
                } flex w-64 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 transition-primary delay-700 duration-700`}
              >
                <span className=" rounded-full bg-gradient-to-br from-pink-500 to-amber-500 py-1 px-2 text-sm text-white">
                  Save 10%
                </span>
                <span className=" p-1 text-sm ">For first booking only</span>
              </div>
              <div
                className={`${
                  inViewH
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } mt-5 flex items-center transition-primary delay-100 duration-700`}
              >
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                  <IconMedical />
                </span>
                <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-4xl lg:text-left ">
                  Medical Tourism
                </h2>
              </div>
              <div
                className={`${
                  inViewH
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } mt-1 flex items-center transition-primary delay-200 duration-700`}
              >
                <span className="mr-2 rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1">
                  <IconHospital />
                </span>
                <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-4xl lg:text-left ">
                  Hospital Referrals
                </h2>
              </div>
              <div
                className={`${
                  inViewH
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } mt-1 flex items-center transition-primary delay-300 duration-700`}
              >
                <span className="mr-2  rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-1 ">
                  <IconLab />
                </span>
                <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-4xl lg:text-left ">
                  Lab Booking
                </h2>
              </div>
              <h1
                className={`${
                  inViewH
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } mt-5 max-w-2xl bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent transition-primary delay-400 duration-700 md:text-3xl`}
              >
                We Are The One Stop Solution For All Medical Services In India
              </h1>
              <div
                className={`${
                  inViewH
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } mt-10 flex items-center gap-3 transition-primary delay-500 duration-700 `}
              >
                <div>
                  <a
                    href="tel:+918433437690"
                    className="group flex items-center gap-1 rounded bg-gradient-to-br from-green-500  to-blue-500 py-2.5 px-4 hover:from-green-600 hover:to-blue-600"
                  >
                    <span className="rotate-[20deg] animate-wiggle text-gray-100 group-hover:text-white">
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
                    <div className="rounded bg-gradient-to-br from-green-500 to-blue-500 py-2.5 px-4 font-semibold tracking-wide text-gray-100 hover:from-green-600 hover:to-blue-600 hover:text-white lg:text-lg">
                      BOOK A SERVICE
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${
                inViewH
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              } transition-primary delay-500 duration-700 `}
            >
              <Image
                src="https://res.cloudinary.com/froshital/image/upload/v1649085956/Froshital/Hero_pic_cxs7m9.png"
                alt="main pic"
                height={700}
                width={700}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-1 rotate-180">
        <Layer />
      </div>

      {/* Service Section */}
      <section className="mx-auto mb-5 mt-10 w-11/12 md:mt-0 md:w-10/12  2xl:w-auto 2xl:max-w-7xl">
        <div
          ref={refS}
          className=" flex flex-wrap items-center justify-between gap-5 lg:flex-nowrap"
        >
          <div>
            <div
              className={`${
                inViewR
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0"
              } transition-primary duration-700`}
            >
              <h3
                ref={refR}
                className=" bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl xl:text-5xl "
              >
                Hospital Referrals
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-2">Lorem ipsum dolor sit amet.</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur.</p>
              <p className="mt-2">Lorem ipsum dolor sit amet.</p>
            </div>
            <button
              className={`${
                inViewR
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } mt-5  transition-primary delay-500 duration-700 `}
            >
              <Link href="/services/hospital-referrals">
                <a className="rounded bg-gradient-to-br  from-pink-500 to-amber-500 px-5 py-2.5 font-medium text-white hover:from-amber-500 hover:to-pink-500 ">
                  See More
                </a>
              </Link>
            </button>
          </div>
          <div
            className={`${
              inViewR ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            } mx-auto transition-primary duration-700 lg:mx-0`}
          >
            <Image
              src="/assets/images/hospital_referrals.png"
              alt="hospital Referrals"
              width={500}
              height={600}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 lg:flex-nowrap">
          <div
            className={`${
              inViewM ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            } order-1 mx-auto transition-primary duration-700 lg:order-none lg:mx-0`}
          >
            <Image
              src="/assets/images/medical_tourism.png"
              alt="hospital Referrals"
              width={500}
              height={600}
            />
          </div>
          <div>
            <div
              className={`${
                inViewM
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0"
              } transition-primary duration-700`}
            >
              <h3
                ref={refM}
                className=" bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl xl:text-5xl "
              >
                Medical Tourism
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-2">Lorem ipsum dolor sit amet.</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur.</p>
              <p className="mt-2">Lorem ipsum dolor sit amet.</p>
            </div>
            <button
              className={`${
                inViewM
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } mt-5 transition-primary delay-500 duration-700`}
            >
              <Link href="/services/medical-tourism">
                <a className="rounded bg-gradient-to-br  from-pink-500 to-amber-500 px-5 py-2.5 font-medium text-white hover:from-amber-500 hover:to-pink-500 ">
                  See More
                </a>
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 lg:flex-nowrap">
          <div>
            <div
              className={`${
                inViewL
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0"
              } transition-primary duration-700`}
            >
              <h3
                ref={refL}
                className=" bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl xl:text-5xl"
              >
                Lab Booking
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-2">Lorem ipsum dolor sit amet.</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur.</p>
              <p className="mt-2">Lorem ipsum dolor sit amet.</p>
            </div>
            <button
              className={`${
                inViewL
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } mt-5 transition-primary delay-500 duration-700`}
            >
              <Link href="/services/lab-booking">
                <a className="rounded bg-gradient-to-br  from-pink-500 to-amber-500 px-5 py-2.5 font-medium text-white hover:from-amber-500 hover:to-pink-500 ">
                  See More
                </a>
              </Link>
            </button>
          </div>
          <div
            className={`${
              inViewL ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            } mx-auto transition-primary duration-700 lg:mx-0`}
          >
            <Image
              src="/assets/images/lab_booking.png"
              alt="hospital Referrals"
              width={500}
              height={600}
            />
          </div>
        </div>

        <div
          ref={refW}
          className="mt-10 flex flex-col items-center justify-center"
        >
          <div
            className={`${
              inViewW ? "scale-100 opacity-100" : "scale-105 opacity-0"
            } relative mb-10 transition-primary duration-700`}
          >
            <span className=" text-gray-600">
              <IconLeftQuote />
            </span>
            <blockquote className="max-w-4xl text-center text-lg text-gray-800 ">
              Global Medical Tourism Market was valued at{" "}
              <span className="text-blue-500">$61,172</span> million in 2016,
              and is estimated to reach at{" "}
              <span className="text-blue-500">$165,345</span> million by 2023,
              registering a CAGR of 15.0% from 2017 to 2023.
            </blockquote>
            <span className="absolute right-0 -bottom-2 text-gray-600">
              <IconRightQuote />
            </span>
          </div>
          <figure
            className={`${
              inViewW ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }  transition-primary delay-200 duration-700`}
          >
            <Image
              src="/assets/images/world_map.png"
              alt="World Map"
              width={900}
              height={400}
            />
          </figure>

          <figcaption
            className={`${
              inViewW ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }  mt-2 text-sm font-medium text-gray-600 transition-primary delay-600 duration-700`}
          >
            Fig: World Map
          </figcaption>
          <div
            className={`${
              inViewW ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }  mt-4 text-center font-semibold transition-primary delay-700 duration-700`}
          >
            <span className="text-blue-500">Asia pacific region</span> would
            exhibit an highest <span className="text-blue-500">CAGR</span> 15.6
            % during 2017-2023
          </div>
        </div>
      </section>

      <FooterLayer />
      <div className="bg-gray-900">
        <div className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
          {/* Why Choose Us Section */}
          <section className="flex flex-col items-center text-[#F3F4F6] lg:-mt-20">
            <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent  sm:text-4xl lg:text-5xl ">
              Why Choose Us
            </h2>
            <dl
              ref={refC}
              className="mt-7 text-center lg:mx-auto lg:flex lg:justify-center lg:gap-3 "
            >
              <div className="flex flex-col ">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  {inViewC ? (
                    <DynamicCountUp start={50} end={100} suffix="+" />
                  ) : (
                    "0"
                  )}
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Clinics
                </dt>
              </div>
              <div className="my-5 mx-4 flex flex-col px-7 lg:my-0 lg:border-x">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  {inViewC ? (
                    <DynamicCountUp start={50} end={100} suffix="+" />
                  ) : (
                    "0"
                  )}
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Doctors
                </dt>
              </div>
              <div className="flex flex-col">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  {inViewC ? (
                    <DynamicCountUp start={50} end={100} suffix="+" />
                  ) : (
                    "0"
                  )}
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Happy Patients
                </dt>
              </div>
              <div className="my-5 mx-4 flex flex-col px-7 lg:my-0 lg:border-x">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  {inViewC ? (
                    <DynamicCountUp start={50} end={100} suffix="+" />
                  ) : (
                    "0"
                  )}
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Hospitals
                </dt>
              </div>
              <div className="flex flex-col">
                <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                  {inViewC ? (
                    <DynamicCountUp start={50} end={100} suffix="+" />
                  ) : (
                    "0"
                  )}
                </dd>
                <dt className="text-lg font-medium leading-6 text-white">
                  Cities
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
            <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text  text-3xl font-bold text-transparent   sm:text-4xl lg:text-5xl ">
              FAQ
            </h2>
            <div className="mt-5 lg:max-w-3xl">
              <DynamicAccordion faq={medicalTourismFaq} page="main" />
            </div>
          </section>
        </div>
      </div>

      <aside
        className={`${
          inViewS
            ? "translate-y-0 opacity-100 sm:translate-x-0"
            : "translate-y-10 opacity-0 sm:translate-x-10 "
        } fixed bottom-0 left-0 right-0 z-20 flex transition-primary  duration-500 sm:top-1/2 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:flex-col `}
      >
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
          className=" flex-1 cursor-pointer rounded-t-md bg-gradient-to-br from-green-500 to-green-300 py-2 shadow-md hover:text-white sm:rounded-none  sm:rounded-bl sm:py-5 sm:px-1 "
        >
          <Whatsapp scale="28" />
        </a>
      </aside>

      <div
        onClick={() => scrollTo({ top: 0 })}
        className={`fixed bottom-6 right-6 hidden cursor-pointer rounded-full bg-gradient-to-br from-gray-700 to-sky-700 p-2 text-gray-100 shadow-md  transition-opacity duration-500 ease-in hover:bg-gradient-to-tr sm:block  ${
          inViewA ? "opacity-0 " : "opacity-100"
        }`}
      >
        <IconArrowUp />
      </div>
    </Layout>
  );
}
