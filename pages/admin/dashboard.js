import { useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-5 p-3 md:flex-row xl:gap-10">
      <div className=" md:h-screen md:rounded-md md:shadow-md xl:w-52">
        <h1 className="rounded-t bg-orange-200 p-2 text-center text-lg font-bold xl:p-5 ">
          Dashboard
        </h1>
        <ul className="flex flex-row justify-center md:flex-col">
          <li
            onClick={() => setShowModal(true)}
            className=" cursor-pointer p-3 text-center font-semibold hover:bg-slate-200 md:border-b"
          >
            Home
          </li>
          <li className=" cursor-pointer p-3 text-center font-semibold hover:bg-slate-200 md:border-b">
            Services{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className=" hidden w-28 border border-slate-300 p-2 sm:table-cell">
                Date
              </th>
              <th className="w-36 border border-slate-300 p-2">Name</th>
              <th className="hidden w-40 border border-slate-300 p-2 md:table-cell">
                Email
              </th>
              <th className="w-28 border border-slate-300 p-2">Phone</th>
              <th className="w-[8.5rem] border border-slate-300 p-2">
                Service
              </th>
              <th className="hidden border border-slate-300 p-2 lg:table-cell">
                Message
              </th>
              <th className="hidden w-20 border border-slate-300 p-2 xl:table-cell">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer hover:bg-gray-200">
              <td className=" hidden border border-slate-300 p-1.5  text-sm sm:table-cell">
                12july 2020
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                John dsvas
              </td>
              <td className="hidden border border-slate-300 p-1.5  text-sm md:table-cell">
                abhi@gmail.com
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                0188508857
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                Lab Booking
              </td>
              <td className="hidden border border-slate-300 p-1.5  text-sm lg:table-cell">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="hidden border border-slate-300 p-1.5 text-center text-sm font-semibold text-yellow-400 xl:table-cell">
                pending
              </td>
            </tr>
            <tr className="cursor-pointer hover:bg-gray-200">
              <td className="hidden border border-slate-300 p-1.5 text-sm sm:table-cell">
                12july 2020
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">John</td>
              <td className="hidden border border-slate-300 p-1.5  text-sm md:table-cell">
                abhi@gmail.com
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                0188508857
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                Hospital Referrals
              </td>
              <td className="hidden border border-slate-300 p-1.5  text-sm lg:table-cell">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                culpa!
              </td>
              <td className="hidden border border-slate-300 p-1.5 text-center text-sm font-semibold text-yellow-400 xl:table-cell">
                pending
              </td>
            </tr>
            <tr className="cursor-pointer hover:bg-gray-200">
              <td className="hidden border border-slate-300 p-1.5 text-sm sm:table-cell">
                12july 2020
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">John</td>
              <td className="hidden border border-slate-300 p-1.5  text-sm md:table-cell">
                abhi@gmail.com
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                0188508857
              </td>
              <td className="border border-slate-300 p-1.5 text-sm">
                Medical Tourism
              </td>
              <td className="hidden border border-slate-300 p-1.5  text-sm lg:table-cell">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, tenetur voluptas! Maiores ab commodi repellendus.
              </td>
              <td className="hidden border border-slate-300 p-1.5 text-center text-sm font-semibold text-yellow-400 xl:table-cell">
                pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
