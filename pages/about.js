import Image from "next/image";
import Layout from "../components/Layout";
import { IconFb, IconInsta, IconMission } from "../icons";
import { leaders, values } from "../utils/about";

export default function About() {
  return (
    <Layout>
      <div className="mx-auto my-10 w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <section className=" flex items-center justify-between">
          <div>
            <h2 className="mb-4 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
              Our Mission
            </h2>
            <p className="w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eos
              eligendi dolorum suscipit voluptas ipsa iusto incidunt provident
              doloribus optio perspiciatis accusantium quam tempore error
              excepturi eum! Ullam, consequatur ducimus! Nihil similique dolore
              eum fuga eius quam
            </p>
          </div>
          <IconMission />
        </section>

        <section>
          <h2 className="mb-4 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {leaders.map((leader) => (
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
            ))}
          </div>
        </section>

        <section>
          <h2 className="my-7 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
            Our Values
          </h2>
          <div className="flex  flex-wrap items-center justify-center gap-5 ">
            {values.map((value) => (
              <div
                key={value.id}
                className="flex h-56 w-56 flex-col items-center justify-center rounded bg-slate-800 p-2 shadow"
              >
                <h3 className="text-center font-medium text-gray-100">
                  {value.title}
                </h3>
                <p className="mt-2 text-center text-sm text-gray-100">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
