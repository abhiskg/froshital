import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full rounded bg-white p-4 shadow-md">
      <h3 className="rounded bg-gray-800 p-3 text-xl text-white xl:text-2xl">
        Blog Categories
      </h3>
      <div className="flex flex-col divide-y divide-gray-300">
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <a className="rounded p-4 hover:bg-gray-200">{category}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
