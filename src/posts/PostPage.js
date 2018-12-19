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
  @media screen and (max-width: 600px) {
    padding: 1em 2em;
  }
  .post-date {
    margin-bottom: 1.5em;
    display: inline-block;
    font-size: .9rem;
    color: #808080;
    display: inline-flex;
    align-items: center;
    svg {
        max-height: 14px !important;
        fill: #808080;
    }
  }
  iframe {
    max-width: 100%;
  }
`;

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <BlogPost>
        <Content>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <span className="post-date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"/></svg>
          {data.markdownRemark.frontmatter.date}</span>
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
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;
