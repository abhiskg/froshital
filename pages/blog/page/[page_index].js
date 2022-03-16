import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { POST_PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";
import { getPosts } from "@/lib/post";
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <section className=" mx-auto mt-10 w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className=" bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text pb-2 text-4xl font-bold text-transparent">
            Froshital Blog
          </h1>
          <Search />
        </div>

        <div className="mt-7 mb-5 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="w-full min-w-fit md:w-1/4 ">
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
