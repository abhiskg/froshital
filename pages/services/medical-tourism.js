import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function MedicalTourism() {
  return (
    <Layout>
      <Head>
        <title>Medical Tourism | Froshital</title>
      </Head>
      <section className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <div className="relative h-96 w-full">
          <Image
            src="/tourism.png"
            alt="hospital-referrals banner"
            layout="fill"
            priority
          />
        </div>
        <h1 className="mt-14 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
          Medical Tourism
        </h1>
        <div className="mb-5 mt-5 text-center">
          <Link href="/contact">
            <a className=" rounded bg-gradient-to-br from-green-500 to-blue-500 py-2 px-3 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
