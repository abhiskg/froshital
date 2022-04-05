import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Layout from "@/components/Layout";
import ButtonLoader from "@/components/ButtonLoader";
import { ArrowDown, IconMail, IconPhone, IconSend } from "../icons";

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

      <section className="mx-auto mt-5  mb-5 w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl ">
        <div className=" mt-2 flex flex-col  justify-between lg:flex-row lg:gap-x-5 xl:gap-x-20 ">
          <div className="order-1 mt-5 lg:order-none lg:mt-0 lg:w-2/4">
            <h1 className="text-primary-200 mb-6  text-xl font-medium">
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
                <a className="font-body text-sm" href="tel:+918433437690">
                  +91-8433437690
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
              <h2 className="text-primary-200 mb-6 text-xl font-medium">
                Send your message
              </h2>
              {/* <IconEmail /> */}
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="w-full">
                  <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                    Name
                  </span>
                  <input
                    className={`contact-form py-2 ${
                      error &&
                      "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }`}
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
                    className={`contact-form py-2 ${
                      error &&
                      "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }`}
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
                    className={`contact-form py-2 ${
                      error &&
                      "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }`}
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
                  <div className="relative">
                    <select
                      className={`contact-form appearance-none py-2 ${
                        error &&
                        "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      }`}
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
                    <span className="absolute right-3 top-2">
                      <ArrowDown />
                    </span>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <span className="block">
                    {" "}
                    Message{" "}
                    <span className="text-sm font-light text-gray-500">
                      (optional)
                    </span>
                  </span>
                  <textarea
                    className={`contact-form pt-2 pb-16 `}
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
                className="w-20 rounded bg-gray-800 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-gray-900"
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
        <div
          className={` ${
            emailSend ? "opacity-100" : "opacity-0"
          } absolute top-16 left-0 right-0 mt-px flex justify-center transition-opacity duration-1000 ease-linear`}
        >
          <p className="font-body rounded bg-gray-800 p-3 text-sm text-white">
            Thanks! We will contact you soon.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
