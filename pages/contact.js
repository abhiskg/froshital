import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Layout from "@/components/Layout";
import ButtonLoader from "@/components/ButtonLoader";
import {
  ArrowDown,
  IconAddress,
  IconMail,
  IconPhone,
  IconSend,
  Whatsapp,
} from "../icons";

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
      {/* <Head>
        <title>Contact | Froshital</title>
        <meta
          name="description"
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold. We offer best medical services in India in cheap price."
        />
        <meta property="og:url" content="https://froshital.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact | Froshital"
        />
        <meta
          property="og:description"
          content="Froshital is a Medical Service provider in India. We provide Hospital Referrals, Medical Tourism and lab booking services to people around the wrold. We offer best medical services in India in cheap price."
        />
        <meta property="og:image" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
        <meta property="og:image:alt" content="Froshital Brand Image" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="twitter:image:src" content="https://res.cloudinary.com/froshital/image/upload/v1649684992/Froshital/Career_cover_pic_tnld8q.jpg" />
      </Head> */}

      <section className="mx-auto mt-5  mb-5 w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl ">
        <div className=" mt-2 flex flex-col  justify-between lg:flex-row lg:gap-x-5 xl:gap-x-20 ">
          <div className="order-1 mt-5 lg:order-none lg:mt-0 lg:w-2/4">
            <h1 className="text-primary-200 mb-6  text-xl font-medium">
              Contact Information
            </h1>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-700 p-2 text-white">
                <IconMail />
              </div>
              <div>
                <h3 className=" font-medium">Email</h3>
                <a
                  className="font-body text-sm"
                  href="mailto:contact@froshital.com"
                >
                  contact@froshital.com
                </a>
              </div>
            </div>
            <div className="my-3 flex items-center gap-3">
              <div className="rounded-full border bg-green-700 p-2 text-white">
                <IconPhone />
              </div>
              <div>
                <h3 className=" font-medium">Phone</h3>
                <a className="font-body text-sm" href="tel:+918433437690">
                  +91-8433437690
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border bg-green-700 p-2 text-white">
                <Whatsapp scale="21" />
              </div>
              <div>
                <h3 className=" font-medium">WhatsApp</h3>
                <a
                  className="font-body text-sm"
                  href="https://wa.me/918433437690?text=Hello%20Froshital"
                >
                  +91-8433437690
                </a>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="rounded-full border bg-green-700 p-2 text-white">
                <IconAddress />
              </div>
              <div>
                <h3 className=" font-medium">Address</h3>
                <a
                  className="font-body text-sm"
                  href="https://wa.me/918433437690?text=Hello%20Froshital"
                >
                  H. No. 10 Third Floor, Old Double Storey Lajpat Nager 4, New
                  Delhi, 110024, INDIA
                </a>
              </div>
            </div>

            <div className="mt-5 mb-1 text-gray-600">
              We are open Monday to Friday from 10 am to 7pm.
            </div>
            <div className="text-gray-600">
              We are closed on weekends &amp; public holidays.
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
                    Phone Number
                  </span>
                  <input
                    className={`contact-form py-2 ${
                      error &&
                      "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }`}
                    placeholder="Enter your phone number"
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
                className="w-20 rounded bg-green-700 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-gray-900"
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
