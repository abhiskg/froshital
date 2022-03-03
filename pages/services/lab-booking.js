import Image from "next/image";
import Layout from "../../components/Layout";

export default function LabBooking() {
  return (
    <Layout>
      <section>
        <div className="relative w-full sm:h-96 h-52">
          <Image
            src="/medical_lab.jpg"
            alt="hospital-referrals banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl text-center font-bold bg-gradient-to-tr from-emerald-500 to-blue-500 text-transparent bg-clip-text my-14">
          Comming Soon
        </h1>
      </section>
    </Layout>
  );
}
