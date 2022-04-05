import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { medicalTourismFaq } from "@/utils/faqData";
import Accordion from "@/components/Accordion";
import ServiceCard from "@/components/ServiceCard";

export default function MedicalTourism() {
  return (
    <Layout>
      <Head>
        <title>Medical Tourism | Froshital</title>
      </Head>
      <div className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <section className="mt-5 flex flex-wrap  justify-center gap-5 lg:flex-nowrap lg:justify-between lg:gap-10">
          <div>
            <h1 className="heading text-center lg:mt-2 lg:text-left">
              Medical Tourism
            </h1>
            <p className="max-w-3xl text-center text-gray-600 lg:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              placeat quo minima. Cupiditate, officia? Iste modi fugit minus
              enim excepturi!
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
            src="https://res.cloudinary.com/froshital/image/upload/v1649167354/Froshital/Medical_tourism_gkuvx7.png"
            alt="hospital-referrals banner"
            width={600}
            height={350}
            priority
          />
        </section>
        <section>
          <h2 className="heading mt-10 text-center">We Offer Best Services</h2>
          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 ">
            <ServiceCard
              title="Spend Less Money"
              description=" We have the best team, who will ensure your money is used properly"
            />
            <ServiceCard
              title="Spend Less Money"
              description=" We have the best team, who will ensure your money is used properly"
            />
            <ServiceCard
              title="Spend Less Money"
              description=" We have the best team, who will ensure your money is used properly"
            />
            <ServiceCard
              title="Spend Less Money"
              description=" We have the best team, who will ensure your money is used properly"
            />
          </div>
        </section>
        <section>
          <h2 className="heading mt-10 text-center">The Process We Follow</h2>
        </section>
        <section>
          <h2 className="heading mb-2 mt-10">FAQ</h2>
          <div className="lg:max-w-3xl">
            <Accordion faq={medicalTourismFaq} />
          </div>
        </section>
      </div>
    </Layout>
  );
}
