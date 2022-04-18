import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

import Accordion from "@/components/Accordion";
import { hospitalReferralsFaq } from "@/utils/faqData";
import ServiceCard from "@/components/ServiceCard";
import ProcessCard from "@/components/ProcessCard";

export default function HospitalReferrals() {
  return (
    <Layout>
      {/* <Head>
        <title>Hospital Referrals | Froshital</title>
        <meta
          name="description"
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold. We offer best medical services in India in cheap price."
        />
        <meta property="og:url" content="https://froshital.com/services/hospital-referrals" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hospital Referrals | Froshital"
        />
        <meta
          property="og:description"
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold. We offer best medical services in India in cheap price."
        />
        <meta property="og:image" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
        <meta property="og:image:alt" content="Froshital Brand Image" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="twitter:image:src" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
      </Head> */}
      <div className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <section className="mt-5 flex flex-wrap  justify-center gap-5 lg:flex-nowrap lg:justify-between lg:gap-10">
          <div>
            <h1 className="heading text-center lg:mt-2 lg:text-left">
              Hospital Referrals
            </h1>
            <p className="max-w-3xl text-center text-gray-600 lg:text-left">
              With tons of hospitals present all across the country, the
              patients are always confused about how to choose the best hospital
              for them. This is where we come in. Our team notes down your
              problems, budget, and health issues, and filters out the best
              hospitals and doctors for you.
            </p>
            <div className="mb-5 mt-8 text-center lg:text-left ">
              <Link href="/contact">
                <a className=" rounded bg-gradient-to-br from-green-500 to-blue-500 py-2 px-3 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white">
                  Book an appoinment
                </a>
              </Link>
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/froshital/image/upload/v1649152917/Froshital/Referrals_n5x425.png"
            alt="hospital-referrals banner"
            width={600}
            height={350}
            priority
          />
        </section>
        <section>
          <h2 className="heading mt-16 text-center">We Offer Best Services</h2>
          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 ">
            <ServiceCard
              title="Spend Less Money"
              description="We have the best team, who will ensure your money is used properly"
            />
            <ServiceCard
              title="Get Instant Services"
              description="With our referrals, get instant treatment from the desired hospital"
            />
            <ServiceCard
              title="Seamless Process"
              description="We offer the best services to our clients through which they don&amp;t have to waste any time for the medical facilities."
            />
            <ServiceCard
              title="Vast Network"
              description="We have been a part of this industry for a long time resulting in many networks across the medical field which eventually benefits the client."
            />
          </div>
        </section>
        <section>
          <h2 className="heading mt-16 ">The Process We Follow</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <ProcessCard
              number={1}
              title="Discovery"
              description="The client contacts us with any of the modes available and talks with the call officer from our team."
            />
            <ProcessCard
              number={2}
              title="Discovery"
              description="The team immediately notes down all the requisites of the client and contacts the most suitable hospitals regarding the concern."
            />
            <ProcessCard
              number={3}
              title="Discovery"
              description="Our professionals then help the patient reach the premises of the hospital with utmost care."
            />
            <ProcessCard
              number={4}
              title="Discovery"
              description="The team also takes care of all the paperwork in the hospital leaving the patient with no problems or complications."
            />
          </div>
        </section>
        <section className="mt-16">
          <h2 className="heading">FAQ</h2>
          <div className="mt-5 lg:max-w-3xl">
            <Accordion faq={hospitalReferralsFaq} page="service" />
          </div>
        </section>
      </div>
    </Layout>
  );
}
