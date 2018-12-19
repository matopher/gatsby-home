import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PostListingWrapper = styled.article`
  margin-bottom: 1.5rem;
  padding: 4rem;
  margin: 60px 0;
  background: #fff;
  border: 1px solid #e8eaeb;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  -webkit-transition-property: color, background-color, -webkit-box-shadow,
    -webkit-transform;
  transition-property: color, background-color, -webkit-box-shadow,
    -webkit-transform;
  transition-property: color, background-color, box-shadow, transform;
  transition-property: color, background-color, box-shadow, transform,
    -webkit-box-shadow, -webkit-transform;
  -webkit-transition-duration: 0.15s;
  transition-duration: 0.15s;
  h3 {
    margin-bottom: 0.5em;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  .read-more {
    margin-top: 1em;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .5px;
  }
  p {
    margin-bottom: 0;
  }
  span {
    margin-bottom: .5rem;
    display: inline-block;
    font-size: .9rem;
    color: #808080;
}
`;

const PostListing = ({ post }) => (
  <PostListingWrapper>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    <Link
      to={post.fields.slug}
      style={{
      }}
      className="read-more"
    >
      Read More &rarr;
    </Link>
  </PostListingWrapper>
);

export default PostListing;
