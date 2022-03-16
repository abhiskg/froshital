import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "@/components/CategoryLabel";
import Layout from "@/components/Layout";
import { ArrowLeft } from "icons";

export default function BlogPost({
  frontmatter: { title, category, date, cover_image },
  content,
  slug,
}) {
  // console.log(content);
  return (
    <Layout>
      <div className="mx-auto w-11/12  md:w-10/12 xl:w-auto xl:max-w-6xl">
        <article>
          <header className="mt-3 mb-5 border-b-2 pb-2 text-center">
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
              {title}
            </h1>
            <div className="mt-1 text-base font-medium leading-6 text-gray-500">
              {date}
            </div>
          </header>

          <div className="mb-5 flex items-center justify-between">
            <Link href="/blog">
              <a className="flex items-center text-indigo-500 hover:text-indigo-600">
                <span>
                  <ArrowLeft />
                </span>
                <span>Back to the blog</span>
              </a>
            </Link>
            <div className="flex gap-2">
              <span>Category:</span> <CategoryLabel>{category}</CategoryLabel>
            </div>
          </div>
          <div>
            <div className="relative h-96 w-full">
              <Image
                src={cover_image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>

            <div
              className="prose my-5 max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
