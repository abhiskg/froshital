import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function LabBooking() {
  return (
    <Layout>
      {/* <Head>
        <title>Lab Booking | Froshital</title>
      </Head> */}
      <section className="flex h-screen items-center justify-center">
        {/* <div className="relative h-52 w-full sm:h-96">
          <Image
            src="/medical_lab.jpg"
            alt="hospital-referrals banner"
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        <h1 className="my-14 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text py-1 text-center text-4xl font-bold text-transparent">
          Comming Soon
        </h1>
      </section>
    </Layout>
  );
}
