import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
// import {
//   IconEmail,
//   IconLogo,
//   IconMail,
//   IconMap,
//   IconPhone,
//   IconSend,
// } from "../components/icons";
import ButtonLoader from "../components/ButtonLoader";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
  };

  return (
    <Layout>
      <div className="overflow-x-hidden h-screen relative ">
        <Head>
          <title>Abhishek Sengupta | Contact</title>
        </Head>
        <nav className="flex items-center justify-between h-[4.5rem] md:mx-12 mx-5 ">
          <Link href="/">
            <a>{/* <IconLogo /> */}</a>
          </Link>
          <Link href="/">
            <a className="px-3 py-2 text-sm font-medium  text-red-500 border border-red-500 rounded hover:bg-red-500/5 transition-colors duration-200 ">
              Close X
            </a>
          </Link>
        </nav>
        <section className="lg:w-9/12 w-[89%] mx-auto max-w-screen-xl mt-5 md:mt-16 lg:mt-28 ">
          <div className=" flex flex-col md:flex-row p-2 gap-4 ">
            <div className="md:w-2/5 ">
              <h1 className="mb-6 mt-2  text-lg text-primary-200 font-medium">
                Contact Information
              </h1>
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-full bg-primary-300 text-white">
                  {/* <IconMail /> */}
                </div>
                <div>
                  <h3 className=" font-medium">Email</h3>
                  <a
                    className="font-body text-sm"
                    href="mailto:abhiskg20@gmail.com"
                  >
                    abhiskg20@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start my-3">
                <div className="border p-2 rounded-full bg-primary-300 text-white">
                  {/* <IconPhone /> */}
                </div>
                <div>
                  <h3 className=" font-medium">Phone</h3>
                  <a className="font-body text-sm" href="tel:+88-01885077250">
                    +88-01885077250
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="border p-2 rounded-full bg-primary-300 text-white">
                  {/* <IconMap /> */}
                </div>
                <div>
                  <h3 className=" font-medium">Address</h3>
                  <span className="font-body text-sm">
                    Chittagong, Bangladesh
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2 className="mb-6 mt-2  text-lg text-primary-200 font-medium">
                  Send me a message
                </h2>
                {/* <IconEmail /> */}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-3 mb-3">
                  <label className="w-full">
                    <span className="block   after:content-['*'] after:ml-0.5 after:text-red-500">
                      Name
                    </span>
                    <input
                      className={`border ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } border-slate-300 px-3 py-2 rounded w-full text-sm shadow-sm  placeholder-slate-400 focus:outline-none focus:border-primary-200 focus:ring-1 focus:ring-primary-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
                      placeholder="Enter your name"
                      type="text"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label className="w-full">
                    <span className="block   after:content-['*'] after:ml-0.5 after:text-red-500">
                      Email
                    </span>
                    <input
                      className={`border ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } border-slate-300 px-3 py-2 rounded w-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary-200 focus:ring-1 focus:ring-primary-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
                      placeholder="Enter your email"
                      type="email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <label>
                  <span className="block  ">Subject</span>
                  <input
                    className=" mb-3 border border-slate-300 px-3 py-2 rounded w-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary-200 focus:ring-1 focus:ring-primary-300"
                    required
                    placeholder="Enter your subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </label>
                <label>
                  <span className="block   after:content-['*'] after:ml-0.5 after:text-red-500">
                    Message
                  </span>
                  <textarea
                    className={`border ${
                      error &&
                      "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    } border-slate-300 mb-4 border px-3 pt-2 pb-16 rounded w-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary-200 focus:ring-1 focus:ring-primary-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
                    required
                    placeholder="Enter your message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </label>
                <button
                  onClick={() => setError(true)}
                  type="submit"
                  className="font-medium  mb-4  text-sm py-2 w-20 rounded border border-primary-200  text-primary-200 hover:bg-primary-200/10 transition-colors duration-200"
                >
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <span>
                      {/* <IconSend /> */}
                      Send
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
        <div
          className={` ${
            emailSend ? "opacity-100" : "opacity-0"
          } absolute top-16 left-0 right-0 flex justify-center transition-opacity duration-1000 ease-linear`}
        >
          <p className="bg-primary-300 font-body p-3 text-sm rounded text-white">
            Thankyou! Your message has been delivered.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
