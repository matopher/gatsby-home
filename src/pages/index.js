import React from 'react';
import Link from 'gatsby-link';
import { BarChart, TrendingUp, Github, Users } from 'react-feather';
import PostListing from '../components/Posts/PostListing';

const cta_link =
  'https://matt.landinglion.com/29-irresistible-tips-to-land-your-ultimate-dream-job/';

const IndexPage = ({ data }) => (
  <div>
    <section className="headlines center">
      <BarChart color="#22384c" size="6rem" className="heartbeat" />
      <h1>
        I'm an inbound marketer + front-end web developer who gets results.
      </h1>
      <h2>
        I'm on a mission to grow companies by marrying growth-hacking and, well,
        "actual" hacking.
      </h2>
      <a href="#intro">Tell me more &#8594;</a>
    </section>

    <section className="intro center" id="intro">
      <div>
        <img
          src={data.mattImage.sizes.src}
          alt="Matt Woods"
          className="intro__headshot scale-in-center"
        />
        <h2>Hi, I'm Matt Woods.</h2>
        <p>
          I'm currently an inbound marketer at{' '}
          <a href="https://www.tailwindapp.com">Tailwind</a> in Oklahoma.
          <Link to="/contact"> Drop me a note</Link> if you're interested in
          working together or booking me for a speaking event.
        </p>
      </div>
    </section>

    <section className="skills center">
      <div className="skills__feature">
        <TrendingUp color="#22384c" size="4rem" />
        <h3>Marketing</h3>
        <p>
          Content marketing? Email automation? Social media? I've helped
          companies grow through digital-first strategies for 4+ years.
        </p>
      </div>

      <div className="skills__feature">
        <Github color="#22384c" size="4rem" />
        <h3>Development</h3>
        <p>
          I'm currently spending my nights and weekends learning Laravel and
          React. Check out &nbsp;<a href="https://github.com/matopher">
            my Github profile
          </a>{' '}
          for samples of my past projects.
        </p>
      </div>

      <div className="skills__feature">
        <Users color="#22384C" size="4rem" />
        <h3>Speaking & Teaching</h3>
        <p>
          Why am I so passionate about speaking and mentoring? Because it makes
          a difference. I regularly guest lecture with students at the
          University of Oklahoma.
        </p>
      </div>
    </section>

    <section className="testimonial__section">
      <div className="testimonial">
        <p>
          "I found Matt to be an outstanding man of integrity, honesty and a
          hard worker. Matt was a great self-starter and took the lead on many
          projects. Matt also is also a very talented writer. His blogs and
          article were the most read out of any team member."
        </p>
        <img
          src={data.koreyImage.sizes.src}
          alt="Korey McMahon"
          className="testimonial__image"
        />
        <h3>Korey McMahon</h3>
        <h4>CEO & Founder, McMahon Marketing</h4>
      </div>

      <div className="testimonial">
        <p>
          "Matt is a smart, confident learner who is willing to adapt and learn
          everything he can to provide quality work to his team... I would
          recommend Matt to any team and am confident he will continue to make
          an impact throughout his career."
        </p>
        <img
          src={data.jenImage.sizes.src}
          alt="Jen McAbee"
          className="testimonial__image"
        />
        <h3>Jen McAbee</h3>
        <h4>Senior Project Manager, Saxum</h4>
      </div>
    </section>

    <section>
      <h2
        style={{
          fontSize: '3em',
          textAlign: 'center',
          marginTop: '1em'
        }}
      >
        Recent Posts
      </h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </section>
  </div>
);

export default IndexPage;

export const query = graphql`
  query HomePhotos {
    mattImage: imageSharp(id: { regex: "/matt.jpg/" }) {
      sizes(maxWidth: 1240) {
        src
      }
    }
    koreyImage: imageSharp(id: { regex: "/korey.jpg/" }) {
      sizes(maxWidth: 1240) {
        src
      }
    }
    jenImage: imageSharp(id: { regex: "/jen.jpg/" }) {
      sizes(maxWidth: 1240) {
        src
      }
    }
    offerCTA: imageSharp(id: { regex: "/dream-job/" }) {
      sizes(maxWidth: 1240) {
        src
      }
    }
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
