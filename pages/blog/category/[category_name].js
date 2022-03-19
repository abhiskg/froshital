import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import matter from "gray-matter";
import { getPosts } from "@/lib/post";
import Search from "@/components/Search";
import Head from "next/head";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <Head>
        <title>{categoryName} | Froshital</title>
      </Head>
      <section className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <div className="mt-7 flex items-center justify-between">
          <h1 className=" bg-gradient-to-tr from-emerald-500 to-blue-500 bg-clip-text pb-2 text-4xl font-bold text-transparent">
            Posts in {categoryName}
          </h1>
          <Search />
        </div>
        <div className="mt-7 mb-10 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className=" w-full md:w-3/4">
            <div className="grid gap-5 lg:grid-cols-2 ">
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
          </div>
          <div className="w-full min-w-fit md:w-1/4 ">
            <CategoryList categories={categories} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
