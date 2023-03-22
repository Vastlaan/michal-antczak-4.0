import React from "react";
import styled from "styled-components";
import { SectionNarrow, Heading3, Text } from "../../../styles";
import { useRouter } from "next/router";
import { Post } from "../../../types";
import getShortContent from "../../../utils/getShortContent";
import getTimeString from "../../../utils/getTimeString";

interface PostsPorps {
  posts: Post[];
}
export default function Posts({ posts }: PostsPorps) {
  const router = useRouter();

  function sortPostsByDate(posts: Post[]) {
    return posts.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  }

  return (
    <SectionNarrow id="blog_posts">
      {sortPostsByDate(posts).map((post) => {
        return (
          <PostBadge
            key={post.id}
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/blog/${post.id}`)}
          >
            <Heading>{post.title}</Heading>
            <Time>Read time: {post.time}</Time>
            <Content>{getShortContent(post.content)}</Content>
            <Categories>
              {post.categories.map((cat) => (
                <span key={cat.id}>{cat.name} </span>
              ))}
            </Categories>
            <Timestamp>{getTimeString(post.created_at)}</Timestamp>
          </PostBadge>
        );
      })}
    </SectionNarrow>
  );
}

const PostBadge = styled.article`
  border: 2px solid ${(p) => p.theme.gold};
  border-radius: 5px;
  padding: 2.7rem 1.9rem;
  margin: 1.9rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 20rem;
  grid-template-areas:
    "title title title time"
    "content content content content"
    "categories categories categories createdAt";
  grid-column-gap: 1.4rem;
  grid-row-gap: 1.4rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.greyDark};
  }
`;

const Heading = styled(Heading3)`
  grid-area: title;
  max-width: 100%;
`;

const Content = styled(Text)`
  grid-area: content;
  max-width: 80%;
`;

const Time = styled(Text)`
  grid-area: time;
  font-size: 1.4rem;
  color: ${(p) => p.theme.gold};
`;
const Categories = styled(Text)`
  border-top: 1px solid ${(p) => p.theme.greySecondary};
  padding-top: 1rem;
  grid-area: categories;
  font-size: 1.4rem;
  color: ${(p) => p.theme.green};
`;

const Timestamp = styled(Text)`
  grid-area: createdAt;
  font-size: 1.4rem;
`;
