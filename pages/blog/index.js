import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import Post from "../../components/Post";
import sortByDate from "../../utils/sortByDate";

export default function BlogPage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <section className="mx-auto w-11/12  md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <h1 className="mt-5 border-b-4 text-5xl font-bold">Latest Blog Post</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 4),
    },
  };
}
