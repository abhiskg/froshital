import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return null;

  return (
    <div className="mt-6">
      <ul className="my-2 flex list-none pl-0">
        {!isFirst && (
          <li>
            <Link href={prevPage}>
              <a className=" mr-1.5 block cursor-pointer rounded-sm bg-white py-2 px-3 leading-tight shadow-md hover:bg-gray-800 hover:text-white">
                Previous
              </a>
            </Link>
          </li>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`page-${i}`}>
            <Link href={`/blog/page/${i + 1}`}>
              <a className="relative mr-1.5 block cursor-pointer rounded-sm bg-white py-2 px-3 leading-tight shadow-md hover:bg-gray-800 hover:text-white">
                {i + 1}
              </a>
            </Link>
          </li>
        ))}
        {!isLast && (
          <li>
            <Link href={nextPage}>
              <a className="relative  mr-1.5 block cursor-pointer rounded-sm bg-white py-2 px-3 leading-tight shadow-md hover:bg-gray-800 hover:text-white">
                Next
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
