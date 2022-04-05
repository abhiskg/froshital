import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div className="group w-full overflow-hidden rounded-md bg-white shadow-md hover:shadow-xl">
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.alt}
        height={380}
        width={700}
        className="transition-transform duration-[4000ms] group-hover:scale-110"
      />

      <div className="px-4 pb-2">
        <div className="flex items-center justify-between ">
          <span className="text-sm font-light text-gray-600">
            {post.frontmatter.date}
          </span>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>
        <h2 className="mt-px">
          <Link href={`/blog/${post.slug}`}>
            <a className="relative py-px text-lg font-semibold text-gray-700  before:absolute  before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0  before:bg-gray-800 before:transition-transform before:duration-200 before:ease-linear before:content-[''] before:hover:scale-x-100  ">
              {post.frontmatter.title}
            </a>
          </Link>
        </h2>
        <p className=" mt-px text-sm text-gray-600">
          {post.frontmatter.excerpt.length > 90
            ? post.frontmatter.excerpt.slice(0, 90) + "..."
            : post.frontmatter.excerpt}
        </p>
        <div className="">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-sm text-blue-600 hover:text-blue-700">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
