import Image from "next/image";
import Layout from "../../components/Layout";

export default function MedicalTourism() {
  return (
    <Layout>
      <section>
        <div className="relative w-full h-96">
          <Image
            src="/medical_tour.png"
            alt="hospital-referrals banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-center text-4xl font-bold bg-gradient-to-tr from-emerald-500 to-blue-500 text-transparent bg-clip-text mt-14">
          Medical Tourism
        </h1>
      </section>
    </Layout>
  );
}
