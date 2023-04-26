import React from "react";
import type { Post } from "../../types";
import Layout from "../../layouts/main";
import Head from "../../components/seo";
import BlogArticle from "../../components/blog_article";
import getShortContent from "../../utils/getShortContent";

export default function Blog({ post }: { post: Post }) {
  return (
    <Layout>
      <Head title={post.title} description={getShortContent(post.content)} />
      <BlogArticle post={post} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const {
    params: { id },
  } = ctx;
  const res = await fetch(`https://api.michalantczak.com/articles/${id}`);
  const data = (await res.json()) as Post;
  return {
    props: { post: data },
  };
}
