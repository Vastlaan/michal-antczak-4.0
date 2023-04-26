import React from "react";
import type { Post } from "../../types";
import Layout from "../../layouts/main";
import Head from "../../components/seo";
import BlogPage from "../../components/blog_page";

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head
        title="Blog"
        description="Read about new technologies and solutions for the programing problems"
      />
      <BlogPage posts={posts} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    "https://api.michalantczak.com/articles?_sort=id:DESC"
  );
  const data = (await res.json()) as Post[];
  return {
    props: { posts: data },
  };
}
