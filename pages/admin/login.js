import { useState } from "react";
import ButtonLoader from "@/components/ButtonLoader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    setLoading(false);
  };

  return (
    <section>
      <div className="mt-36 bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text p-2 text-center text-4xl font-bold text-transparent ">
        Login Page
      </div>
      <div className="mx-auto mt-5 max-w-lg p-5 sm:rounded-md sm:bg-white sm:shadow-md">
        <form onSubmit={submitHandler}>
          <div className="">
            <label>
              <span className=" font-medium text-gray-600">Email</span>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
                required
                className={` mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-gray-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1  focus:ring-indigo-500 ${
                  error &&
                  "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                placeholder="Email"
              />
            </label>
          </div>

          <div className="mt-3 mb-7">
            <label>
              <span className="font-medium text-gray-600">Password</span>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                autoComplete="current-password"
                required
                className={`mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-gray-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1  focus:ring-indigo-500 ${
                  error &&
                  "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                placeholder="Password"
                value={password}
              />
            </label>
          </div>

          <div>
            <button
              onClick={() => setError(true)}
              type="submit"
              disabled={loading ? true : false}
              className=" group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
            >
              {loading ? <ButtonLoader /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
