import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CategoryLabel from "@/components/CategoryLabel";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import { getPosts } from "@/lib/post";

export default function BlogPost({
  frontmatter: { title, category, date, cover_image },
  content,
  similarPosts,
}) {
  return (
    <Layout>
      <Head>
        <title>{title} | Froshital</title>
      </Head>
      <section className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <article>
          <h1 className="md:leading-14 mb-4 mt-3 bg-gradient-to-tr from-gray-700 to-gray-800 bg-clip-text pb-2 text-center text-3xl font-bold leading-9 tracking-tight text-transparent sm:leading-10 ">
            {title}
          </h1>

          <div className="flex flex-col justify-between gap-5 lg:flex-row xl:gap-10">
            <div className="flex-1">
              <div className="relative h-96 w-full">
                <Image
                  src={cover_image}
                  alt=""
                  layout="fill"
                  className="rounded"
                  priority
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm font-medium leading-6 text-gray-500">
                  {date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">
                    Category:
                  </span>{" "}
                  <CategoryLabel>{category}</CategoryLabel>
                </div>
              </div>
              <div
                className="prose my-5 prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ __html: marked(content) }}
              ></div>
            </div>
            <div>
              <span className="hidden lg:block">
                <Search />
              </span>
              <h2 className="mt-7 mb-1 text-xl font-semibold text-gray-900">
                Related Blogs
              </h2>
              {similarPosts.length > 0 &&
                similarPosts.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} key={index}>
                    <a className="flex items-start gap-2 rounded p-2 hover:bg-white hover:shadow ">
                      <Image
                        src={post.frontmatter.cover_image}
                        alt=""
                        width={60}
                        height={60}
                        className="rounded"
                      />
                      <div>
                        <h3 className="text-sm font-medium">
                          {post.frontmatter.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {post.frontmatter.date}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </article>
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

  const posts = getPosts();

  //Filter posts by category
  const categoryPosts = posts.filter(
    (post) =>
      post.frontmatter.category.toLowerCase() ===
      frontmatter.category.toLowerCase()
  );

  const similarPosts = categoryPosts.filter(
    (post) => post.frontmatter.title !== frontmatter.title
  );

  return {
    props: {
      frontmatter,
      content,
      similarPosts,
    },
  };
}
