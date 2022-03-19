import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div className="w-full overflow-hidden rounded-md shadow-md hover:shadow-xl">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={380}
        width={700}
        className=""
      />

      <div className="-mt-2  bg-white  p-4">
        <div className="flex items-center justify-between ">
          <span className="font-light text-gray-500">
            {post.frontmatter.date}
          </span>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>
        <h2 className="mt-px">
          <Link href={`/blog/${post.slug}`}>
            <a className="relative text-lg font-semibold text-gray-700  before:absolute  before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0  before:bg-black before:transition-transform before:duration-200 before:ease-linear before:content-[''] before:hover:scale-x-100  ">
              {post.frontmatter.title}
            </a>
          </Link>
        </h2>
        <p className=" mt-px text-sm text-gray-600">
          {post.frontmatter.excerpt}
        </p>
        <div className="">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-sm text-indigo-600 hover:text-indigo-500">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
