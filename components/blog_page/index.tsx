import React from "react";
import type { Post } from "../../types";
import Header from "./header";
import Posts from "./posts";

interface BlogPagePorps {
  posts: Post[];
}

export default function BlogPage({ posts }: BlogPagePorps) {
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
}
