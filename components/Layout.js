import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 font-body">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
