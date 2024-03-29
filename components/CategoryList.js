import Link from "next/link";
import PropTypes from "prop-types";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full rounded-md bg-white p-3 shadow-md ">
      <div className=" mb-px rounded bg-gray-800 py-2 pr-6 pl-2 text-xl font-semibold text-gray-100 ">
        Blog Categories
      </div>
      <div className="flex flex-col  divide-gray-300">
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <a className="rounded border-b py-2 px-2 transition-colors  hover:bg-gray-800 hover:text-white">
              {category}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};
