import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto font-body">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
