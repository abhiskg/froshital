import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div className="w-full rounded bg-white p-4 shadow-md">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={400}
        width={650}
        className="mb-2"
      />
      <div className="flex justify-between">
        <span className="font-light text-gray-500">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <h2 className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-xl font-bold text-gray-700 hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
      </h2>
      <p className="mt-1 text-sm text-gray-600">{post.frontmatter.excerpt}</p>

      <div className="mt-1">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
}
