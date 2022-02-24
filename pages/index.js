import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";
import { Mail, PhoneCall, Whatsapp } from "../icons";

export default function Home() {
  return (
    <Layout>
      <WhyUs />
      <aside className="fixed  sm:top-1/2 sm:-translate-y-1/2 bottom-0  sm:bottom-auto left-0 sm:left-auto right-0 flex sm:flex-col  ">
        <span className="bg-green-400 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none flex-1 border-r cursor-pointer ">
          <PhoneCall />
        </span>
        <span className="bg-green-400 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none flex-1 cursor-pointer ">
          <Mail />
        </span>
        <span className="bg-green-400 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none flex-1 border-r cursor-pointer ">
          <Whatsapp />
        </span>
      </aside>
    </Layout>
  );
}
