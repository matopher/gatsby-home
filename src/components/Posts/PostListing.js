import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PostListingWrapper = styled.article`
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 0.5em;
  }
  a {
    margin-top: 0.25em;
    display: inline-block;
    text-decoration: none;
  }
  p {
    margin-bottom: 0;
  }
`;

const PostListing = ({ post }) => (
  <PostListingWrapper>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    <Link to={post.fields.slug}>Read More &rarr;</Link>
  </PostListingWrapper>
);

export default PostListing;
