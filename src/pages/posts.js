import React from 'react';
import Link from 'gatsby-link';

export default ({data}) => {
  // console.log(data);
  const { allMediumPost: { edges }} = data;
  console.log(edges);
  const posts = edges.map((post) => {
    post = post.node;
    const image = `https://cdn-images-1.medium.com/max/1600/${post.virtuals.previewImage.imageId}`
    return (
      <div>
        <h2>
          <a href={`https://medium.com/@matopher/${post.uniqueSlug}`}>
            {post.title}
          </a>
        </h2>
        <img src={image} />
        <a>Go there &rarr;</a>
        <p>{post.virtuals.subtitle}</p>
        <br />
      </div>
    );
  })
  return (
    <div>
      <h1>Posts</h1>
      {posts}
    </div>
  )
}

export const query = graphql`
  query StoriesQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          uniqueSlug
        }
      }
    }
  }

`