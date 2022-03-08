import Image from "next/image";
import Layout from "../components/Layout";
import leaders from "../utils/leaders";

export default function About() {
  return (
    <Layout>
      <h1 className="mt-14 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Company Profile
      </h1>
      <div className="mx-auto mt-36 grid w-[89%] max-w-7xl grid-cols-1 gap-10 md:w-9/12 md:grid-cols-2 ">
        <div>
          <h2 className="mb-4 text-4xl">Meet Our Leadership</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            corrupti impedit veniam tempore nesciunt doloremque vero blanditiis
            ipsum, eligendi quia nisi ratione, quidem itaque consectetur, ea
            ducimus nemo quas saepe. Quasi laudantium id porro ea perspiciatis
            quas, aliquam quaerat recusandae earum, doloribus quo? Molestiae
            deserunt amet nulla officia earum assumenda? Quaerat quia doloribus
            iure corrupti provident suscipit rerum, ratione eveniet. Vero porro
            neque voluptatibus nesciunt exercitationem laudantium dolorum. Id,
            consectetur expedita tempore provident maiores, dolorem doloribus
          </h3>
        </div>
        <div className="flex flex-wrap gap-8">
          {leaders.map((leader) => (
            <div key={leader.id} className="flex items-center gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-full shadow-lg">
                <Image src={leader.image} alt="profile pic" layout="fill" />
              </div>
              <div>
                <span>{leader.name}</span>
                <span className="block">{leader.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
