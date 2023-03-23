import React from "react";
import { SectionNarrow } from "../../../styles";
import PostBadge from "./PostBadge";
import { Post } from "../../../types";

export default function Posts({ posts }: { posts: Post[] }) {
  function sortPostsByDate(posts: Post[]) {
    return posts.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  }

  return (
    <SectionNarrow id="blog_posts">
      {sortPostsByDate(posts).map((post) => (
        <PostBadge key={post.id} post={post} />
      ))}
    </SectionNarrow>
  );
}
