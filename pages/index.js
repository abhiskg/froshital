import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Layout from "@/components/Layout";
import {
  IconArrowUp,
  IconHospital,
  IconLab,
  IconLeftQuote,
  IconMedical,
  IconPhone,
  IconRightQuote,
  Mail,
  PhoneCall,
  Whatsapp,
} from "../icons";
import { homepageFaq } from "@/utils/faqData";
import ServicePoints from "@/components/ServicePoints";

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
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold."
        />
        <meta property="og:url" content="https://froshital.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Medical Service Provider In India - Froshital"
        />
        <meta
          property="og:description"
          content="Froshital is a Medical Service in India"
        />
        <meta property="og:image" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
        <meta property="og:image:alt" content="Froshital Brand Image" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="twitter:title" content='Medical Service Provider In India - Froshital' />
        <meta property="twitter:description" content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold." />
        <meta property="twitter:image:src" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
      </Head> */}

      {/* Hero Section */}
      <div className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <section>
          <div ref={refH}>
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
                  <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-[1.8rem] font-bold text-transparent xs:text-3xl md:text-4xl lg:text-left ">
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
                  <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-[1.8rem] font-bold text-transparent xs:text-3xl md:text-4xl lg:text-left ">
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
                  <h2 className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text py-2 text-center text-[1.8rem] font-bold text-transparent xs:text-3xl md:text-4xl lg:text-left ">
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
                      className="group flex items-center gap-1 rounded bg-secondary py-2.5 px-4 hover:from-green-600 hover:to-blue-600"
                    >
                      <span className="rotate-[20deg] animate-wiggle group-hover:text-white">
                        <IconPhone />
                      </span>
                      <span className="text-sm font-semibold tracking-wide group-hover:text-white xs:text-base lg:text-lg">
                        CALL US
                      </span>
                    </a>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent">
                    OR
                  </div>
                  <Link href="/contact">
                    <a>
                      <div className="rounded bg-secondary py-2.5 px-4 text-sm font-semibold tracking-wide hover:from-green-600 hover:to-blue-600 hover:text-white xs:text-base lg:text-lg">
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
                  height={690}
                  width={700}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="mb-5 mt-10 md:mt-0">
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
                <h2
                  ref={refR}
                  className=" bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl xl:text-5xl "
                >
                  Hospital Referrals
                </h2>
                <ServicePoints points="Get the top doctors recommendation over call" />
                <ServicePoints points="Arrange a consultation within minutes" />
                <ServicePoints points="Compare various hospitals with our top-notch team" />
                <ServicePoints points="Packages available at massive discounts" />
              </div>
              <button
                className={`${
                  inViewR
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                } mt-7  transition-primary delay-500 duration-700 `}
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
                inViewR
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
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
                inViewM
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
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
                <h2
                  ref={refM}
                  className=" bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl xl:text-5xl "
                >
                  Medical Tourism
                </h2>
                <ServicePoints points="Get rapid arrangements of travel in case of emergency" />
                <ServicePoints points="Communicate with the top global healthcare professionals" />
                <ServicePoints points="Get instant hotel and flight bookings" />
                <ServicePoints points="Attractive packages for medical tourism" />
              </div>
              <button
                className={`${
                  inViewM
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                } mt-7 transition-primary delay-500 duration-700`}
              >
                <Link href="/services/medical-tourism">
                  <a className="rounded bg-gradient-to-br from-pink-500 to-amber-500 px-5 py-2.5 font-medium text-white hover:from-amber-500 hover:to-pink-500 ">
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
                <h2
                  ref={refL}
                  className="inline bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text  text-3xl font-bold text-transparent sm:text-4xl xl:text-5xl"
                >
                  Lab Booking
                </h2>
                <ServicePoints points="Book the best labs from the comfort of your house" />
                <ServicePoints points="Compare the labs and choose the best one" />
                <ServicePoints points="Get Quick Lab results" />
                <ServicePoints points="Get instant assistance from our team" />
              </div>
              <button
                className={`${
                  inViewL
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                } mt-7 transition-primary delay-500 duration-700`}
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
                inViewL
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
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
                inViewW
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
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
                inViewW
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }  mt-2 text-sm font-medium text-gray-600 transition-primary delay-600 duration-700`}
            >
              Fig: World Map
            </figcaption>
            <div
              className={`${
                inViewW
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }  mt-4 text-center font-semibold transition-primary delay-700 duration-700`}
            >
              <span className="text-blue-500">Asia pacific region</span> would
              exhibit an highest <span className="text-blue-500">CAGR</span>{" "}
              15.6 % during 2017-2023
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-10 flex flex-col items-center text-[#F3F4F6]">
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
                  <DynamicCountUp start={0} end={30} suffix="+" />
                ) : (
                  "0"
                )}
              </dd>
              <dt className="text-lg font-medium leading-6 text-black">
                Clinics
              </dt>
            </div>
            <div className="my-5 mx-4 flex flex-col border-gray-400 px-7 lg:my-0 lg:border-x">
              <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                {inViewC ? (
                  <DynamicCountUp start={0} end={50} suffix="+" />
                ) : (
                  "0"
                )}
              </dd>
              <dt className="text-lg font-medium leading-6 text-black">
                Doctors
              </dt>
            </div>
            <div className="flex flex-col">
              <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                {inViewC ? (
                  <DynamicCountUp start={0} end={30} suffix="+" />
                ) : (
                  "0"
                )}
              </dd>
              <dt className="text-lg font-medium leading-6 text-black">
                Happy Patients
              </dt>
            </div>
            <div className="my-5 mx-4 flex flex-col border-gray-400 px-7 lg:my-0 lg:border-x">
              <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                {inViewC ? (
                  <DynamicCountUp start={0} end={10} suffix="+" />
                ) : (
                  "0"
                )}
              </dd>
              <dt className="text-lg font-medium leading-6 text-black">
                Hospitals
              </dt>
            </div>
            <div className="flex flex-col">
              <dd className="bg-gradient-to-br from-pink-500 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl ">
                {inViewC ? (
                  <DynamicCountUp start={0} end={30} suffix="+" />
                ) : (
                  "0"
                )}
              </dd>
              <dt className="text-lg font-medium leading-6 text-black">
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
            <DynamicAccordion faq={homepageFaq} page="main" />
          </div>
        </section>
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
          className="flex-1 cursor-pointer rounded-t-md border-r bg-secondary py-2 shadow-md hover:text-white sm:rounded-none sm:rounded-tl sm:border-b-2 sm:py-5 sm:px-1 "
        >
          <PhoneCall />
          <span className="sr-only">Phone Call</span>
        </a>
        <a
          href="mailto:froshital@gmail.com"
          className="flex-1 cursor-pointer rounded-t-md border-r bg-secondary py-2 shadow-md hover:text-white sm:rounded-none sm:border-b-2 sm:py-5 sm:px-1 "
        >
          <Mail />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://wa.me/918433437690?text=Hello%20Froshital"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex-1 cursor-pointer rounded-t-md bg-secondary py-2 shadow-md hover:text-white sm:rounded-none sm:rounded-bl sm:py-5 sm:px-1 "
        >
          <Whatsapp scale="28" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </aside>

      <div
        onClick={() => scrollTo({ top: 0 })}
        className={`fixed bottom-6 right-6 hidden cursor-pointer rounded-full bg-[#00AA54] p-2 text-gray-100 shadow-md  transition-opacity duration-500 ease-in hover:bg-gradient-to-tr sm:block  ${
          inViewA ? "opacity-0 " : "opacity-100"
        }`}
      >
        <IconArrowUp />
      </div>
    </Layout>
  );
}
