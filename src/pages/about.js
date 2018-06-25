import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const About = ({data}) => (
  <div>
    <Img sizes={data.sign.sizes} alt="Matt Woods" className="about__image" />
    <h1>Who is this "Matt Woods" character anyways?</h1>
    <p>Here's a quick peek intro my core values so you can understand what I'm really about.</p>

    <h2>Loving at 100%</h2>

    <p>I’m about people — first and foremost.
    I’m a passionate disciple of Jesus and I strive to love people right where they’re at today.
    </p>

    <h2>Hunger for excellence</h2>

    <p>I reject the bare minimum and forge ahead.</p>

    <h2>Always encourage</h2>

    <p>My life is a precision instrument designed to refine
    character and call out the treasure in others.
    </p>

    <h2>Stay humble &amp; thoughtful</h2>

    <p>I step out to set aside pre-chewed thinking and
    walk in others’ shoes to understand their unique perspective.
    </p>
  </div>
);

export default About;

export const query = graphql`
query AboutPhotos {
  sign: imageSharp(id: {regex: "/sign.jpg/"}) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  } 
}
`