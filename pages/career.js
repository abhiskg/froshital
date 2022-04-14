import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Career() {
  return (
    <Layout>
      {/* <Head>
        <title>Career | Froshital</title>
        <meta
          name="description"
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold. We offer best medical services in India in cheap price."
        />
        <meta property="og:url" content="https://froshital.com/career" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Career | Froshital"
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
      <section className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <div className="relative h-60 w-full md:h-96 lg:h-[30rem]">
          <Image
            src="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg"
            alt="Career_cover_pic"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h1 className="absolute top-1/2 left-1/2 mt-2 w-full -translate-y-1/2 -translate-x-1/2 text-center text-4xl font-bold text-gray-100 sm:text-5xl lg:text-6xl">
            Career In Froshital
          </h1>
        </div>
        <h2 className="heading mt-3">Vaccency</h2>
        <p>No Vaccency</p>
        <h2 className="heading mt-10">Application Procedure</h2>
        <p>
          Send you Resume in our Email along with the job title in the subject
        </p>
      </section>
    </Layout>
  );
}
