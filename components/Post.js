import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div className="mt-6 w-full rounded-lg bg-white px-8 py-6 shadow-md">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={420}
        width={600}
        className="mb-4 rounded"
      />
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <h2 className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl font-bold text-gray-700 hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
      </h2>
      <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>

      <div className="mt-3">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
      </div>
    </div>
  );
}
