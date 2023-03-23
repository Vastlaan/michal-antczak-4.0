import React from "react";
import { Post } from "../../types";
import { Text, SectionNarrow } from "../../styles";

export default function BlogArticle({ post }: { post: Post }) {
  return (
    <SectionNarrow margin="8.7rem auto">
      <Text>{post.content}</Text>
    </SectionNarrow>
  );
}
