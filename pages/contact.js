import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Layout from "@/components/Layout";
import ButtonLoader from "@/components/ButtonLoader";
import { IconMail, IconPhone, IconSend } from "../icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        phone,
        service,
        message,
      });

      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setLoading(false);
      setEmailSend(true);

      setTimeout(() => {
        setEmailSend(false);
      }, 2500);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Froshital | Contact Us</title>
      </Head>
      <div className="relative ">
        {/* :DOTS BACKGROUND */}
        {/* <div>
         
          <span className="absolute -top-24 left-0 hidden opacity-10 md:block">
            <svg
              width={250}
              height={600}
              fill="none"
              viewBox="0 0 250 600"
              aria-hidden="true"
            >
              <pattern
                id="pattern-rectangles"
                x={0}
                y={0}
                width={40}
                height={40}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={10}
                  height={10}
                  className="text-green-500"
                  fill="currentColor"
                />
              </pattern>
              <rect width={250} height={600} fill="url(#pattern-rectangles)" />
            </svg>
          </span>
         
          <span className="absolute bottom-0 right-0 opacity-20">
            <svg
              width={300}
              height={300}
              fill="none"
              viewBox="0 0 300 300"
              aria-hidden="true"
            >
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="5"
                  className="fill-current text-green-500"
                />
              </pattern>
              <rect
                id="rect"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              />
            </svg>
          </span>
        </div> */}

        <section className="mx-auto mt-5  mb-5 w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl ">
          <div className=" flex flex-col justify-between p-2 lg:flex-row lg:gap-x-5 xl:gap-x-20 ">
            <div className="lg:w-2/4">
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

              <div className="relative mt-10 mr-3 rounded border-2 border-gray-200">
                {/* Embed Google map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8827.330741966553!2d2.308756110118289!3d48.87000842543867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47407434935db!2s18%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1635492407441!5m2!1sfr!2sfr"
                  title="map"
                  scrolling="no"
                  frameBorder="0"
                  width="100%"
                  height="300"
                  className=""
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:w-2/4">
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
                        "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } w-full rounded border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500   `}
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
                        "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } w-full rounded border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500   `}
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
                        "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } w-full rounded border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500   `}
                      placeholder="Enter your phone"
                      type="number"
                      required
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                        "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      } mb-3 w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                      required
                      type="text"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="" hidden disabled>
                        Select a service
                      </option>
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
                      className={`mb-4 w-full rounded  border border-slate-300 px-3 pt-2 pb-16 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500   `}
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
                  className="text-primary-200 w-20 rounded border border-blue-500 py-2 text-sm  font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white"
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
          <p className="font-body rounded bg-gray-800 p-3 text-sm text-white">
            We will contact you soon
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
