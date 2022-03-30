import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function SearchPost({ post }) {
  return (
    <div className="mb-2 w-80 rounded bg-white p-3 shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-500">
          {post.frontmatter.date}
        </span>
        <span>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </span>
      </div>
      <h2 className="">
        <Link href={`/blog/${post.slug}`}>
          <a className=" font-bold text-gray-700 hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
      </h2>
      <p className="mt-1 text-xs text-gray-600">{post.frontmatter.excerpt}</p>
    </div>
  );
}
