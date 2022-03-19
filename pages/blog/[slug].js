import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "@/components/CategoryLabel";
import Layout from "@/components/Layout";
import { ArrowLeft } from "icons";
import Search from "@/components/Search";
import Head from "next/head";

export default function BlogPost({
  frontmatter: { title, category, date, cover_image },
  content,
  slug,
}) {
  // console.log(content);
  return (
    <Layout>
      <Head>
        <title>{title} | Froshital</title>
      </Head>
      <div className="mx-auto w-11/12  md:w-10/12 xl:w-auto xl:max-w-6xl">
        <article>
          <header className="mt-7 mb-5 flex items-center justify-between">
            <h1 className="md:leading-14  bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text pb-2 text-4xl font-bold leading-9 tracking-tight text-transparent   sm:leading-10 ">
              {title}
            </h1>
            <Search />
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
            <div className="mt-1 text-sm font-medium leading-6 text-gray-500">
              {date}
            </div>
            <div
              className="prose prose-lg my-5"
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
