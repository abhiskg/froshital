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
import { IconMail, IconPhone, IconSend, PhoneCall } from "../icons";

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
      <div className=" relative ">
        <Head>
          <title>Froshital | Contact</title>
        </Head>
        <section className="mx-auto mt-5 mb-5 w-[89%] max-w-screen-xl md:mt-16 lg:mt-28 lg:w-9/12 ">
          <div className=" flex flex-col gap-4 p-2 md:flex-row ">
            <div className="md:w-2/3 ">
              <h1 className="text-primary-200 mb-6  mt-2 text-lg font-medium">
                Contact Information
              </h1>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-800 p-2 text-white">
                  <IconMail />
                </div>
                <div>
                  <h3 className=" font-medium">Email</h3>
                  <a
                    className="font-body text-sm"
                    href="mailto:froshital@gmail.com"
                  >
                    forshital@gmail.com
                  </a>
                </div>
              </div>
              <div className="my-3 flex items-start gap-3">
                <div className="rounded-full border bg-gray-800 p-2 text-white">
                  <IconPhone />
                </div>
                <div>
                  <h3 className=" font-medium">Phone</h3>
                  <a className="font-body text-sm" href="tel:+91 84334 37690">
                    +91 84334 37690
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-primary-200 mb-6  mt-2 text-lg font-medium">
                  Send me a message
                </h2>
                {/* <IconEmail /> */}
              </div>

              <form className="space-y-2" onSubmit={handleSubmit}>
                <div>
                  <label className="w-full">
                    <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                      Name
                    </span>
                    <input
                      className={`border ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } focus:ring-primary-300 w-full rounded border-slate-300 px-3 py-2 text-sm  placeholder-slate-400 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-1  disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none `}
                      placeholder="Enter your name"
                      type="text"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>

                <div>
                  <label className="w-full">
                    <span className="block   after:ml-0.5 after:text-red-500 after:content-['*']">
                      Email
                    </span>
                    <input
                      className={`border ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } focus:ring-primary-300 w-full rounded border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-1  disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none `}
                      placeholder="Enter your email"
                      type="email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>

                <div>
                  <label className="w-full">
                    <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                      Telephone No
                    </span>
                    <input
                      className={`border ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } focus:ring-primary-300 w-full rounded border-slate-300 px-3 py-2 text-sm  placeholder-slate-400 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-1  disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none `}
                      placeholder="Enter your name"
                      type="number"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>

                <div>
                  <label>
                    <span className="block  after:ml-0.5 after:text-red-500 after:content-['*'] ">
                      Service
                    </span>
                    <select
                      className={`${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } focus:ring-primary-300 mb-3 w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-1`}
                      required
                      placeholder="Enter your subject"
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="Medical Tourism">Medical Tourism</option>
                      <option value="Hospital Referrals">
                        Hospital Referrals
                      </option>
                      <option value="Lab Booking">Lab Booking</option>
                    </select>
                  </label>
                </div>

                <div>
                  <label>
                    <span className="block  ">Additional Message</span>
                    <textarea
                      className={`focus:ring-primary-300 mb-4 w-full  rounded border border-slate-300 px-3 pt-2 pb-16 text-sm placeholder-slate-400 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-1  disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none `}
                      placeholder="Enter your message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </label>
                </div>

                <button
                  onClick={() => setError(true)}
                  type="submit"
                  className="text-primary-200 w-20 rounded border border-gray-800 py-2 text-sm  font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white"
                >
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <div className="flex items-center justify-center gap-1">
                      <span>
                        <IconSend />
                      </span>
                      <span>Send</span>
                    </div>
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
          <p className="rounded bg-gray-800 p-3 font-body text-sm text-white">
            Thankyou! Your message has been delivered.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
