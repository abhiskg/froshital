export default function DeleteCard({ setDeleteModal }) {
  return (
    <div className="fixed top-0 flex h-full w-full items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="fixed flex h-auto w-auto flex-col items-center justify-center rounded-md border-b-slate-400 bg-slate-100 px-8 py-6 shadow-2xl">
        <div
          className="absolute right-3 top-3 cursor-pointer text-red-600 "
          onClick={() => setDeleteModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="mb-2 mt-2 text-xl font-medium">Are you sure?</div>
        <div className="w-72 text-sm">
          Do you really want to delete these employee record? This process
          cannot be undone
        </div>
        <div className="mt-4 flex items-center justify-evenly space-x-36">
          <button
            className="rounded-md border-2 border-gray-500 py-2 px-3 transition  duration-200 hover:bg-gray-200"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
          <button className="rounded-md bg-red-500 py-2 px-3 font-medium text-white transition duration-200 hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
