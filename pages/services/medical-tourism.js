import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function MedicalTourism() {
  return (
    <Layout>
      <Head>
        <title>Medical Tourism | Froshital</title>
      </Head>
      <section>
        <div className="relative h-96 w-full">
          <Image
            src="/medical_tour.png"
            alt="hospital-referrals banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="mt-14 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
          Medical Tourism
        </h1>
      </section>
    </Layout>
  );
}
