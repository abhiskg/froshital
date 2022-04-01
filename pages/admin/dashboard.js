import axios from "axios";
import { useRouter } from "next/router";
import { signOut, getSession } from "next-auth/react";
import dbConnect from "@/lib/dbConnect";
import Client from "@/models/Client";
import StatusLabel from "@/components/StatusLabel";
import { IconCheck, IconTrash, IconX } from "icons";

export default function Dashboard({ clients }) {
  // const { data: session } = useSession();

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

  // if (!session && session?.user.role !== "admin") {
  //   return <p>Access Denied</p>;
  // }

  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-5 bg-gray-100 p-3 md:flex-row 2xl:gap-10">
      <div className=" relative hidden bg-gradient-to-b from-gray-800 to-sky-900 md:block md:h-screen md:rounded-md md:shadow-md 2xl:w-52">
        <h1 className="rounded-t border-b border-gray-500 p-4 text-center text-lg font-bold text-gray-100 xl:p-5">
          Dashboard
        </h1>
        <ul className="flex flex-row justify-center md:flex-col">
          <li className=" cursor-pointer border-gray-500   p-3 text-center font-semibold text-gray-100 md:border-b">
            Home
          </li>

          <li
            onClick={() => signOut()}
            className=" absolute bottom-4 left-0 right-0 cursor-pointer border-gray-500 p-3 text-center font-semibold text-gray-100 hover:bg-gray-800 md:border-y"
          >
            Logout
          </li>
        </ul>
      </div>
      <div className="flex justify-between rounded bg-gradient-to-b from-gray-800 to-sky-900 p-3 md:hidden">
        <div className="font-medium text-gray-200">Dashboard</div>
        <div
          className="cursor-pointer font-medium text-gray-200"
          onClick={() => signOut()}
        >
          Logout
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-5 hidden justify-between lg:flex">
          <div className="rounded-xl bg-gradient-to-b from-sky-500 to-cyan-300 p-5 shadow xl:p-6">
            <span className="font-medium xl:text-lg">Total Clients: </span>
            <span className="font-medium xl:text-lg">{clients.length}</span>
          </div>
          <div className="rounded-xl bg-gradient-to-b from-green-400 to-emerald-300 p-5 shadow xl:p-6 ">
            <span className="font-medium xl:text-lg">Confirmed Clients: </span>
            <span className="font-medium xl:text-lg">
              {clients.filter((client) => client.status === "confirmed").length}
            </span>
          </div>
          <div className="rounded-xl bg-gradient-to-b from-yellow-400 to-amber-300 p-5 shadow xl:p-6">
            <span className="font-medium xl:text-lg">Pending Clients: </span>
            <span className="font-medium xl:text-lg">
              {clients.filter((client) => client.status === "pending").length}
            </span>
          </div>
          <div className="rounded-xl bg-gradient-to-b from-red-400 to-rose-300 p-5 shadow xl:p-6">
            <span className="font-medium xl:text-lg">Rejected Clients: </span>
            <span className="font-medium xl:text-lg">
              {clients.filter((client) => client.status === "rejected").length}
            </span>
          </div>
        </div>
        <table className="w-full table-auto border-collapse  bg-white shadow">
          <thead>
            <tr className="bg-gradient-to-t from-gray-600 to-sky-800 text-gray-200">
              <th className=" hidden w-24 border border-slate-300 p-2 md:table-cell">
                Date
              </th>
              <th className=" min-w-[7rem] border border-slate-300 p-2">
                Name
              </th>
              <th className="hidden w-56 border border-slate-300 p-2 lg:table-cell">
                Email
              </th>
              <th className="w-28 border border-slate-300 p-2">Phone</th>
              <th className="border border-slate-300 p-2 2xl:w-[8.5rem]">
                Service
              </th>
              <th className="hidden border border-slate-300 p-2 xl:table-cell">
                Message
              </th>
              <th className="hidden w-24 border border-slate-300 p-2 sm:table-cell">
                Status
              </th>
              <th className="hidden w-24 border border-slate-300 p-2 sm:table-cell">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
                <td className=" hidden border border-slate-300 p-1.5 text-sm md:table-cell">
                  {client.date}
                </td>
                <td className="border border-slate-300 p-1.5 text-sm">
                  {client.name}
                </td>
                <td className="hidden border border-slate-300 p-1.5 text-sm lg:table-cell">
                  <a href={`mailto:${client.email}`}>{client.email}</a>
                </td>
                <td className="border border-slate-300 p-1.5 text-sm">
                  <a href={`tel:${client.phone}`}>{client.phone}</a>
                </td>
                <td className="border border-slate-300 p-1.5 text-sm">
                  {client.service}
                </td>
                <td className="hidden border border-slate-300 p-1.5  text-sm xl:table-cell">
                  {client.message}
                </td>
                <td
                  onClick={() => handleModal(client._id)}
                  className="hidden border border-slate-300 p-1.5 text-center text-sm font-semibold text-yellow-400 sm:table-cell"
                >
                  <StatusLabel>{client.status}</StatusLabel>
                </td>
                <td className="hidden border border-slate-300 p-1.5 text-center sm:table-cell">
                  <span
                    onClick={() => confirmHandler(client._id)}
                    className="inline-block cursor-pointer text-green-500 transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    <IconCheck />
                  </span>
                  <span
                    onClick={() => rejectHandler(client._id)}
                    className="mx-2 inline-block cursor-pointer text-red-300 transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    <IconX />
                  </span>
                  <span
                    className="inline-block cursor-pointer text-red-600 transition-transform duration-200 ease-in-out hover:scale-110"
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

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  await dbConnect();
  const result = await Client.find({}).sort({ date: -1 });
  const clients = result.map((doc) => {
    const client = doc.toObject();
    client._id = client._id.toString();
    client.date = client.date.toDateString();
    client.createdAt = client.createdAt.toString();
    client.updatedAt = client.updatedAt.toString();
    return client;
  });

  return {
    props: {
      clients,
    },
  };
}
