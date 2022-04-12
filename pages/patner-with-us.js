import ButtonLoader from "@/components/ButtonLoader";
import Layout from "@/components/Layout";
import { ArrowDown } from "icons";
import { useState } from "react";

export default function PatnerWithUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");
  const [healthProfessional, setHealthProfessional] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const [position, setPosition] = useState("");
  const [knowingFroshital, setKnowingFroshital] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [error, setError] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    try {
      const response = await axios.post("/api/", {
        name,
        email,
        phone,
        hospital,
        department,
        healthProfessional,
        departmentHead,
        position,
        knowingFroshital,
        meetingDate,
      });

      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setHospital("");
      setDepartment("");
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
      <section className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <h1 className="heading mt-2">Patner With Us</h1>
        <form className="mx-auto max-w-xl space-y-3 " onSubmit={handleSubmit}>
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
              <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
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
            <label className="w-full">
              <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                Name of Hospital
              </span>
              <input
                className={`contact-form py-2 ${
                  error &&
                  "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                placeholder="Enter hospital name"
                type="text"
                required
                name="hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label className="w-full">
              <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                Name of Department
              </span>
              <input
                className={`contact-form py-2 ${
                  error &&
                  "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                placeholder="Enter department name"
                type="text"
                required
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              <span className="block  after:ml-0.5 after:text-red-500 after:content-['*'] ">
                Are you a healthcare professional?
              </span>
              <div className="relative">
                <select
                  className={`contact-form appearance-none py-2 ${
                    error &&
                    "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  }`}
                  required
                  type="text"
                  name="healthProfessional"
                  value={healthProfessional}
                  onChange={(e) => setHealthProfessional(e.target.value)}
                >
                  <option value="" hidden disabled>
                    Please Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <span className="absolute right-3 top-2">
                  <ArrowDown />
                </span>
              </div>
            </label>
          </div>

          <div>
            <label>
              <span className="block  after:ml-0.5 after:text-red-500 after:content-['*'] ">
                Are you the Department head?
              </span>
              <div className="relative">
                <select
                  className={`contact-form appearance-none py-2 ${
                    error &&
                    "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  }`}
                  required
                  type="text"
                  name="departmentHead"
                  value={departmentHead}
                  onChange={(e) => setDepartmentHead(e.target.value)}
                >
                  <option value="" hidden disabled>
                    Please Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <span className="absolute right-3 top-2">
                  <ArrowDown />
                </span>
              </div>
            </label>
          </div>

          <div>
            <label className="w-full">
              <span className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                If no, please state your position within the department
              </span>
              <input
                className={`contact-form py-2 ${
                  error &&
                  "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                placeholder="Enter your position"
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              <span className="block  after:ml-0.5 after:text-red-500 after:content-['*'] ">
                How much do you know about Froshital?
              </span>
              <div className="relative">
                <select
                  className={`contact-form appearance-none py-2 ${
                    error &&
                    "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  }`}
                  required
                  type="text"
                  name="knowingFroshital"
                  value={knowingFroshital}
                  onChange={(e) => setKnowingFroshital(e.target.value)}
                >
                  <option value="" hidden disabled>
                    Please Select
                  </option>
                  <option value="Familiar">I am Familiar</option>
                  <option value="Not Familiar">I am not Familiar</option>
                </select>
                <span className="absolute right-3 top-2">
                  <ArrowDown />
                </span>
              </div>
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
                <span>Submit</span>
              </div>
            )}
          </button>
        </form>
      </section>
    </Layout>
  );
}
