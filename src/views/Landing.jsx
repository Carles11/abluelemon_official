import React, { Fragment } from 'react';

import AboutSection from '../components/About-section';
import url from '../assets/image/background.jpg';
import Title from '../components/Title'
import Background from '../components/Background'

const Landing = () => {

  return (
    <Fragment>
      <Title/>
      <Background url={url} />
      <AboutSection />
    </Fragment>
  );
};

export default Landing;
