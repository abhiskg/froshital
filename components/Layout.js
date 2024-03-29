import dynamic from "next/dynamic";
import Navbar from "./Navbar";

const DynamicFooter = dynamic(() => import("./Footer"));

export default function Layout({ children }) {
  return (
    <div className="font-body relative bg-gray-100">
      <Navbar />
      <main>{children}</main>
      <DynamicFooter />
    </div>
  );
}
