import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { POST_PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";
import { getPosts } from "@/lib/post";
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import Head from "next/head";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Froshital</title>
      </Head>
      <section className=" mx-auto  w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <div className="mt-3 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="heading">Froshital Blog</h1>
          <Search />
        </div>

        <div className="mt-7 mb-5 flex flex-col items-center justify-between gap-5 md:flex-row md:items-start md:gap-8">
          <div className="order-1 w-full min-w-fit md:order-none md:w-1/4 ">
            <CategoryList categories={categories} />
          </div>
          <div className="w-full md:w-3/4">
            <div className="grid gap-5 lg:grid-cols-2 ">
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
            <Pagination currentPage={currentPage} numPages={numPages} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numPages = Math.ceil(files.length / POST_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  //Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);

  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(files.length / POST_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POST_PER_PAGE,
    (pageIndex + 1) * POST_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
