import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";
import ValueCard from "@/components/ValueCard";

export default function About() {
  return (
    <Layout>
      {/* <Head>
        <title>About | Froshital</title>
        <meta
          name="description"
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold. We offer best medical services in India in cheap price."
        />
        <meta property="og:url" content="https://froshital.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About | Froshital"
        />
        <meta
          property="og:description"
          content="Froshital is a Medical Service in India"
        />
        <meta property="og:image" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
        <meta property="og:image:alt" content="Froshital Brand Image" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="twitter:image:src" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
      </Head> */}
      <div className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <section className="mt-3 flex flex-col items-center justify-center gap-7 md:flex-row lg:mt-0 lg:gap-14 xl:gap-40">
          <div>
            <h2 className="heading  text-center md:text-left">Our Mission</h2>
            <p className="text-center md:text-left">
              Our mission is to provide a one-stop solution for all the patients
              by assisting them with the best services and information. We also
              want To help our clients utilize every penny of their hard-earned
              money in healthcare by providing all the facilities ranging from
              the hospital to the banks in case of loans and insurance.
            </p>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/froshital/image/upload/v1649075651/Froshital/Our_mission_laacyj.png"
              alt="Team' mission pic"
              width={1200}
              height={900}
              priority
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="heading  mb-5 text-center">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* {leaders.map((leader) => (
              <div
                key={leader.id}
                className="group flex flex-col items-center justify-center rounded bg-slate-800 p-10 shadow-lg"
              >
                <div className="relative h-52 w-52 overflow-hidden rounded-full shadow-lg ">
                  <Image
                    src={leader.image}
                    alt="profile pic"
                    layout="fill"
                    className="transition-transform duration-500 ease-in group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center text-lg font-semibold text-gray-100">
                  {leader.name}
                </div>
                <div className="text-center text-gray-100">
                  {leader.position}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="rounded-full bg-gradient-to-tr from-green-500 to-blue-500 p-1.5 text-gray-100">
                    <IconFb />
                  </span>
                  <span className="rounded-full bg-gradient-to-tr from-green-500 to-blue-500 p-1.5 text-gray-100">
                    <IconInsta />
                  </span>
                </div>
              </div>
            ))} */}

            <TeamCard
              img={
                "https://res.cloudinary.com/froshital/image/upload/v1650114250/Froshital/founder_b9fkg3.jpg"
              }
              name="Danish Mirza"
              position="Founder"
            />
            <TeamCard
              img={
                "https://res.cloudinary.com/froshital/image/upload/v1650114273/Froshital/co-founder_widfzs.jpg"
              }
              name="Tamanna Yeasmin"
              position="Co-Founder"
            />
            <TeamCard
              img={
                "https://res.cloudinary.com/froshital/image/upload/v1649076101/Froshital/rock_whm9v5.jpg"
              }
              name="Deepanshu Singh"
              position="Manager"
            />
          </div>
        </section>

        <section className="mt-20 mb-5">
          <h2 className="heading mb-5 text-center">Things We Value</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
            <ValueCard
              title="We are Transparent"
              description="We trust each other. As a team, we foster trasparency, quality, and meaningful autonomy."
            />
            <ValueCard
              title="We love what we do"
              description="We love what we do. We are committed to provide the best medical services to our clients."
            />
            <ValueCard
              title="We are Learners"
              description="we are relentless problem solvers with a hunger to learn, inspire, and drive values."
            />
            <ValueCard
              title="We deliver results"
              description="We work together to ensure that our clients are getting the best services without any hassle."
            />
          </div>
        </section>

        <section className="mt-10"></section>
      </div>
    </Layout>
  );
}
