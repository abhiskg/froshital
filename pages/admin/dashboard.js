import axios from "axios";
import { useRouter } from "next/router";
import { IconCheck, IconTrash, IconX } from "icons";
import StatusLabel from "@/components/StatusLabel";

export default function Dashboard({ clients }) {
  const router = useRouter();
  const refreshPage = () => {
    router.replace(router.asPath);
  };

  const confirmHandler = async (id) => {
    try {
      await axios.put(`/api/client/${id}`, { status: "confirmed" });
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectHandler = async (id) => {
    try {
      await axios.put(`/api/client/${id}`, { status: "rejected" });
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`/api/client/${id}`);
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-5 bg-gray-50 p-3 md:flex-row xl:gap-10">
      <div className=" md:h-screen md:rounded-md md:shadow-md xl:w-52">
        <h1 className="rounded-t bg-orange-200 p-2 text-center text-lg font-bold xl:p-5 ">
          Dashboard
        </h1>
        <ul className="flex flex-row justify-center md:flex-col">
          <li className=" cursor-pointer p-3 text-center font-semibold hover:bg-slate-200 md:border-b">
            Home
          </li>
          <li className=" cursor-pointer p-3 text-center font-semibold hover:bg-slate-200 md:border-b">
            Services{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <div className="mb-5 flex justify-between">
          <div className="rounded-2xl bg-slate-300 p-6">
            <span className="text-lg font-medium">Total Clients: </span>
            <span className="text-lg text-orange-500">{clients.length}</span>
          </div>
          <div className="rounded-2xl bg-slate-300 p-6">
            <span className="text-lg font-medium">Confirmed Clients: </span>
            <span className="text-lg text-orange-500">
              {clients.filter((client) => client.status === "confirmed").length}
            </span>
          </div>
          <div className="rounded-2xl bg-slate-300 p-6">
            <span className="text-lg font-medium">Pending Clients: </span>
            <span className="text-lg text-orange-500">
              {clients.filter((client) => client.status === "pending").length}
            </span>
          </div>
          <div className="rounded-2xl bg-slate-300 p-6">
            <span className="text-lg font-medium">Rejected Clients: </span>
            <span className="text-lg text-orange-500">
              {clients.filter((client) => client.status === "rejected").length}
            </span>
          </div>
        </div>
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className=" hidden w-28 border border-slate-300 p-2 sm:table-cell">
                Date
              </th>
              <th className="w-36 border border-slate-300 p-2">Name</th>
              <th className="hidden max-w-fit border border-slate-300 p-2 md:table-cell">
                Email
              </th>
              <th className="w-28 border border-slate-300 p-2">Phone</th>
              <th className="w-[8.5rem] border border-slate-300 p-2">
                Service
              </th>
              <th className="hidden border border-slate-300 p-2 lg:table-cell">
                Message
              </th>
              <th className="hidden w-24 border border-slate-300 p-2 xl:table-cell">
                Status
              </th>
              <th className=" w-24 border border-slate-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
                <td className=" hidden border border-slate-300 p-1.5  text-sm sm:table-cell">
                  12july 2020
                </td>
                <td className="border border-slate-300 p-1.5 text-sm">
                  {client.name}
                </td>
                <td className="hidden border border-slate-300 p-1.5  text-sm md:table-cell">
                  <a href={`mailto:${client.email}`}>{client.email}</a>
                </td>
                <td className="border border-slate-300 p-1.5 text-sm">
                  <a href={`tel:${client.phone}`}>{client.phone}</a>
                </td>
                <td className="border border-slate-300 p-1.5 text-sm">
                  {client.service}
                </td>
                <td className="hidden border border-slate-300 p-1.5  text-sm lg:table-cell">
                  {client.message}
                </td>
                <td
                  onClick={() => handleModal(client._id)}
                  className="hidden border border-slate-300 p-1.5 text-center text-sm font-semibold text-yellow-400 xl:table-cell"
                >
                  <StatusLabel>{client.status}</StatusLabel>
                </td>
                <td className=" border border-slate-300 p-1.5 text-center">
                  <span
                    onClick={() => confirmHandler(client._id)}
                    className="inline-block cursor-pointer text-green-500"
                  >
                    <IconCheck />
                  </span>
                  <span
                    onClick={() => rejectHandler(client._id)}
                    className="mx-2 inline-block cursor-pointer text-red-300"
                  >
                    <IconX />
                  </span>
                  <span
                    className="inline-block cursor-pointer text-red-600"
                    onClick={() => deleteHandler(client._id)}
                  >
                    <IconTrash />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("http://localhost:3000/api/client");

  return {
    props: {
      clients: data.clients,
    },
  };
}
