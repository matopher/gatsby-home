import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const Blog = ({ data }) => (
  <div>
    <section className="center">
      <h1>Blog</h1>
    </section>

    <section>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </section>
  </div>
);

export default Blog;

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
