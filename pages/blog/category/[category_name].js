import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import matter from "gray-matter";
import { getPosts } from "@/lib/post";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicSearch = dynamic(() => import("@/components/Search"));

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <Head>
        <title>{categoryName} | Froshital</title>
      </Head>
      <section className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <div className="mt-3 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="heading">Post in {categoryName}</h1>
          <DynamicSearch />
        </div>
        <div className="mt-7 mb-5 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="order-1 w-full min-w-fit md:order-none md:w-1/4 ">
            <CategoryList categories={categories} />
          </div>
          <div className=" w-full md:w-3/4">
            <div className="grid gap-5 lg:grid-cols-2 ">
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
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
      categoryName:
        category_name.charAt(0).toUpperCase() + category_name.slice(1),
      categories: uniqueCategories,
    },
  };
}
