import React from 'react'
import Link from 'gatsby-link'
import matt from './matt.jpg'

const IndexPage = () => (
  <div>
    <section>
      <h1>I'm an inbound marketer + front-end web developer who gets results.</h1>
      <h2>I'm on a mission to grow companies by marrying growth-hacking and, well, "actual" hacking.</h2>
    </section>

    <section>
      <img src={matt} />>
      <h2>Hi, I'm Matt Woods.</h2>
      <p>I currently lead inbound marketing at a Hubspot partner agency in Norman, Oklahoma. <Link to='/contact'>Drop me a note</Link> if you're interested in working together or booking me for a speaking event.</p>
    </section>

    <section>
      <div>
        <h3>Marketing</h3>
        <p>Content marketing? Email automation? Social media? I've helped companies grow through digital-first strategies for 4+ years.</p>
      </div>

      <div>
        <h3>Development</h3>
        <p>I'm currently spending my nights and weekends learning the React Javascript framework and Hubspot COS. Check out <a href="https://github.com/matopher">my Github profile</a> for samples of my past projects.</p>
      </div>

    <div>
      <h3>Speaking & Teaching</h3>
      <p>Why am I so passionate about speaking and mentoring? Because it makes a difference. I currently mentor a software business development team at the University of Oklahoma and regularly speak at student groups.</p>
    </div>
    </section>

    <section>
      <div>
        <p>"I found Matt to be an outstanding man of integrity, honesty and a hard worker. Matt was a great self-starter and took the lead on many projects. Matt also is also a very talented writer. His blogs and article were the most read out of any team member."</p>
        <h3>Korey McMahon</h3>
        <h4>CEO & Founder, McMahon Marketing</h4>
      </div>

      <div>
      <p>"Matt is a smart, confident learner who is willing to adapt and learn everything he can to provide quality work to his team... I would recommend Matt to any team and am confident he will continue to make an impact throughout his career."</p>
      <h3>Jen McAbee</h3>
      <h4>Senior Project Manager, Saxum</h4>
    </div>
    </section>

    <section>
      <h2>Hiring is Broken. Why Not Hack It?</h2>
      <p>Want to build evergreen skills, become a networking ninja, and use off-the-wall strategies to catapult yourself into the job you’ve always wanted?</p>
      <a href="https://matt.landinglion.com/29-irresistible-tips-to-land-your-ultimate-dream-job/">Get it now &#8594;</a>
    </section>
  </div>
)

export default IndexPage
