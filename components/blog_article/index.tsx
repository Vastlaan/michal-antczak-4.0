import React from "react";
import ReactMarkdown from "react-markdown";
import { Post } from "../../types";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/night-owl.css";
import {
  Text,
  Section,
  ContainerNarrow,
  Heading1,
  respond,
} from "../../styles";
import styled from "styled-components";

export default function BlogArticle({ post }: { post: Post }) {
  return (
    <CustomSection>
      <ContainerNarrow>
        <Heading1 wide="100%">{post.title}</Heading1>
        <Text>Read time: {post.time}</Text>
        <ReactMarkdown
          children={post.content}
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
        />
      </ContainerNarrow>
    </CustomSection>
  );
}

const CustomSection = styled(Section)`
  background-color: white;
  margin: 8.7rem auto;
  font-size: 1.6rem;
  padding: 2.7rem 0rem;

  ${respond(
    "s",
    `
      padding: 2.7rem;
    `
  )}

  h1 {
    color: ${(p) => p.theme.greyPrimary};
  }
  ol {
    padding: 1.6rem;
  }

  p {
    margin: 1.6rem 0;
  }
`;
