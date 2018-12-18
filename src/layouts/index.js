import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.scss';

const HeaderWrapper = styled.div`
  background: #22384c;
  margin-bottom: 1.45rem;
  h1 {
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
  }
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/picks">Picks</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderWrapper>
);

const Footer = () => (
  <div className="footer_wrap">
    <div className="footer">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/matthewchristopherwoods/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/matopher" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/matopher/" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://github.com/matopher" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://medium.com/@matopher" target="_blank">
            Medium
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Matt Woods"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header data={data} />
    <meta name="p:domain_verify" content="9d5fe0013168f95ead9ea2be2a7f385f" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutSiteMeta {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
