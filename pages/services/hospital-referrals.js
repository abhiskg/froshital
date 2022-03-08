import Image from "next/image";
import Layout from "../../components/Layout";

export default function HospitalReferrals() {
  return (
    <Layout>
      <div className="relative h-52 w-full sm:h-96">
        <Image
          src="/hospital1.jpg"
          alt="hospital-referrals banner"
          layout="fill"
        />
      </div>
      <h1 className="mt-14 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Hospital Referrals
      </h1>
    </Layout>
  );
}
