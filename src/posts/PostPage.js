import React, { Component } from 'react';
import styled from 'styled-components';
const BlogPost = styled.article`
  width: 878px;
  margin: 0 auto 5rem;
  background: #fff;
  padding: 1em 0;
  border: 1px solid #eaecee;
  border-radius: 4px;
  position: relative;
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
  max-width: 100%;

  .post-inner-content {
    max-width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 2em 1em;
`;

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <BlogPost>
        <Content>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div
            className="post-inner-content"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }}
          />
        </Content>
      </BlogPost>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
