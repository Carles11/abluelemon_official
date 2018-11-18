import React from 'react'
import Helmet from 'react-helmet'

const Contact = () => (
  <section>
    <Helmet 
      title="Contact" 
      meta={[
        { name: "description", content: "Contact" },
      ]}
    />
    <h1>Contact</h1>
  </section>
)
export default Contact