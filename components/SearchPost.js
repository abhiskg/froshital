import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function SearchPost({ post }) {
  return (
    <div className="mb-2 w-full rounded bg-white p-3 shadow-md">
      <div className="flex justify-between">
        <span className="text-sm font-light text-gray-500">
          {post.frontmatter.date}
        </span>
        <span>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </span>
      </div>
      <h2 className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-lg font-bold text-gray-700 hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
      </h2>
      <p className="mt-1 text-sm text-gray-600">{post.frontmatter.excerpt}</p>
    </div>
  );
}
