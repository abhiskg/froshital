import { specialitiesData } from "@/utils/specialitiesData";
import { IconChevronRight } from "icons";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Specialities({ speciality }) {
  return (
    <Layout>
      {/* <Head>
        <title>{`${speciality.title} | Froshital`}</title>
      </Head> */}
      <section className="">
        <div className="w-full bg-gradient-to-tr from-gray-700 to-sky-800 py-20">
          <h1 className="text-center text-3xl font-bold text-gray-200 lg:text-4xl">
            {speciality.title}
          </h1>
          <p className="mt-1 text-center text-gray-400">
            We have patnered with top hospitals to give you the best service in{" "}
            {speciality.title}{" "}
          </p>
          <div className=" mt-8 text-center">
            <Link href="/contact">
              <a className=" rounded bg-gradient-to-br from-green-500 to-blue-500 py-2 px-3 text-gray-100 transition-colors duration-150 ease-out hover:from-green-600 hover:to-blue-600 hover:text-white">
                Book an Appointment
              </a>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
          <h2 className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odit est eveniet qui, nemo enim. Laudantium, sed ea? Sit, esse quae
            provident unde voluptatem culpa deleniti, debitis iure ab, optio
            impedit modi dolores autem amet repellendus qui numquam pariatur
            deserunt a vitae reiciendis necessitatibus ex quos corrupti. Quod
            provident, doloremque similique minus molestiae dolorem corrupti
            suscipit aperiam tempore quasi expedita enim harum voluptate culpa
            id omnis sapiente cupiditate, consectetur modi. In necessitatibus
            ipsam explicabo sapiente voluptatem quasi iure exercitationem
            excepturi esse. Veniam architecto, fuga doloremque quaerat iusto ex
            amet eius esse dolores tenetur necessitatibus vitae! Provident,
            reiciendis excepturi. Fuga, cupiditate?
          </h2>
          <div className="heading mt-10 mb-2">
            Services in {speciality.title}
          </div>
          <ul className="ml-5 mb-2 space-y-2">
            {speciality.services.map((service) => (
              <li key={service.id} className="flex items-center">
                <IconChevronRight />
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = specialitiesData.map((speciality) => ({
    params: {
      slug: speciality.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const speciality = specialitiesData.find((speciality) => {
    return speciality.slug === slug;
  });

  return {
    props: {
      speciality,
    },
  };
}
