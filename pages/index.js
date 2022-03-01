import Layout from "../components/Layout";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import { FooterLayer, Layer, Mail, PhoneCall, Whatsapp } from "../icons";

export default function Home() {
  return (
    <Layout>
      <main className="">
        <div className="bg-[#1F2937] h-screen">
          <div className=" mb-96">Hero Section</div>
        </div>
        <div className="rotate-180">
          <Layer />
        </div>
        <Service />
        <aside className="fixed  sm:top-1/2 sm:-translate-y-1/2 bottom-0  sm:bottom-auto left-0 sm:left-auto right-0 flex sm:flex-col  ">
          <span className="bg-gradient-to-br from-green-500 to-green-300 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none sm:rounded-tl flex-1 border-r sm:border-0 cursor-pointer shadow-md ">
            <PhoneCall />
          </span>
          <span className="bg-gradient-to-br from-green-500 to-green-300 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none flex-1 border-r sm:border-0 cursor-pointer shadow-md ">
            <Mail />
          </span>
          <span className="bg-gradient-to-br from-green-500 to-green-300 py-2 sm:py-5 sm:px-1 rounded-t-md sm:rounded-none sm:rounded-bl flex-1  cursor-pointer shadow-md ">
            <Whatsapp />
          </span>
        </aside>
      </main>

      <FooterLayer />
      <WhyUs />
    </Layout>
  );
}
