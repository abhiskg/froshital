import Image from "next/image";
import Layout from "../../components/Layout";

export default function HospitalReferrals() {
  return (
    <Layout>
      <div className="relative w-full sm:h-96 h-52">
        <Image
          src="/hospital1.jpg"
          alt="hospital-referrals banner"
          layout="fill"
        />
      </div>
      <h1 className="text-center text-4xl font-bold bg-gradient-to-tr from-emerald-500 to-blue-500 text-transparent bg-clip-text mt-14">
        Hospital Referrals
      </h1>
    </Layout>
  );
}
