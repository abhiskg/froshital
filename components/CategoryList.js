import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full rounded bg-white p-5 shadow-md">
      <h3 className="rounded bg-gray-800 p-3 text-2xl text-white">
        Blog Categories
      </h3>
      <ul className="divide-y divide-gray-300">
        {categories.map((category, index) => (
          <li key={index} className="cursor-pointer p-4  hover:bg-gray-50">
            <Link href={`/blog/category/${category.toLowerCase()}`}>
              <a className="p-">{category}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
