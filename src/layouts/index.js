import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center', letterSpacing: '1px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Matt Woods
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer_wrap">
    <div className="footer">
      <ul>
        <li><a href="https://www.linkedin.com/in/matthewchristopherwoods/" target="_blank">LinkedIn</a></li>
        <li><a href="https://twitter.com/matopher" target="_blank">Twitter</a></li>
        <li><a href="https://www.instagram.com/matopher/" target="_blank">Instagram</a></li>
        <li><a href="https://github.com/matopher" target="_blank">Github</a></li>
      </ul>
      <hr />
      <p>Matt Woods</p>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matt Woods"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
