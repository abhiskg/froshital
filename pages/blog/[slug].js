import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "@/components/CategoryLabel";
import Layout from "@/components/Layout";

export default function BlogPost({
  frontmatter: { title, category, date, cover_image },
  content,
  slug,
}) {
  // console.log(content);
  return (
    <Layout>
      <section className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <Link href="/blog">
          <a>Go Back</a>
        </Link>
        <div className="mt-6 w-full rounded-lg bg-white px-10 py-6 shadow-md">
          <div className="mt-4 flex items-center justify-between">
            <h1 className="mb-7 text-5xl">{title}</h1>
            <CategoryLabel>{category}</CategoryLabel>
          </div>
          <div className="relative h-96 w-full">
            <Image
              src={cover_image}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>

          <div className="mr-4">{date}</div>
          <div className="blog-text mt-2">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </section>
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
