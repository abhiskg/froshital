import Image from "next/image";
import Layout from "@/components/Layout";

export default function LabBooking() {
  return (
    <Layout>
      <section>
        <div className="relative h-52 w-full sm:h-96">
          <Image
            src="/medical_lab.jpg"
            alt="hospital-referrals banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="my-14 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
          Comming Soon
        </h1>
      </section>
    </Layout>
  );
}
