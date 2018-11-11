import React from 'react'
import Helmet from 'react-helmet'

const About = () => (
  <section>
    <Helmet 
      title="About us" 
      meta={[
        { name: "description", content: "About us" },
      ]}
    />
    <h1>About us</h1>
  </section>
)
export default About